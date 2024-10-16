import React, { useState } from 'react';

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <header className="header">
      <div className="dropdown">
        <button 
          className="dropbtn" 
          onClick={toggleDropdown}
          aria-expanded={showDropdown}
          aria-haspopup="true"
        >
          Display ▼
        </button>
        
        {showDropdown && (
          <div className="dropdown-content" role="menu">
            <div className="dropdown-option">
              <label htmlFor="grouping">Grouping</label>
              <select
                id="grouping"
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            
            <div className="dropdown-option">
              <label htmlFor="ordering">Ordering</label>
              <select
                id="ordering"
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
