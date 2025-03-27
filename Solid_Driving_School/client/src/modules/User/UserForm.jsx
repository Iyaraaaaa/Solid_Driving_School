import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import defaults from '../../assets/default.png';

const BaseUrl = "http://localhost:3000/api/users";

const UserForm = ({onUserAdd}) => {

    const [userstatuses, setUserStatus] = useState([]);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        userstatus: '',
        image: '',
        role:''
    });
    const [role, setRole] = useState([]);

    const [image,setImage] = useState(null);
    const [imagePreview,setImagePreview] = useState(null);
    const  [showUpload, setshowUpload] = useState(true);
    const formRef = useRef(null);


    const handleInputDataChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        });
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setshowUpload(false);
        handleImagePreview(event.target.files[0])
    }

    const handleImagePreview = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result)
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append('firstname',values.firstname);
        formdata.append('lastname',values.lastname);
        formdata.append('username',values.username);
        formdata.append('password',values.password);
        formdata.append('userstatus',values.userstatus);
        formdata.append('role',values.role);
        formdata.append('photo',image);

        const obj = {
            _id:values._id,
            firstname:values.firstname, 
            lastname:values.lastname, 
            username:values.username,
            userstatus:userstatuses.find(us=>us._id === values.userstatus),
            role:role.find(r=>r._id === values.role),
            photo:imagePreview, 
            password:values.password
        }
        clearForm();
        onUserAdd(obj);

       

        axios.post(`${BaseUrl}`,formdata, {
            headers: {'Content-Type': 'multipart/form-data',}
        })
        .then(res => {
            console.log(res);
            // window.location.reload();
           
            toast.success("User Successfully Saved");
            

        })
        .catch(err => {
            console.log(err);
            toast.error(err.message);
        });
    }

    //Clear Form
    const clearForm = () => { 
        formRef.current.reset();
        setImage(null);
        setImagePreview(null);
        setshowUpload(true);
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/roles")
            .then(res => {
                const roledata = res.data.filter(r => r.name !== "SUPER_ADMIN");
                setRole(roledata);
            })
            .catch(err => {
                console.log(err.message)
                toast(err.message);
            })
    }, []);


    useEffect(() => {
        axios.get("http://localhost:3000/api/userstatuses")
            .then(res => {
                setUserStatus(res.data);
            })
            .catch(err => {
                console.log(err.message)
                toast(err.message);
            })
    }, []);



    return (
        <div className="flex justify-center items-center">

            <div className="w-96">

                <div className="w-full ">
                {/*    <div className="flex gap-10">*/}
                {/*        <span className="font-bold text-3xl">Users</span>*/}
                {/*        <Link to="../user">*/}
                {/*            <button className="btn btn-sm bg-green-500 mt-1">View All Users</button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}

                    <div className="w-full mt-5 px-3 py-5 shadow-xl border-t-8 rounded-md h-[43rem] overflow-y-auto scrollbar-thin scrollbar-webkit">
                        <form  ref={formRef}>

                            <div className="flex flex-col justify-center items-center">

                                <div className="w-full flex flex-col justify-center items-center">
              

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="font-bold">Profile Picture</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                           {showUpload?(
                                            <div className="w-full flex justify-center items-center flex-col">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>

                                           ) : (
                                            <div className="size-40 bg-black rounded-full overflow-hidden">
                                            {image ? (
                                                <img src={imagePreview} alt="profilepic"/>
                                            ) : (
                                                <img src={defaults} alt="profilepic"/>
                                            )}
                                            </div>
                                           )
                                           
                                            }
                                                
                                            <input 
                                                type="file" name="image"
                                                w        className="hidden input input-bordered w-full max-w-xs flex justify-center items-center"
                                                onChange={handleImageChange}  
                                            />

                                        </div>
                            
                                    </label>

                                </div>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">FirstName</span>
                                    </div>
                                    <input type="text" placeholder="Firstname" name="firstname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">LastName</span>
                                    </div>
                                    <input type="text" placeholder="LastName" name="lastname"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Username</span>
                                    </div>
                                    <input type="text" placeholder="Username" name="username"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Password</span>
                                    </div>
                                    <input type="password" placeholder="Passowrd" name="password"
                                           className="input input-bordered w-full max-w-xs"
                                           onChange={handleInputDataChange}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">UserStatus</span>
                                    </div>
                                    <select className="select select-bordered" name="userstatus"
                                            value={values.userstatus}
                                            onChange={handleInputDataChange}
                                    >
                                        <option disabled selected value="">Select UserStatus</option>
                                        {userstatuses.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="font-bold">Role</span>
                                    </div>
                                    <select className="select select-bordered" name="role"
                                            value={values.role}
                                            onChange={handleInputDataChange}
                                    >
                                        <option disabled selected value="">Select Role</option>
                                        {role.map((data, i) => {
                                            return <option key={i} value={data['_id']}>{data['name']}</option>
                                        })}


                                    </select>
                                </label>

                                <div className="flex gap-2 w-full mt-5 justify-center items-center">
                                    <button className="btn w-1/2 bg-green-500" type="button" onClick={handleSubmit}>Add</button>
                                    <button className="btn w-1/2 bg-black text-white" type="button"
                                            onClick={clearForm}>Clear
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default UserForm
