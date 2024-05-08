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
import GroupIcon from '@mui/icons-material/Group';
import AccountMenu from "../components/AccountMenu";
import ArticleIcon from '@mui/icons-material/Article';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import AnalyticsIcon from '@mui/icons-material/Analytics';
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
            {!open && <p className="logodata">DataServ</p>}
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
                <DashboardIcon />
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
              <GroupIcon/>
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openn ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openn} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link to={"/Users"} className="text-decoration-none text-reset">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Les Utilisateurs" />
              </ListItemButton>
</Link>
            <Link to={"/clients"} className="text-decoration-none text-reset">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Les Clients" />
              </ListItemButton>
</Link>
              <Link to={"/employees"} className="text-decoration-none text-reset">

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Les employés" />
              </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <Link to={"/entreedevices"} className="text-decoration-none text-reset">
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
                                <ContentPasteIcon />

              </ListItemIcon>
              <ListItemText
                primary={"Les Bande d'entrée"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem> 
</Link>

<Link to={"/reclamations"} className="text-decoration-none text-reset">

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
                <InsertPageBreakIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Les Reclamations"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={"/fiches_intervention"} className="text-decoration-none text-reset">

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
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Les Fiche d'interventions"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
</Link>


<Link to={"/orderReparation"} className="text-decoration-none text-reset">

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
      <ArticleIcon />
    </ListItemIcon>
    <ListItemText
      primary={"Order de Reparation"}
      sx={{ opacity: open ? 1 : 0 }}
    />
  </ListItemButton>
</ListItem>
</Link>

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
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Les Devis"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          </Link>

        </List>

        <Divider />
        <List>
            <ListItem  disablePadding sx={{ display: "block" }}>
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
                 <MailIcon />
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