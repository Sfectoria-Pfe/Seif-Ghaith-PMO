import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function navbar() {
  return (
    < div className="d-flex justify-content-end gap-4 py-3 px-3 shadow-sm">
      
      <FontAwesomeIcon icon={faBell}  style={{width:20,height:20}} className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <DropdownButton
            as={ButtonGroup}
            key={1}
            id={`dropdown-variants-${"primary"}`}
            // variant={variant.toLowerCase()}
            title={"notif"}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </FontAwesomeIcon>
         

      <FontAwesomeIcon icon={faComment} style={{width:20,height:20}}/>
      <FontAwesomeIcon icon={faUser} style={{width:20,height:20}}/>
      
      

      
    </div>
  );
}

export default navbar;
