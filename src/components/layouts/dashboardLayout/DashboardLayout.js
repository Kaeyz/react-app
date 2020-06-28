import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DpDropdown from "./DpDropdown";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import toggle from "../../../assets/Frame.svg";
import HeaderDashboard from "./HeaderDashboard";
import dp from "../../../assets/dp.svg";
import dashboardIsActiveIcon from "../../../assets/dashboardIsActiveIcon.svg";
import assessmentIcon from "../../../assets/dashboardIsActiveIcon.svg";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    border: "none",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(3) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(5) + 1,
    },
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    border: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Wrapper = styled.div`
  .dp {
    img {
      margin-right: 1.2rem;
      // width: 23px;
    }
  }
  .sub-head {
    margin-top: 3.5rem;
    padding-left: 4.6rem;
    font-size: 1.1rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.color.text_01};
    font-weight: bold;
  }
`;
export default function DashboardLayout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="#E5E5E5"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <img
                src={toggle}
                alt="toogleIcon"
                style={{ width: "4.2rem", height: "4.3rem" }}
              />
            </IconButton>
            <HeaderDashboard display="flex" />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <img
                  src={toggle}
                  alt="toogleIcon"
                  style={{ width: "4.2rem", height: "4.3rem" }}
                />
              ) : (
                <img
                  src={toggle}
                  alt="toogleIcon"
                  style={{ width: "4.2rem", height: "4.3rem" }}
                />
              )}
            </IconButton>
          </div>
          {/* <br /> */}

          <List>
            <ListItem button>
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <ListItemIcon>
                  <div className="dp flex">
                    {" "}
                    <img src={dp} alt="dp" style={{ width: "2.3rem" }} />
                    <p>Mona Kane</p>
                  </div>{" "}
                </ListItemIcon>
                <DpDropdown />
              </Box>
            </ListItem>
            <p className="sub-head">EMPLOYEE</p>
            <ListItem button>
              <ListItemIcon style={{ marginRight: "-20px" }}>
                <img src={dashboardIsActiveIcon} alt="dashboardIsActiveIcon" />
              </ListItemIcon>
              <ListItemLink href="/dashboard_home">
  <ListItemText primary="Dashboard" style={{ color: "#2EC4B6" }}/>
</ListItemLink>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{ marginRight: "-20px" }}>
                <img src={assessmentIcon} alt="assessmentIcon" />
              </ListItemIcon>
              <ListItemLink href="/dashboard_assessment">
  <ListItemText primary="Assessment" style={{ color: "#2EC4B6" }}/>
</ListItemLink>
            </ListItem>
          </List>

          <p className="sub-head">OTHER</p>

          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {children}
      </div>
    </Wrapper>
  );
}
