import React, { useEffect, useState } from 'react'
import { Button, Typography } from "@mui/material";
import axios from "axios";
import defaults from '../assets/default.png';

const BaseUrl = "http://localhost:3000/api/users";
const BookingUrl = "http://localhost:3000/api/bookings";
const TrainingUrl = "http://localhost:3000/api/trainings";
const TrainerUrl = "http://localhost:3000/api/trainers";

const Profile = () => {

    const [user, setUser] = useState(null);
    const [bookingsar, setBookingsar] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [trainingsar, setTrainingsar] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [trainers, setTrainers] = useState([]);

    const loggeduser = JSON.parse(localStorage.getItem("auth_user"));

    useEffect(() => {
        const usernames = loggeduser?.username;

        axios.get(`${BaseUrl}?username=${usernames}`)
            .then(res => {
                setUser(res.data[0]);
            }).catch(err => console.log(err))

        axios.get(`${BookingUrl}`)
            .then(res => {
                setBookings(res.data);
            }).catch(err => console.log(err))

        axios.get(`${TrainingUrl}`)
            .then(res => {
                setTrainings(res.data);
            }).catch(err => console.log(err))

        axios.get(`${TrainerUrl}`)
            .then(res => {
                setTrainers(res.data);
            }).catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (user?.booking) {
            setBookingsar(user.booking);
        }

        if (user?.training) {
            setTrainingsar(user.training);
        }
    }, [user]);

    return (
        <div className="p-4 flex gap-5 justify-center">

            {/*Profile Section*/}
            <div className="w-96 h-[calc(100vh-110px)] bg-white shadow-2xl border-2 rounded-xl p-4">
                <div className="flex flex-col justify-center items-center">
                    <div className="size-64 bg-black rounded-full overflow-hidden">
                        {user?.photo ? <img src={`data:image/jpeg;base64,${user.photo}`} alt='photo' /> : <img src={defaults} alt='photo' />}
                    </div>
                </div>

                <div className="mt-4 ml-4">
                    <Typography sx={{ fontWeight: 'bold' }}>Profile Details</Typography>
                    <div className="mt-3">
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            Name : {user ? user.firstname + " " + user.lastname : "Not Defined"}
                        </div>
                        <div className="flex gap-3 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Phone : 076 520 0841
                        </div>
                        <div className="flex mt-2 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>

                            Email : {user ? user.username : "Not Defined"}
                        </div>

                        <div className="flex mt-2 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            Status : {user ? user.userstatus.name : "Not Defined"}
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button variant="outlined">Edit</Button>
                    </div>
                </div>
            </div>
            {/*Profile Section End*/}

            {/*Details Start*/}
            <div className="w-2/3 h-[calc(100vh-110px)] bg-white shadow-2xl border-2 rounded-xl p-4">

                <div className="mt-4">
                    <Typography sx={{ fontWeight: 'bold' }}>Training Details</Typography>

                    <div className="overflow-x-auto mt-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingsar.length > 0 ? (
                                    trainingsar.map((data, i) => {
                                        const training = trainings.find(t => t._id === data._id); // Find the matching training object
                                        return (
                                            <tr key={i}>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>{training?.name || "Not Found"}</td>
                                                <td>{training?.price || "Not Found"}</td>
                                                <td>{training?.duration || "Not Found"}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr><td>No Data Found</td></tr>
                                )}

                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="mt-8">
                    <Typography sx={{ fontWeight: 'bold' }}>Booking Details</Typography>

                    <div className="overflow-x-auto mt-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Trainer</th>
                                    <th>Booking Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingsar.length > 0 ? (
                                    bookingsar.map((data, i) => {
                                        // Find the matching booking object
                                        const booking = bookings.find(t => t._id === data);

                                        if (!booking) {
                                            return (
                                                <tr key={i}>
                                                    {/* <td colSpan="3">Booking Not Found</td> */}
                                                </tr>
                                            );
                                        }

                                        // Find the matching trainer object
                                        const trainer = trainers.find(b => b._id === booking?.trainer?._id || booking?.trainer);
                                        console.log(trainer);
                                        

                                        return (
                                            <tr key={i}>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>{trainer?.name || "Trainer Not Found"}</td>
                                                <td>{booking?.bookingdate ? new Date(booking.bookingdate).toLocaleDateString() : "Date Not Found"}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="3">No Data Found</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>


            </div>
            {/*Details End*/}


        </div>
    )
}
export default Profile
