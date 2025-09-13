import React, { useState } from "react";
import { Home, User, Settings, LogOut, Menu } from "lucide-react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
    { name: "Logout", icon: <LogOut size={20} />, path: "/logout" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-16"
        } bg-gray-900 text-gray-100 h-screen p-3 transition-all duration-300 relative`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-6 bg-gray-800 p-1 rounded-full border border-gray-600"
        >
          <Menu size={18} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center font-bold">
            A
          </div>
          {isOpen && <h1 className="text-xl font-semibold">AppName</h1>}
        </div>

        {/* Nav Items */}
        <nav className="mt-6 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content placeholder */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold">Main Content</h2>
        <p className="text-gray-600 mt-2">Your page content goes here.</p>
      </div>
    </div>
  );
};

export default SideNav;
