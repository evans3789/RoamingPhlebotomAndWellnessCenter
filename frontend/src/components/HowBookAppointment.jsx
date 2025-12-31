import React from "react";
import "./HowBookAppointment.css";
const HowBookAppointment = () => {
  return (
    <div className="book-appointment">
      <div className="container">
        <div className="left">
          <img src="service4.jpg" alt="" />
        </div>
        <div className="right">
          <h2>HOW TO BOOK AN APPOINTMENT</h2>
          <div className="steps">
            <ol type="a" className="alpha-list">
              <li>
                Contact our customer service email us on
                info@roamingphlebotomywellness.co.ke for booking.
              </li>
              <li>
                Patents with doctors’ requisitions may be asked to share the
                request forms on email or WhatsApp messenger.
              </li>
              <li>
                You will be required to fill-in our application form giving
                instruction on the locafion and the desired time for sample
                collection.
              </li>
              <li>
                You will also fill-in the facility you would like your sample
                processed.
              </li>
              <li>
                Payments for the test will be done directly to the facility you
                want your sample processed. Proof of payment must be shared
                before samples are collected. Patients with billing arrangements
                will be required to have pre authorizations beforehand
              </li>
              <li>
                Payment for mobile sample collection services to be paid via
                RP&WC official MPESA Till number.
              </li>
              <li>Receipts to be shared immediately payments are completed.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowBookAppointment;
