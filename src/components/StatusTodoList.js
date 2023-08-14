import React from 'react';
import {TbAntennaBars4,TbAntennaBars3,TbAntennaBars5} from 'react-icons/tb'
import {BsExclamationSquareFill, BsThreeDots } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
const StatusTodoList = ({ status, tickets }) => {
  const priorityIcons = {
    4: <BsThreeDots />,
    3: <TbAntennaBars5 size={22}/> ,
    2: <TbAntennaBars4 size={22}/>,
    1: < TbAntennaBars3 size={22}/>,
    0: <BsExclamationSquareFill color='red' />,
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{status} Tickets</h2>
      <div className=" space-y-5">
        {tickets.map(ticket => (
          <div key={ticket.id} className="w-full max-h-full max-w-sm border border-gray-200 rounded-lg shadow bg-[#fff] p-3">
            <div className="flex flex-col items-start pb-2">
              <span className="text-sm text-gray-400">{ticket.id}</span>
              <h5 className="mb-1 text-xl font-medium text-gray-900 overflow-hidden">{ticket.title}</h5>
              <div className="flex md:mt-2 space-x-3">
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none">
                  {priorityIcons[ticket.priority]}
                </span>
                <span className="flex items-center px-2  py-2 text-sm font-medium text-center bg-white border border-gray-300 rounded-lg ">
                  <RxDotFilled size={20}/>{ticket.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTodoList;
