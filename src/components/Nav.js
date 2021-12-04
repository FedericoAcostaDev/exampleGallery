import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

import "../css/nav.css";

export const Nav = (props) => {
  const { onFilterChange, userSelected, topSelected, filterOptions } = props;
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar;
  return (
    <div className="filter__wrapper">
      <div className="logo" />
      <div className="row">
        <div className="filter col-md-12">
          <nav className="nav">
            <navicon className="navIcon">
              <FaBars />
            </navicon>
          </nav>
          <sidebarnav className="sidebarNav">
            <sidebarwrap className="sidebarWrap">
              <navicon>
                <FaBars />
              </navicon>
            </sidebarwrap>
          </sidebarnav>
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
