import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomeSlider from "./components/HomeSlider";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Emails from "./components/Emails";
import Messages from "./components/Messages";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import AppointmentsAdmin from "./components/AppointmentsAdmin";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected admin routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="slider" element={<HomeSlider />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="appointments" element={<AppointmentsAdmin />} />
          <Route path="emails" element={<Emails />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
