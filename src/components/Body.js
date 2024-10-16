import React, { useEffect, useState } from "react";
import GridComp from "./GridComp";

const Body = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [userGroupedTickets, setUserGroupedTickets] = useState([]);
  const [statusGroupedTickets, setStatusGroupedTickets] = useState([]);
  const [priorityGroupedTickets, setPriorityGroupedTickets] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setTickets(data?.tickets || []);
      setUsers(data?.users || []);
    } catch (error) {
      console.error("Failed to load data", error);
    }
  };

  useEffect(() => {
    if (tickets.length > 0) {
      setUserGroupedTickets(groupBy(tickets, "userId"));
      setStatusGroupedTickets(groupBy(tickets, "status"));
      setPriorityGroupedTickets(groupBy(tickets, "priority"));
    }
  }, [tickets]);

  const groupBy = (items, key) => {
    return items.reduce((result, item) => {
      const keyValue = item[key];
      if (!result[keyValue]) result[keyValue] = [];
      result[keyValue].push(item);
      return result;
    }, {});
  };

  const findUser = (id) => users.find(user => user.id === id) || {};

  const renderGroupedTickets = (groupedTickets) => (
    <div className="body-container">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <div key={key}>
          <GridComp user={findUser(key)} tickets={tickets} grouping={grouping} ordering={ordering} />
        </div>
      ))}
    </div>
  );

  if (grouping === 'Priority') return renderGroupedTickets(priorityGroupedTickets);
  if (grouping === 'Status') return renderGroupedTickets(statusGroupedTickets);
  if (grouping === 'User') return renderGroupedTickets(userGroupedTickets);

  return null;
};

export default Body;
