import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import DvrIcon from "@mui/icons-material/Dvr";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div style={{ height: "50", width: "50" }}>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://dataserv.tn/wp-content/uploads/2022/02/cropped-2-1-e1644072106944-144x137.png"
              alt="brand"
              className="h-8 w-8 bg-blue-gray-50"
            />
            <Typography variant="h5" color="blue-gray">
              DataServ
            </Typography>
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
              >
              <Link className="text-reset text-decoration-none" to={"/"} onClick={closeDrawer} >
              <ListItem >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
              </Link>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <SupervisedUserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal mb-0">
                    Users
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link className="text-reset text-decoration-none" to={"/employees"} onClick={closeDrawer}>
                  <ListItem >
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Les employés

                  </ListItem>
                  </Link>

                  <Link className="text-reset text-decoration-none" to={"/clients" } onClick={closeDrawer}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Les Clients
                  </ListItem>
                  </Link>
                 
                </List>
              </AccordionBody>
            </Accordion>
            <Link className="text-reset text-decoration-none" to={"/entreedevice" } onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <DescriptionOutlinedIcon className="h-5 w-5" />
              </ListItemPrefix>
              Les Bande d'entrée
            </ListItem>
            </Link>
            <Link className="text-reset text-decoration-none" to={"/reclamation" } onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <ContactEmergencyOutlinedIcon className="h-5 w-5" />
              </ListItemPrefix>
              Les Reclamations
            </ListItem>
            </Link>
            <ListItem>
              <ListItemPrefix>
                <FileOpenOutlinedIcon className="h-5 w-5" />
              </ListItemPrefix>
              Les Fiche d'interventions
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <DvrIcon className="h-5 w-5" />
              </ListItemPrefix>
              Les Orders
            </ListItem>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
           
  
          </List>
        </Card>
      </Drawer>
    </div>
  );
}



export default Sidebar;
