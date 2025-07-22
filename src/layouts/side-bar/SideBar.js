import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdReceipt,
  MdWallet,
  MdNotifications,
  MdAdd,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import vuagi from "../../assets/vuagi.jpg";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
    >
      <div className="sidebar__inner">
        <div className="sidebar__profile">
          {isOpen && (
            <>
              <img src={vuagi} alt="Profile" className="sidebar__avatar" />
              <div className="sidebar__info">
                <p className="sidebar__role">PRODUCT DESIGNER</p>
                <p className="sidebar__name">Andrew Smith</p>
              </div>
            </>
          )}
          {!isOpen && (
            <img
              src={vuagi}
              alt="Profile"
              className="sidebar__avatar sidebar__avatar--small"
            />
          )}
        </div>

        <nav className="sidebar__section">
          {isOpen && <p className="sidebar__section-title">MAIN</p>}
          <ul className="sidebar__menu">
            <li
              className="sidebar__item"
              onClick={toggleDashboard}
              style={{ cursor: "pointer" }}
            >
              <MdDashboard className="sidebar__icon" />
              {isOpen && "Dashboard"}
            </li>
            {isDashboardOpen && isOpen && (
              <>
                <li className="sidebar__subitem">
                  <Link to="/activity">Activity</Link>
                </li>
                <li className="sidebar__subitem">
                  <Link to="/traffic">Traffic</Link>
                </li>
                <li className="sidebar__subitem">
                  <Link to="/statistics">Statistics</Link>
                </li>
              </>
            )}
            <li className="sidebar__item">
              <Link to="/invoices">
                <MdReceipt className="sidebar__icon" />
                {isOpen && "Invoices"}
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/wallet">
                <MdWallet className="sidebar__icon" />
                {isOpen && "Wallet"}
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/notifications">
                <MdNotifications className="sidebar__icon" />
                {isOpen && "Notification"}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="sidebar__section">
          {isOpen && (
            <p className="sidebar__section-title">
              MESSAGES{" "}
              <span className="sidebar__add">
                <MdAdd />
              </span>
            </p>
          )}
        </nav>

        {isOpen && (
          <div className="sidebar__cta">
            <p className="sidebar__cta-title">Let's start!</p>
            <p className="sidebar__cta-text">
              Creating or adding new tasks couldn't be easier
            </p>
            <button className="sidebar__cta-button">+ Add New Task</button>
          </div>
        )}
      </div>

      <button className="sidebar__toggle" onClick={toggleSidebar}>
        {isOpen ? <MdChevronLeft /> : <MdChevronRight />}
      </button>
    </aside>
  );
}
