import React from 'react';
import avatar from '../data/avatar.jpg';
import avatar2 from '../data/avatar2.jpg';
import avatar3 from '../data/avatar3.png';
import avatar4 from '../data/avatar4.jpg';
import avatar5 from '../data/avatar5.jpg';
import addIcon from '../data/add.svg';
import menuIcon from '../data/3 dot menu.svg';
import Card from './Card';
import todoIcon from '../data/To-do.svg';
import inProgressIcon from '../data/in-progress.svg';
import backlogIcon from '../data/Backlog.svg';
import cancelledIcon from '../data/Cancelled.svg';
import doneIcon from '../data/Done.svg';
import noPriorityIcon from '../data/No-priority.svg';
import lowPriorityIcon from '../data/Img - Low Priority.svg';
import medPriorityIcon from '../data/Img - Medium Priority.svg';
import highPriorityIcon from '../data/Img - High Priority.svg';
import urgPriorityIcon from '../data/SVG - Urgent Priority grey.svg';

const GridComp = ({ tickets, user, grouping, ordering }) => {
  const avatarImages = {
    'usr-1': avatar,
    'usr-2': avatar2,
    'usr-3': avatar3,
    'usr-4': avatar4,
    'usr-5': avatar5,
  };

  const statusIcons = {
    'Todo': todoIcon,
    'In progress': inProgressIcon,
    'Backlog': backlogIcon,
    'Cancelled': cancelledIcon,
    'Done': doneIcon,
  };

  const priorityIcons = {
    0: noPriorityIcon,
    1: lowPriorityIcon,
    2: medPriorityIcon,
    3: highPriorityIcon,
    4: urgPriorityIcon,
  };

  let heading, imgSrc;

  if (grouping === 'User') {
    heading = user.name;
    imgSrc = avatarImages[user.id];
  } else if (grouping === 'Status') {
    heading = tickets[0]?.status;
    imgSrc = statusIcons[heading];
  } else if (grouping === 'Priority') {
    heading = tickets[0]?.priority;
    imgSrc = priorityIcons[heading];
    heading = ['No Priority', 'Low Priority', 'Medium Priority', 'High Priority', 'Urgent Priority'][heading] || heading;
  }

  const sortTickets = (tickets) => {
    if (ordering === 'Priority') {
      return tickets.sort((a, b) => b.priority - a.priority || a.title.localeCompare(b.title));
    } else if (ordering === 'Title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  return (
    <div className='container'>
      <div className='header_2'>
        <div className='user-info'>
          {imgSrc && <img src={imgSrc} className='avatar' alt='group icon' />}
          <div>{heading}</div>
          <div className='card-count'>{tickets.length}</div>
        </div>
        <div className='actions'>
          <img src={addIcon} className='icon' alt='add action' />
          <img src={menuIcon} className='icon' alt='menu options' />
        </div>
      </div>
      <div className='card-section'>
        {sortTickets(tickets).map((ticket) => (
          <Card key={ticket.id} ticket={ticket} grouping={grouping} />
        ))}
      </div>
    </div>
  );
};

export default GridComp;
