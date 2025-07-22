// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBarLayout from "./layouts/side-bar/SideBarLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBarLayout />}>
          <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
          <Route path="activity" element={<h1>Activity Page</h1>} />
          <Route path="traffic" element={<h1>Traffic Page</h1>} />
          <Route path="statistics" element={<h1>Statistics Page</h1>} />
          <Route path="invoices" element={<h1>Invoices Page</h1>} />
          <Route path="wallet" element={<h1>Wallet Page</h1>} />
          <Route path="notifications" element={<h1>Notifications Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
