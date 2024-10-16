import React from 'react';
import avatar from '../data/avatar.jpg';
import avatar2 from '../data/avatar2.jpg';
import avatar3 from '../data/avatar3.png';
import avatar4 from '../data/avatar4.jpg';
import avatar5 from '../data/avatar5.jpg';
import todo from '../data/To-do.svg';
import inProgress from '../data/in-progress.svg';
import backlog from '../data/Backlog.svg';
import cancelled from '../data/Cancelled.svg';
import done from '../data/Done.svg';
import noPriority from '../data/No-priority.svg';
import lowPriority from '../data/Img - Low Priority.svg';
import medPriority from '../data/Img - Medium Priority.svg';
import highPriority from '../data/Img - High Priority.svg';
import urgPriority from '../data/SVG - Urgent Priority colour.svg';

const Card = ({ ticket, grouping }) => {
  const userAvatars = {
    'usr-1': avatar,
    'usr-2': avatar2,
    'usr-3': avatar3,
    'usr-4': avatar4,
    'usr-5': avatar5,
  };

  const statusIcons = {
    'Todo': todo,
    'In progress': inProgress,
    'Backlog': backlog,
    'Cancelled': cancelled,
    'Done': done,
  };

  const priorityIcons = {
    0: noPriority,
    1: lowPriority,
    2: medPriority,
    3: highPriority,
    4: urgPriority,
  };

  const user = userAvatars[ticket.userId];
  const status = statusIcons[ticket.status];
  const priority = priorityIcons[ticket.priority];

  return (
    <div className='card'>
      <div className='header-row'>
        <div className='name-label'>{ticket.id}</div>
        {grouping !== 'User' && <img src={user} className='avatar-image' alt='user' />}
      </div>
      <div className='info-row'>
        {grouping !== 'Status' && <img src={status} className='status-icon' alt='status' />}
        <div className='action-label'>{ticket.title}</div>
      </div>
      <div className='tag-row'>
        {grouping !== 'Priority' && <img src={priority} className='status-badge' alt='priority' />}
        {ticket.tag.length > 0 && (
          <div className='tag-item'>
            <div className='circle-icon'></div>
            <div className='tag-label'>{ticket.tag[0]}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
