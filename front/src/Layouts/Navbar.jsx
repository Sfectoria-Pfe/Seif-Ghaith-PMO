import { IoNotificationsOutline } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';
 function Navbar() {
 return (
  <div className="d-flex justify-content-between  shadow-sm p-3 mb-5 bg-white rounded">
    <div className="d-flex align-items-center "><p style={{fontSize:20,fontWeight:"bold"}}>DATASERV</p></div>


      <div className="d-flex align-items-center  gap-5">
        <div className='d-flex justify-content-center align-items-center  gap-2'>
      <p className="m-0" style={{fontSize:16,fontWeight:"bold"}}>Notification</p>
      <IoNotificationsOutline size={20} />
      
      </div>
      <div className='d-flex  justify-content-center align-items-center gap-2'>
      <p className='m-0' style={{fontSize:16,fontWeight:"bold"}}>InBox</p>
      <MdForwardToInbox size={20} />
      </div>
      <div >
      <p className='m-0' style={{fontSize:16,fontWeight:"bold"}}>Contact</p>
      </div>
      <div>
      <Dropdown >
      
      
      <Dropdown.Toggle variant='outline' className='border-0'>
      <img src="https://media.istockphoto.com/id/1090878494/fr/photo/bouchent-portrait-du-jeune-souriant-bel-homme-en-polo-bleu-isol%C3%A9-sur-fond-gris.jpg?s=612x612&w=0&k=20&c=d4gHKQJEydpFppzIO3poAdV5dcyYN3MiTGvP07bBSrY=" style={{width:50,height:50,borderRadius:"50%",float:"left"}} ></img>
       
      </Dropdown.Toggle>  

      <Dropdown.Menu>
        <div className='d-flex' style={{paddingLeft:10}}>
      <CgProfile  size={30}/><Dropdown.Item href="#/action-1" className='m-0'>Profile</Dropdown.Item>
      </div>
      <div className='d-flex' style={{paddingLeft:10}}>
      <CiLogout size={30} /><Dropdown.Item href="#/action-2" className='m-0'>Logout</Dropdown.Item> 
      </div>
        
      </Dropdown.Menu>
    </Dropdown>
      </div>
      </div>
      
    </div>
 );

}
export default Navbar;
