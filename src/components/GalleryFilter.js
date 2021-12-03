import React from "react";

import classes from "../css/navbar.module.scss";
import "../css/filter.css";

export const GalleryFilter = (props) => {
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__container}>
        <a className={classes.nav__container__brand}>I-MAGE</a>
        <div className={classes.nav__container_row}>
          <div className={classes.nav__container_row_filter}>
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
          <div className={classes.nav__container_filter}>
            <label htmlFor="sort">Viral</label>
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
          <div className={classes.nav__container_filter}>
            <label htmlFor="section">Window</label>
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
          <div className={classes.nav__container_filter}>
            <label htmlFor="section">Sort by</label>
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
    </nav>
  );
};
