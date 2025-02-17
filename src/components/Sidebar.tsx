import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Settings, Code, Brain } from 'lucide-react';
import { categories } from '../data/categories';
import { motion } from 'framer-motion';

// Map of icon names to components
const iconMap = {
  Code,
  Brain,
  Home,
  User,
  Settings
};

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 h-screen bg-[#F2F0E9] border-r border-gray-200 fixed left-0 top-0 p-6"
    >
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Technical Driss Blog</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-700 rounded-lg ${
                    isActive ? 'bg-white/50' : 'hover:bg-white/50'
                  }`
                }
              >
                <Home className="w-5 h-5 mr-3" />
                Home
              </NavLink>
            </li>
            
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.id}`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 text-gray-700 rounded-lg ${
                        isActive ? 'bg-white/50' : 'hover:bg-white/50'
                      }`
                    }
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-gray-200 pt-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-700 rounded-lg ${
                    isActive ? 'bg-white/50' : 'hover:bg-white/50'
                  }`
                }
              >
                <User className="w-5 h-5 mr-3" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-700 rounded-lg ${
                    isActive ? 'bg-white/50' : 'hover:bg-white/50'
                  }`
                }
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
