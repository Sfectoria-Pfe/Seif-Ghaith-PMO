import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import "./Sidebar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import GroupIcon from "@mui/icons-material/Group";
import AccountMenu from "../components/AccountMenu";
import ArticleIcon from "@mui/icons-material/Article";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useSelector } from "react-redux";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [openn, setOpenn] = React.useState(false);
  const handleClickClose = () => {
    setOpenn(false);
  };
  const handleClickopenn = () => {
    setOpenn(!openn);
  };
  const myInfo = useSelector((state) => state.auth.me);
  console.log(myInfo.Employee.role);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          className="d-flex justify-content-between"
          sx={{ backgroundColor: "white" }}
        >
          <div className="d-flex ">
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link to={"/"} className="text-decoration-none text-reset">
              {!open && <p className="logodata">DataServ</p>}
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Link className="text-reset">
              <div className="menu-item d-flex align-items-center gap-2 rounded-full lg-rounded-full border p-2">
                <IoNotificationsOutline size={20} className=" text-black" />
                {/* <span className="text-gray-900">Notification</span> */}
              </div>
            </Link>

            <AccountMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="d-flex justify-content-between">
          <p className="pl-2 logodata"> DataServ </p>
          <IconButton
            onClick={() => {
              handleDrawerClose();
              handleClickClose();
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link to={"/"} className="text-decoration-none text-reset">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#000000"
                    stroke="currentColor"
                    stroke-width="1.25"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                    <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                    <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                    <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                  </svg>{" "}
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItemButton
            onClick={() => {
              handleClickopenn();
              handleDrawerOpen();
            }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                color="#000000"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openn ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openn} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {myInfo.Employee.role === "admin" && (
                <>
                  <Link
                    to={"/Users"}
                    className="text-decoration-none text-reset"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Les Utilisateurs" />
                    </ListItemButton>
                  </Link>
                </>
              )}
              {(myInfo.Employee.role === "admin" || 
                myInfo.Employee.role === "receptionist") && 
                  <>
                    <Link
                      to={"/clients"}
                      className="text-decoration-none text-reset"
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Les Clients" />
                      </ListItemButton>
                    </Link>
                  </>
                }
              {(myInfo.Employee.role === "admin" ||
                myInfo.Employee.role==="receptionist" ||
                myInfo.Employee.role==="manager") && 
                  <>
                    <Link
                      to={"/employees"}
                      className="text-decoration-none text-reset"
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Les employés" />
                      </ListItemButton>
                    </Link>
                  </>
                }
            </List>
          </Collapse>
          {(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role==="receptionist" ||
            myInfo.Employee.role==="manager" ||
            myInfo.Employee.role==="technicien") && 
              <>
                <Link //entreee device
                  to={"/entreedevices"}
                  className="text-decoration-none text-reset"
                >
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-ticket"
                          color="#000000"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M15 5l0 2" />
                          <path d="M15 11l0 2" />
                          <path d="M15 17l0 2" />
                          <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={"Les Bande d'entrée"}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            }
          {(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role==="receptionist" ||
            myInfo.Employee.role==="manager" ) && 
              <>
                <Link // reclamationnn
                  to={"/reclamations"}
                  className="text-decoration-none text-reset"
                >
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          color="#000000"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-user-exclamation"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" />
                          <path d="M19 16v3" />
                          <path d="M19 22v.01" />
                        </svg>{" "}
                      </ListItemIcon>
                      <ListItemText
                        primary={"Les Reclamations"}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            }

{(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role==="receptionist" ||
            myInfo.Employee.role==="manager" ||
            myInfo.Employee.role==="technicien") && 
              <>
                <Link // fiche interventionnn
                  to={"/fiches_intervention"}
                  className="text-decoration-none text-reset"
                >
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="black"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-article"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                          <path d="M7 8h10" />
                          <path d="M7 12h10" />
                          <path d="M7 16h10" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={"Les Fiche d'interventions"}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            }

{(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role==="receptionist" ||
            myInfo.Employee.role==="manager" ||
            myInfo.Employee.role==="technicien") && 
              <>
          <Link  //order reparation
            to={"/orderReparation"}
            className="text-decoration-none text-reset"
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    color="black"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-address-book"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                    <path d="M10 16h6" />
                    <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 8h3" />
                    <path d="M4 12h3" />
                    <path d="M4 16h3" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Order de Reparation"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
</>
}
{(myInfo.Employee.role === "admin" ||
            myInfo.Employee.role==="receptionist" ||
            myInfo.Employee.role==="manager") && 
              <>
          <Link to={"/orders"} className="text-decoration-none text-reset"> 
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    color="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-file-dollar"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                    <path d="M12 17v1m0 -8v1" />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={"Les Devis"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          </>}
        </List>

        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link to={"/inbox"} className="text-decoration-none text-reset">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    color="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-message"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={"heyy"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
