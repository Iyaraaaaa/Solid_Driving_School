import React, {useEffect, useState} from 'react'
import Person4Icon from '@mui/icons-material/Person4';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import toast from "react-hot-toast";
import TrainingUpdateForm from "./TrainingUpdateForm.jsx";
import Dialog from "@mui/material/Dialog";

const BaseUrl = "http://localhost:3000/api/trainings";

const handleDelete = trainingId => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
        axios.delete(`${BaseUrl}/${trainingId}`)
            .then(() => {
                window.location.reload();
                toast.success("Training Successfully Deleted!");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })

    }
}

function TrainingCard({ _id, name, price, duration, photo, trainer, description}) {
    
    return (
        <div className='flex w-full h-auto p-4 shadow-md'>
            <TrainingImage photo={photo}/>
            <TrainingData name={name} price={price} duration={duration} trainer={trainer} description={description}/>
            <ActionButtons _id={_id} name={name}/>
        </div>
    );
}

function TrainingImage({photo}) {
    console.log(photo);
    
    
    return (
        <div className="w-[15%] h-[180px] flex justify-center items-center">
            <img className='w-full flex justify-center items-start' src={photo.split(',').includes('data:image/png;base64') ? photo : `data:image/png;base64,${photo}` } alt="image"/>
        </div>
    )
}


function TrainingData({name, price, duration, description, trainer}) {
    return (
        <div className="flex flex-col w-[60%] h-[180px] pl-6 gap-3">
            <div className="font-bold text-xl ">{name}</div>

            <div className="font-medium text-[14px]  flex gap-6">
                <span>Price : {price} LKR</span>
                <span>Duration : {duration} Months</span>
            </div>

            <div className="font-medium text-[14px]  h-[180px]2">
                <span>Trainers : </span>
                {trainer.map((dat,i) => {
                 return <span key={i}>{<Person4Icon/>}{dat.name}</span>
                })}

            </div>

            <div className="font-medium text-[14px] mb-1 flex gap-6">
                <span>
                Description :
                <p>{description}</p>

                </span>
            </div>

        </div>
    )
}

function ActionButtons({_id,name}) {

    const [updateOpen, setUpdateOpen] = useState(false);
    const [trainingob, setTrainingOb] = useState(null);

    const handleUpdateOpen = () => {
        setUpdateOpen(true);
    };

    const handleUpdateClose = () => {
        setUpdateOpen(false);
    };

    const handleUpdate = (updateTrining) => {
        console.log(updateTrining);
        
    }

    useEffect(() => {
        axios.get(`${BaseUrl}?name=${name}`)
            .then(res =>{
                setTrainingOb(res.data[0]);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return (
        <div className="flex flex-col space-y-4 h-[180px] w-[25%] items-center justify-center">
            <div className="w-full flex items-center justify-center ">
                <Button className='w-32' variant="contained" color='error' startIcon={<DeleteIcon/>}
                onClick={() =>{
                    handleDelete(_id);
                }}
                >
                    Delete
                </Button>
            </div>
            <div className="w-full flex items-center justify-center ">
                <Button className='w-32' variant="contained" color='success' startIcon={<EditIcon/>}
                onClick={() => handleUpdateOpen()}
                >
                    Edit
                </Button>
            </div>

            <Dialog
                open={updateOpen}
                onClose={handleUpdateClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        handleUpdateClose();
                    },
                }}
            >
                <TrainingUpdateForm trainingob={trainingob} onTrainerCancel={handleUpdateClose} onTrainingUpdate={handleUpdate}/>
            </Dialog>


        </div>
    )
}


export default TrainingCard