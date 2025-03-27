import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [traineeCount, setTraineeCount] = useState(0);
  const [trainingCount, setTrainingCount] = useState(0);
  const [trainerCount, setTrainerCount] = useState(0);
  const [recentBookings, setRecentBookings] = useState([]);

  const [displayUserCount, setDisplayUserCount] = useState(0);
  const [displayTraineeCount, setDisplayTraineeCount] = useState(0);
  const [displayTrainingCount, setDisplayTrainingCount] = useState(0);
  const [displayTrainerCount, setDisplayTrainerCount] = useState(0);

  const countUp = (start, target, setDisplayCount) => {
    const duration = 500;
    const incrementTime = Math.floor(duration / target);
    let currentCount = start;

    const counter = setInterval(() => {
      currentCount += 1;
      setDisplayCount(currentCount);

      if (currentCount >= target) {
        clearInterval(counter);
      }
    }, incrementTime);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        const totalUsers = res.data.length;
        const totalTrainees = res.data.filter(datum => datum.role.name === 'USER').length;

        setUserCount(totalUsers);
        setTraineeCount(totalTrainees);

        countUp(-1, totalUsers, setDisplayUserCount);
        countUp(-1, totalTrainees, setDisplayTraineeCount);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/api/trainings')
      .then(res => {
        const totalTrainings = res.data.length;
        console.log(totalTrainings);
        
        setTrainingCount(totalTrainings);
        countUp(-1, totalTrainings, setDisplayTrainingCount);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/api/trainers')
      .then(res => {
        const totalTrainers = res.data.length;
        setTrainerCount(totalTrainers);
        countUp(-1, totalTrainers, setDisplayTrainerCount);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/api/bookings')
      .then(res => {
        setRecentBookings(res.data.slice(-5)); // Get the last 5 bookings
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-xl mb-8 p-6 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Dashboard!</h1>
        <p className="text-lg">Stay on top of your data and manage everything with ease</p>
      </div>

      <div className="w-full h-[40rem] bg-white shadow-2xl p-4">
        <span className="text-2xl font-bold">Dashboard</span>
        <div className="flex mb-8">
          <div className="stats shadow w-1/4 mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Users</div>
              <div className="stat-value text-gray-100 text-center">{displayUserCount}</div>
            </div>
          </div>
          <div className="stats shadow w-1/4 mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainings</div>
              <div className="stat-value text-gray-100 text-center">{displayTrainingCount}</div>
            </div>
          </div>
          <div className="stats shadow w-1/4 mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainers</div>
              <div className="stat-value text-gray-100 text-center">{displayTrainerCount}</div>
            </div>
          </div>
          <div className="stats shadow w-1/4 mx-4 mt-4 bg-[#1E4263] justify-center">
            <div className="stat">
              <div className="stat-title text-gray-100">Total Trainees</div>
              <div className="stat-value text-gray-100 text-center">{displayTraineeCount}</div>
            </div>
          </div>
        </div>

        {/* Calendar and Recent Bookings */}
        <div className="flex">
          <div className="w-1/3 p-4 flex flex-col gap-4">
          <span className="font-semibold">Calender</span>
            <Calendar />
          </div>

          <div className="w-2/3 p-4 flex flex-col gap-4">
            <span className="font-semibold">Recent Bookings</span>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Booking Date</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Trainer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentBookings.map((booking, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(booking.bookingdate).toLocaleDateString()}</TableCell>
                      <TableCell>{booking.user?.username || 'N/A'}</TableCell>
                      <TableCell>{booking.trainer?.name || 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
