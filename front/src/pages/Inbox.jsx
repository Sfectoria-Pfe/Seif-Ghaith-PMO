import React from "react";
import "./inbox.css";
import SearchIcon from "@mui/icons-material/Search";
import Singelmail from "../components/Singelmail";
import { Input } from "@mui/material";
import Friends from "../components/Friends";
import {Button} from "@material-tailwind/react";
function Inbox() {
  return (
    <div >
      <div className="inbox pl-4">
        <p className="pinbox">Inbox</p>
      </div>
      <div className="d-flex ml-4">
        <div
          className="col-3">
          <div className=""
             style={{
              borderRadius: 10,
              backgroundColor: "#ffffff",
              height:700,

            }}>
            <div className="d-flex justify-content-center pt-3 pb-3">
              <Button className="botn text-white">Nouveau message</Button>
            </div>
            
            <div>
              <p className="pl-1">Ma list : </p>
              <div className="d-flex flex-column align-items-start p-2">
                <Friends />
                
                <Friends />
                <Friends />
                <Friends />
                <Friends />
                <Friends />
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-4 mr-4 w-100 " >
          <div className="main ">
            <div className="d-flex align-items-center pt-3 pb-5 pl-2">
              <SearchIcon />
              <Input label="Search" />
            </div>
            <div>
              <Singelmail />
              <Singelmail />
              <Singelmail />
              <Singelmail />
              <Singelmail />
              <Singelmail />
              <Singelmail />
              <Singelmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
