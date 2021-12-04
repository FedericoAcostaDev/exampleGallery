import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import "../css/nav.css";

export const Nav = (props) => {
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;
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
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ListItemIcon /> : <ListItemIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="filter__wrapper">
      <div className="logo" />
      <div className="row">
        <div className="filter col-md-12">
          <div>
            {["left"].map((anchor) => (
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
        </div>
      </div>
    </div>
  );
};
