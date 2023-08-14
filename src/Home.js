import React, { useState, useEffect } from 'react';
import { Route, Link, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import StatusPage from './components/pages/StatusPage';
import UserPage from './components/pages/UserPage';
import PriorityPage from './components/pages/PriorityPage';
import Navbar from './components/Navbar';

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [sortedTickets, setSortedTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('title');
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = event => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    navigate(selectedOption); // Navigate to the selected route
  };


  useEffect(() => {
    fetch('https://apimocha.com/quicksell/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSortedTickets([...tickets].sort((a, b) => a.title.localeCompare(b.title)));
  }, [tickets]);

  useEffect(() => {
    handleSortChange(sortOption);
  }, [sortOption]);

  const handleSortChange = option => {
    let sortedArray = [];

    switch (option) {
      case 'title':
        sortedArray = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'priority':
        sortedArray = [...tickets].sort((a, b) => a.priority - b.priority);
        break;
      default:
        sortedArray = [...tickets];
    }

    setSortedTickets(sortedArray);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BrowserRouter>
      <div className="p-4 bg-[#F4F5F8]">
        <nav className="flex justify-between items-center space-x-4">
          <div className="relative">
            <span className="block">Sort By:</span>
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              className="block py-1 px-2 bg-white border border-gray-300 rounded-sm"
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
              {/* Add more sorting options if needed */}
            </select>
          </div>
          <div className="relative">
            <span className="block">By:</span>
            <select className="block py-1 px-2 bg-white border border-gray-300 rounded-sm" value={selectedValue} onChange={handleOptionChange}>
              <option value="/status">Status</option>
              <option value="/user">User</option>
              <option value="/priority"></option>
            </select>
          </div>
        </nav>
      </div>

    </BrowserRouter>
  );
};

export default Home;
