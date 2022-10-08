import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donator from "./routes/donator.routes";
import Requester from "./routes/requester.routes";
import Organization from "./routes/organization.routes";
import Admin from "./routes/admin.routes";
import Fund from "./routes/fund.routes";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";

const ROLES = {
  'User': 1984,
  'Organization': 5150,
  'Admin': 2001
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthProvider>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donator/*" element={<Donator />} />
      <Route path="/requester/*" element={<Requester />} />
      
      <Route element={<RequireAuth allowedRoles={[ROLES.Organization]}/>}>
      <Route path="/organization/*" element={<Organization />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[ROLES.Organization]}/>}>
      <Route path="/admin/*" element={<Admin />}/>
      </Route>
      <Route path="/fund/*" element={<Fund />} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();
