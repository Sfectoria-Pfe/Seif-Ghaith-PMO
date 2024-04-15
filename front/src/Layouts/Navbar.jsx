import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { IoNotificationsOutline } from "react-icons/io5";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { createElement, useState } from "react";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="image"
            className="border border-Black-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function Navbar_() {
  return (
    <div
      style={{ width: "100%", height: 70 }}
      className="d-flex justify-content-between  shadow-sm p-3 mb-5 bg-white rounded"  >
      <div className="d-flex align-items-center gap-2">
        <Sidebar />
        
        <p className="logo">DataServ</p>
        
      </div>
      <div className="d-flex align-items-center  gap-5">
      <Typography
            as="notification"
            href="#"
            variant="small"
           
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {createElement(IoNotificationsOutline, {
                className: "h-[18px] w-[18px]",
              })}
              <span className="text-gray-900">Notification</span>
            </MenuItem>
          </Typography>
      
          <Typography
            as="notification"
            href="#"
            variant="small"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {createElement(ContactSupportIcon, {
                className: "h-[18px] w-[18px]",
              })}
              <span className="text-gray-900">Contacter Nous</span>
            </MenuItem>
          </Typography>
        <div>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
export default Navbar_;
