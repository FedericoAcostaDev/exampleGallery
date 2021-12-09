import React from "react";
import { styled } from "@mui/material/styles";

import { Drawer, List } from "@material-ui/core";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { FiFilter } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

import classes from "../scss/nav.scss";

const drawerWidth = 400;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
}));

export const Nav = (props) => {
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;

  const [open, setOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //selectors
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.filter__wrapper}>
      <div type="button" onClick={scrollToTop} className={classes.logo} />
      <div className={classes.row}>
        <div className={classes.filter}>
          <IconButton
            className="iconnButton"
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <FiFilter className={classes.fiFilter} />
          </IconButton>
          <Drawer
            className={classes.drawer}
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
                <AiOutlineRight className={classes.rightArrowIcon} />
              </IconButton>
              <h4 className={classes.filter}>Filter by</h4>
            </DrawerHeader>
            <Divider />
            <List>
              <div className={classes.item}>
                <label className="label" htmlFor="sort">
                  Show Viral
                </label>
                <select
                  id="sort"
                  name="sort"
                  onChange={(e) => onFilterChange(e)}
                  defaultValue={filterOptions.showViral}
                >
                  <option value="true">On</option>
                  <option value="false">Off</option>
                </select>
                <span className={classes.arrow}></span>
              </div>
              <div className={classes.item}>
                <label className={classes.label} htmlFor="section">
                  Section
                </label>
                <select
                  className={classes.section}
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
              <div className={classes.item}>
                <label className={classes.label} htmlFor="sort">
                  Sort by
                </label>
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
              <div className={classes.item}>
                <label className={classes.label} htmlFor="section">
                  Window
                </label>
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
