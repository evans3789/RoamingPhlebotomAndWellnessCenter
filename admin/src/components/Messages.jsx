import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MessagesAdmin.css";

const Messages = () => {
  const [contacts, setContacts] = useState([]);
  const [replyingId, setReplyingId] = useState(null); // currently replying message ID
  const [replyBody, setReplyBody] = useState(""); // reply text

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("token"); // admin JWT
      try {
        const res = await axios.get("https://roamingphlebotomandwellnesscenter-backend.onrender.com/api/contact", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContacts(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch messages");
      }
    };
    fetchContacts();
  }, []);

  const sendReply = async (contact) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:4000/api/mail/reply",
        {
          to: contact.email,
          subject: `Re: ${
            contact.subject ||
            "Hello dear customer! We are glad to have you. How can we be of service to you?"
          }`,
          body:
            replyBody ||
            `Hi ${contact.name},\n\nThank you for reaching out. We will get back to you soon.`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Email sent successfully!");
      setReplyingId(null);
      setReplyBody("");
    } catch (err) {
      console.error(err);
      alert("Failed to send email");
    }
  };

  return (
    <div className="messages-admin">
      <h1>Received Messages</h1>
      <table>
        <thead>
          <tr>
            <th>#</th> {/* Count column */}
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Sent At</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => (
            <tr key={c._id}>
              <td>{index + 1}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.subject}</td>
              <td>{c.message}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
              <td>
                {replyingId === c._id ? (
                  <div className="reply-form">
                    <textarea
                      value={replyBody}
                      onChange={(e) => setReplyBody(e.target.value)}
                      rows={4}
                      placeholder={`Reply to ${c.name}`}
                    />
                    <div className="reply-buttons">
                      <button onClick={() => sendReply(c)}>Send</button>
                      <button
                        onClick={() => {
                          setReplyingId(null);
                          setReplyBody("");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="reply-btn"
                    onClick={() => setReplyingId(c._id)}
                  >
                    Reply
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
