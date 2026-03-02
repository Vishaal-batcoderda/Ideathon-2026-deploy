import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Register from "./pages/Register";
import StaffLogin from "./pages/StaffLogin";
import Dashboard from "./pages/Dashboard";
import StaffSuccess from "./pages/StaffSuccess";
import SelectedTeams from "./pages/SelectedTeams";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/staff-success" element={<StaffSuccess />} />
        <Route path="/selected" element={<SelectedTeams />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;