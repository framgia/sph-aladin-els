import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
