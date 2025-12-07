import { Route, Routes } from "react-router-dom";
import { Summary } from "../pages/summary";
import { Layout } from "../layout";
import { Investments } from "../pages/Investments";
import { Movements } from "../pages/movements";
import { Goals } from "../pages/goals";
import { Calendar } from "../pages/calendar";
import { Login } from "../pages/core/login";
import { RegisterUser } from "../pages/core/register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Summary />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/movements/in" element={<Movements />} />
        <Route path="/movements/out" element={<Movements />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  );
}
