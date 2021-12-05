import React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import List from "@mui/material/List";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Switch,
  withStyles,
  RadioGroup,
  Radio,
  InputBase,
  Select,
} from "@material-ui/core";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { MenuItem } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { blue, green } from "@mui/material/colors";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import "../css/nav.css";

const drawerWidth = 250;

const CustomSwitch = withStyles({
  switchBase: {
    color: green[600],
    "&checked": {
      color: green[300],
    },
    "&checked + &track": {
      backgroundColor: green[100],
    },
  },
  checked: {},
  track: {},
})(Switch);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const Nav = (props) => {
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="filter__wrapper">
      <div className="logo" />
      <div className="row">
        <div className="filter col-md-12">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <FiFilter />
          </IconButton>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <AiOutlineRight />
                ) : (
                  <AiOutlineRight />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <FormControl>
                <FormLabel className="formLabel"> Filters </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Switch checked={checked} onChange={switchHandler} />
                    }
                    label="Include Viral"
                  />
                </FormGroup>
              </FormControl>
              <div>
                <label htmlFor="section">Section</label>
                <select
                  id="section"
                  name="section"
                  onChange={(e) => onFilterChange(e)}
                  defaultValue={filterOptions.section}
                >
                  <option value="hot">Hot</option>
                  <option value="top">Top</option>
                  <option id="option" value="user">
                    User
                  </option>
                </select>
              </div>
              <div className="filter__section">
                <label htmlFor="sort">Sort by</label>
                <select
                  id="sort"
                  name="sort"
                  onChange={(e) => onFilterChange(e)}
                  defaultValue={filterOptions.sort}
                >
                  <option value="viral">Viral</option>
                  <option value="top">Top</option>
                  <option value="time">Time</option>
                  {userSelected && <option value="rising">Rising</option>}
                </select>
              </div>
              <div className="filter__section">
                <label htmlFor="section">Time range</label>
                <select
                  id="window"
                  name="window"
                  onChange={(e) => onFilterChange(e)}
                  defaultValue={filterOptions.window}
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                  <option value="all">All</option>
                </select>
              </div>
            </List>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

/*import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Switch,
  withStyles,
  RadioGroup,
  Radio,
  InputBase,
} from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import "../css/nav.css";
import { blue, green } from "@mui/material/colors";

export const Nav = (props) => {
  //Styles
  const CustomSwitch = withStyles({
    switchBase: {
      color: green[600],
      "&checked": {
        color: green[300],
      },
      "&checked + &track": {
        backgroundColor: green[100],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  //Styles SearchBar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // Defining Funcions
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;
  const [checked, setChecked] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <FormControl>
          <FormLabel className="formLabel"> Filters </FormLabel>
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={
                <CustomSwitch checked={checked} onChange={switchHandler} />
              }
              label="Include Viral"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            id="section"
            name="section"
            onChange={(e) => onFilterChange(e)}
            defaultValue={filterOptions.section}
          >
            Section
          </FormLabel>
          <RadioGroup
            aria-label="section"
            defaultValue="hot"
            name="radio-buttons-group"
          >
            <FormControlLabel value="hot" control={<Radio />} label="Hot" />
            <FormControlLabel value="top" control={<Radio />} label="Top" />
            <FormControlLabel value="user" control={<Radio />} label="User" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            id="section"
            name="section"
            onChange={(e) => onFilterChange(e)}
            defaultValue={filterOptions.section}
          >
            Sort
          </FormLabel>
          <RadioGroup
            aria-label="section"
            defaultValue="top"
            name="radio-buttons-group"
          >
            <FormControlLabel value="top" control={<Radio />} label="Top" />
            <FormControlLabel value="time" control={<Radio />} label="Time" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            id="window"
            name="window"
            onChange={(e) => onFilterChange(e)}
            defaultValue={filterOptions.window}
          >
            Date Window
          </FormLabel>
          <RadioGroup
            aria-label="section"
            defaultValue="day"
            name="radio-buttons-group"
          >
            <FormControlLabel value="day" control={<Radio />} label="Day" />
            <FormControlLabel value="week" control={<Radio />} label="Week" />
            <FormControlLabel value="month" control={<Radio />} label="Month" />
            <FormControlLabel value="year" control={<Radio />} label="Year" />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </List>
    </Box>
  );
  return (
    <div className="filter__wrapper">
      <div className="logo" />
      <div className="row">
        <div className="filter col-md-12">
          <Search>
            <SearchIconWrapper></SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/*
<div className="filter__section">
            <label htmlFor="section">Section</label>
            <select
              id="section"
              name="section"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filterOptions.section}
            >
              <option value="hot">Hot</option>
              <option value="top">Top</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="filter__section">
            <label htmlFor="sort">Sort by</label>
            <select
              id="sort"
              name="sort"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filterOptions.sort}
            >
              <option value="viral">Viral</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
              {userSelected && <option value="rising">Rising</option>}
            </select>
          </div>
          <div className="filter__section">
            <label htmlFor="section">Time range</label>
            <select
              id="window"
              name="window"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filterOptions.window}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="all">All</option>
            </select>
          </div>
          */
