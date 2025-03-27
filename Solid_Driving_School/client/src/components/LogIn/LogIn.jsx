import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../App';
import toast from "react-hot-toast";


const LogIn = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});


    axios.post('http://localhost:3000/api/auth/login', values)
      .then(result => {
        console.log(result.headers['jwt_token']);
        localStorage.setItem("access_token",result.headers['jwt_token']);
        localStorage.setItem("auth_user",JSON.stringify(result.data))
        setUser(JSON.stringify(result.data));
        navigate('/');
        toast.success("Welcome Back " + result.data.firstname + "!");
        setTimeout(()=>{
          window.location.reload()
        },1000);
        })
      .catch(error => {
        console.error(error.message);
        toast.error(error.message);
        setErrors({ ...errors, apiError: 'Login failed. Please try again.' });
        alert('404 Error')
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-[calc(100vh-80px)] dark:bg-black">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl border-2 border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center">Welcome to SOLID</h1>
        <p className="text-sm font-medium text-center">DRIVING SCHOOL</p>
        <p className="font-medium text-gray-500 text-lg mt-4 text-center">Log In</p>
        <div className="mt-8">
          <label className="text-lg font-medium">Username</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Email"
            type="email"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <span className="text-danger">{errors.username}</span>}
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="mt-8 flex items-center">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 font-medium text-base">Remember me</label>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Link to="/forgot-password" className="font-medium text-base text-blue-600">Forgot Password?</Link>
        </div>
              
        <button type="submit" className="mt-6 w-full px-6 py-2 bg-blue-600 text-white rounded-xl">
          Log In
        </button>

        <div className="text-sm font-medium text-center mt-4">
          Are you new to SOLID ?<Link to="/register" className="text-blue-600"> Signup now</Link>
        </div>

        {/* <button  
          className="mt-6 w-full px-6 py-2 bg-white text-blue-600 rounded-xl border-2 border-blue-600" 
          onClick={() => navigate('/')}
        >
          Return to Home Page
        </button> */}
        
        {errors.apiError && <p className="text-danger">{errors.apiError}</p>}
      </form>
    </div>
  );
}

export default LogIn;
