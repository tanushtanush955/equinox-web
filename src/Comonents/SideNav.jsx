import React, { useState } from "react";
import "../Styles/SideNav.css";

const SideNav = ({ menu }) => {
  const [selected, setSelected] = useState(null);

  const primaryOptions = ["Option 1", "Option 2", "Option 3"];
  const secondaryOptions = {
    "Option 1": ["Sub 1A", "Sub 1B", "Sub 1C"],
    "Option 2": ["Sub 2A", "Sub 2B"],
    "Option 3": ["Sub 3A", "Sub 3B", "Sub 3C"],
  };

  return (
    <div className="sidebar-wrapper">
      {/* Primary sidebar (always visible, on the right) */}
      <aside className="primary-sidebar" aria-label="Primary sidebar">
        <h3 className="sidebar-title">Menu</h3>
        <ul className="primary-list">
          {primaryOptions.map((opt) => (
            <li key={opt}>
              <button
                className="sidebar-btn"
                onClick={() => setSelected(opt)}
                aria-pressed={selected === opt}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Secondary sidebar (slides in over the primary) */}
      <aside
        className={`secondary-sidebar ${selected ? "open" : ""}`}
        aria-label="Secondary sidebar"
      >
        <div className="secondary-top">
          <button className="back-btn" onClick={() => setSelected(null)}>
            ← Back
          </button>
          <h4 className="sidebar-subtitle">{selected}</h4>
        </div>

        <ul className="secondary-list">
          {selected &&
            secondaryOptions[selected].map((sub) => (
              <li key={sub}>
                <button
                  className="sidebar-btn secondary-item-btn"
                  onClick={() => console.log("clicked", sub)}
                >
                  {sub}
                </button>
              </li>
            ))}
        </ul>
      </aside>
    </div>
  );
}

export default SideNav;
