import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TrainingCard from './TrainingCard';
import Dialog from '@mui/material/Dialog';
import TrainingForm from './TrainingForm';
import axios from "axios";
import TrainingUpdateForm from "./TrainingUpdateForm.jsx";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const BaseUrl = "http://localhost:3000/api/trainings";


const Trainings = () => {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState([]);


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        axios.get(`${BaseUrl}`)
            .then(res => {
                setTraining(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    const handleUserAdd = (newTrainingData)=>{
        setTraining([...training, newTrainingData]);

    }

    const handleAddClose = (action)=>{
        setOpen(action);

    }




    return (
        <div className='p-10'>
            <div className="w-full flex-col">
                <div className="flex">
                    <span className="font-bold text-3xl">Training Details Managment</span> 
                </div>
                <div className="w-full flex mt-8 pl-10 pr-10">
                    <div className="w-2/4">
                    
                         <TextField
                        label="Search Trainings"
                        variant="outlined"
                        fullWidth
                    
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        className="search-bar"
                    />
  
                    </div>
                    
                    <div className="flex w-2/4 justify-end  items-center ">
                        <Button onClick={handleClickOpen} className='h-12' variant="contained" startIcon={<AddCircleRoundedIcon />}>
                            Add New Training
                        </Button>
                    </div>

                </div>

                <div className="w-full mt-5 pl-14 pr-14">
                    {training.map((data, i) => (
                        <TrainingCard key={i} {...data} />
                    ))}
                </div>

            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                },
                }}
            >
                <TrainingForm onTrainingAdd={handleUserAdd} onTrainerCancel={handleAddClose}/>
            </Dialog>

        </div>
    )
}
export default Trainings
