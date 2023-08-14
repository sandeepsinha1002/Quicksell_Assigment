import React from 'react';
import { FaFire, FaExclamationCircle, FaAngleDoubleUp, FaAngleUp, FaRegCircle } from 'react-icons/fa'; // Importing icons from react-icons
import PriorityTodoList from '../PriorityTodoList';
import { BsExclamationSquareFill, BsThreeDots } from 'react-icons/bs';
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from 'react-icons/tb';

const PriorityPage = ({ tickets }) => {
  const priorityLevels = [4, 3, 2, 1, 0];

  return (
    <div>
      {priorityLevels.map(level => {
        const priorityName = {
          4: 'Urgent',
          3: 'High',
          2: 'Medium',
          1: 'Low',
          0: 'No priority',
        }[level];

        return (
          <div key={level} className="" > 
           
            <PriorityTodoList priority={priorityName} tickets={tickets.filter(ticket => ticket.priority === level)} />
          </div>
        );
      })}
    </div>
  );
};

export default PriorityPage;

