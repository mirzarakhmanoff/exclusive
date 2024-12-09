import React from "react";
import {
  FaHome,
  FaMobileAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col shadow-lg transition-all duration-300
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div className="text-xl font-bold flex items-center">
          <FaMobileAlt className="mr-2" />
          {isOpen && <span>PhoneStore</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isOpen ? "✕" : <FaBars />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 mt-4">
        <ul>
          <SidebarItem
            isOpen={isOpen}
            icon={<FaHome />}
            label="Dashboard"
            path="/admin/dashboard"
          />
          <SidebarItem
            isOpen={isOpen}
            icon={<FaMobileAlt />}
            label="Products"
            path="/admin/products"
          />
          <SidebarItem
            isOpen={isOpen}
            icon={<FaUsers />}
            label="Users"
            path="/admin/users"
          />
          <SidebarItem
            isOpen={isOpen}
            icon={<FaChartBar />}
            label="Reports"
            path="/admin/reports"
          />
          <SidebarItem
            isOpen={isOpen}
            icon={<FaCog />}
            label="Settings"
            path="/admin/settings"
          />
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-gray-500 text-sm">
        {isOpen && <span>&copy; 2024 PhoneStore</span>}
      </div>
    </div>
  );
};

interface SidebarItemProps {
  isOpen: boolean;
  icon: React.ReactNode;
  label: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  isOpen,
  icon,
  label,
  path,
}) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `
          flex items-center px-4 py-3 rounded-lg transition-all duration-200
          ${
            isActive
              ? "bg-gray-700 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }
        `
        }
      >
        <span className="text-lg">{icon}</span>
        {isOpen && <span className="ml-4">{label}</span>}
      </NavLink>
    </li>
  );
};

export default Sidebar;
