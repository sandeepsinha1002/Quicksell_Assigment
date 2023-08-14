import React from 'react';
import { BsExclamationSquareFill, BsThreeDots } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from 'react-icons/tb';

const PriorityTodoList = ({ priority, tickets }) => {
  
  const priorityIcons = {
    0: <BsThreeDots />,
    3: <TbAntennaBars5 size={22}/> ,
    2: <TbAntennaBars4 size={22}/>,
    1: < TbAntennaBars3 size={22}/>,
    4: <BsExclamationSquareFill color='red' />,   
  };
 
console.log(priority);
console.log(tickets)

  return (
    <div className="mb-8 p-4 rounded-md">
      <div className='flex space-x-2'>
       <span className='mt-[7px]'>{priorityIcons[0]} </span>
      <h2 className="text-xl font-semibold mb-4 flex">{priority} Priority Tickets</h2>
      </div>
      <div className="flex flex-wrap space-y-5">
        {tickets.map(ticket => (
          <>
          <div key={ticket.id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-[#fff] p-3">
            <div className="flex flex-col items-start pb-2">
              <span className="text-sm text-gray-400">{ticket.id}</span>

              <h5 className="mb-1 text-xl font-medium text-gray-900 overflow-hidden">{ticket.title}</h5>
              <div className="flex md:mt-2 space-x-3">
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none">

                </span>
                <span className="flex items-center px-2  py-2 text-sm font-medium text-center bg-white border border-gray-300 rounded-lg ">
                  <RxDotFilled size={20}/>{ticket.tag}
                </span>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PriorityTodoList;
