import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex ">
      <div className="mr-10">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      <div className="ml-[100px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
