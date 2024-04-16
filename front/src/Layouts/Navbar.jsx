import { IoNotificationsOutline } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ProfilePage from "../pages/Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const myInfo=useSelector(state=>state.auth.me)
  return (
    <div
      style={{ width: "100%", height: 70 }}
      className="d-flex justify-content-between  shadow-sm p-3 mb-5 bg-white rounded"
    >
      <div className="d-flex align-items-center ">
        <Sidebar />

        <p style={{ fontSize: 20, fontWeight: "bold" }}>DATASERV</p>
      </div>
      <div className="d-flex align-items-center  gap-5">
        <div className="d-flex justify-content-center align-items-center  gap-2">
          <p className="m-0" style={{ fontSize: 16, fontWeight: "bold" }}>
            Notification
          </p>
          <IoNotificationsOutline size={20} />
        </div>
        <div className="d-flex  justify-content-center align-items-center gap-2">
          <p className="m-0" style={{ fontSize: 16, fontWeight: "bold" }}>
            InBox
          </p>
          <MdForwardToInbox size={20} />
        </div>
        <div>
          <p className="m-0" style={{ fontSize: 16, fontWeight: "bold" }}>
            Contact
          </p>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="outline" className="border-0">
              <img
                // src="https://media.istockphoto.com/id/1090878494/fr/photo/bouchent-portrait-du-jeune-souriant-bel-homme-en-polo-bleu-isol%C3%A9-sur-fond-gris.jpg?s=612x612&w=0&k=20&c=d4gHKQJEydpFppzIO3poAdV5dcyYN3MiTGvP07bBSrY="
                src={myInfo.Employee?.photo}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  float: "left",
                }}
              ></img>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="">
                <Link to="/profile">
                  <CgProfile size={30} />
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
              </div>
              <div className="d-flex" style={{ paddingLeft: 10 }}>
                <CiLogout size={30} />
                <Dropdown.Item
                  className="m-0"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.pathname = "/";
                  }}
                >
                  Logout
                </Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
