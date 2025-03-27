import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import defaults from '../../assets/default.png';

const BaseUrl = "http://localhost:3000/api/users";

const TraineesAddForm = () => {

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: ''
    });

    const [userstatuses, setUserStatus] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BaseUrl}`,values)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success("User Successfully Saved");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/userstatuses")
            .then(res => {
                setUserStatus(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message)
                toast(err.message);
            })
    }, []);

    return (
        <div className="p-6">
            <div className="w-full h-[49rem] rounded-lg p-4 ">

                <div className="flex gap-10">
                    <span className="font-bold text-3xl">Trainees</span>
                    <Link to="../trainee">
                        <button className="btn btn-sm bg-blue-300 mt-1">View All Trainees</button>
                    </Link>
                </div>

                <div className="w-full mt-5 px-3 py-5 shadow-xl border-t-8 rounded-md">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center items-center gap-5">
                            <div className="w-96">

                                <div>
                                    <div className="size-32 rounded-full bg-red-400">
                                        <img src={defaults} alt="default" />
                                    </div>
                                </div>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">FirstName</span>
                                    </div>
                                    <input type="text" placeholder="Firstname" name="firstname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, firstname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, lastname: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, username: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={e => setValues({...values, password: e.target.value})}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus"
                                            onChange={e => setValues({...values, userstatus: e.target.value})}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-4 w-full">
                                    <label className="form-control w-2/3">
                                        <div className="label">
                                            <span className="font-bold">Training</span>
                                        </div>
                                        <select className="select select-bordered" name="training"
                                        >
                                            {/*onChange={e => setValues({...values, userstatus: e.target.value})}*/}
                                            <option disabled selected value="">Select UserStatus</option>
                                            {userstatuses.map((data, i) => {
                                                return <option key={i} value={data['_id']}>{data['name']}</option>
                                            })}


                                        </select>
                                    </label>

                                    <button className="btn mt-10">Add</button>

                                </div>

                                <div className="flex gap-2 mt-5 w-full max-w-xs">
                                    <button className="btn bg-green-500" type="submit">Add</button>
                                    <button className="btn bg-black text-white" type="reset"
                                    >Clear
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="w-96">
                                    <p className="font-bold ">Training Details</p>

                                    <div className="size-96 border-2 border-black p-3 mt-4">
                                        <div className="flex flex-col gap-3">

                                            <div className="w-full bg-gray-300 h-10 p-2 flex gap-4 justify-center">
                                            LightWeight Vehicle Training
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor"
                                                     className="size-6 text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TraineesAddForm
