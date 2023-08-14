import React from 'react';
import UserTodoList from '../UserTodoList';

const UserPage = ({ tickets, users }) => {
  console.log(users)
  return (
    <div className="grid grid-flow-col gap-8">
      {users.map(user => (
        <UserTodoList key={user.id} user={user} tickets={tickets.filter(ticket => ticket.userId === user.id)} />
        
      ))}
    </div>
  );
};

export default UserPage;
