import React from 'react';
import StatusTodoList from '../StatusTodoList';

const StatusPage = ({ tickets }) => {
  const todoTickets = tickets.filter(ticket => ticket.status === 'Todo');
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In progress');
  const backlogTickets = tickets.filter(ticket => ticket.status === 'Backlog');

  return (
    <div className="grid grid-flow-col ">
        <StatusTodoList status="Todo" tickets={todoTickets} />
        <StatusTodoList status="In progress" tickets={inProgressTickets} />
        <StatusTodoList status="Backlog" tickets={backlogTickets} />
    </div>
  );
};

export default StatusPage;
