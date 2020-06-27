// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Container from '../../common/Container';

// import SideBar from './SideBar';
// import HeaderDashboard from './HeaderDashboard';

// const Wrapper = styled.div`
// 	min-height: 100vh;
// 	display: flex;
// `;

// function DashboardLayout({children}) {
// 	return (
// 		<Wrapper>
// 			<SideBar />
// 			<Container>
// 				<HeaderDashboard />
// 				{children}
// 			</Container>
// 		</Wrapper>
// 	);
// }

// DashboardLayout.propTypes = {
// 	children: PropTypes.any.isRequired,
// };

// export default DashboardLayout;

import React from "react";
import clsx from "clsx";
// import Container from '../../common/Container';
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import { NavLink } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../../routes/routes";

import HeaderDashboard from "../../layouts/dashboardLayout/HeaderDashboard";
const drawerWidth = 240;

const switchRoutes = (
	<Switch>
	  {routes.map((prop, key) => {
		if (prop.layout === "/dashboardLayout") {
		  return (
			<Route
			  path={prop.layout + prop.path}
			  component={prop.component}
			  key={key}
			/>
		  );
		}
		return null;
	  })}
	  <Redirect from="/dashboardLayout" to="/dashboard_home" />
	</Switch>
  );
  
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
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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

function DashboardLayout({ children }) {
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
    // <Container>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
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
            <MenuIcon />
          </IconButton>
          <HeaderDashboard />
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
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          

          <p className="list-subheader">EMPLOYEE</p>

          <ListItem button>
		  <NavLink
            to={{
              pathname: "/dashboard_home",
              state: { isAdmin: true },
            }}
            activeStyle={{ color: "#2EC4B6", display:"flex" }}
            isActive={(match) => {
              if (!match) {
                return false;
              }
              return match.isExact;
            }}
          >
            {" "}
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Dashboard" sty />
            </ListItemLink>
          </NavLink>
            
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_assessment">
              <ListItemText primary="Assessments" />
            </ListItemLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Exercise" />
            </ListItemLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Meals" />
            </ListItemLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Appointments" />
            </ListItemLink>
          </ListItem>
          {/* {['Inbox', 'Assessment', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List>
          {/* {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <p className="list-subheader">OTHER</p>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Download Reports" />
            </ListItemLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Rewards" />
            </ListItemLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemLink href="/dashboard_home">
              <ListItemText primary="Account" />
            </ListItemLink>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
    //   <Container >
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default DashboardLayout;
