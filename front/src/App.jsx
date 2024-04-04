import Sidebar from "./Layouts/Sidebar.jsx";
// import Singup from "./pages/Singup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import User_Technicien from "./pages/User.Technicien.jsx";
import MembersTable from "./pages/Aaa.jsx";
function App() {
  return (
    <div>
      <User_Technicien/>
      <MembersTable/>
      {/* <Sidebar/> */}
      {/* <Singup/> */}
    </div>
  );
}
  export default App;