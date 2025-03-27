import React, {useState, useEffect} from 'react'
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Form, Formik} from "formik";
import {Grid2} from "@mui/material";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import SelectCustom from "../../components/UI/FormsUI/Select/index.jsx";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";
import Button from "@mui/material/Button";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";

const BaseUrl = "http://localhost:3000/api/trainings";

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,"Invalid Name")
        .required('Required'),
    price: Yup.number().integer()
        .typeError("Invalid Price")
        .required('Required'),
    duration: Yup.number().integer()
        .typeError("Invalid Duration")
        .required('Required'),
});

const TrainingUpdateForm = ({trainingob, onTrainingUpdate, onTrainerCancel}) => {
    console.log(trainingob);
    

    const {_id, name, price, duration, photo, trainer, description} = trainingob;

    const [image,setImage] = useState(null);
    const [photoPreview,setPhotoPreview] = useState(null);
    const  [showUpload, setshowUpload] = useState(true);
    const [training,setTraining] = useState(null);
    const [trainers, setTrainers] = useState([]);
 

    const INITIAL_FORM_STATE = {
        name: name,
        price: price,
        duration: duration,
        photo: '',
        trainer: trainer[0],
        description

    };




    useEffect(() => {

        setImage(photo);
        setPhotoPreview(photo);
        setshowUpload(false);
    
        axios.get(`http://localhost:3000/api/trainers`)
            .then(res => {
                setTrainers(res.data);
            }).catch(err => console.log(err))
    }, []);


    const handlePhotoChange = (event) => {
        setImage(event.target.files[0]);
        setshowUpload(!showUpload);
        handlePhotoPreview(event.target.files[0])
    }


    const handlePhotoPreview = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result)
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (values) => {

        const formdata = new FormData();
        formdata.append('_id',_id);
        formdata.append('name',values.name);
        formdata.append('price',values.price);
        formdata.append('duration',values.duration);
        formdata.append('description',values.description);
        formdata.append('photo',image);
        formdata.append('trainer',[values.trainer._id]);
        // formdata.append('photo',photo);

        const obj={
            _id,
            name: values.name,
            price:values.price,
            duration:values.duration,
            description:values.description,
            photo:photoPreview,
            trainer:[values.trainer._id]
           
        };

        onTrainingUpdate(obj);
        setshowUpload(false);
        handleCancle();
        


        axios.put(`${BaseUrl}`,formdata)
            .then(res => {
                console.log(res);
                toast.success("Training Successfully Updated");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            });
    }

    const handleCancle = () => {
        onTrainerCancel(false);
    }

    return (
        <div>
            <DialogTitle>Update Training</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{...INITIAL_FORM_STATE}}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                >
                    <Form>

                        <Grid2 container spacing={2} className="mt-2">

                            <Grid2 item size={12}>
                                <TextFieldCustom name="name" label="Name"/>
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="price" label="Price" type="number"/>
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="duration" label="Duration" type="number"/>
                            </Grid2>

                            <Grid2 item size={12}>
                                <SelectCustom
                                    name="trainer"
                                    label="Trainer"
                                    options={trainers}
                                />
                            </Grid2>

                            <Grid2 item size={12}>
                                <TextFieldCustom name="description" label="Description" multiline={true} type="text"/>
                            </Grid2>

                            <label className="form-control w-full mt-2 ">
                        
                            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                {showUpload?(
                                    <div className="w-full flex justify-center items-center flex-col">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> profile picture</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>

                                ) : (
                                    <div className="size-48 bg-white rounded-full overflow-hidden flex justify-center items-center">
                                        
                                        <img src={photoPreview.split(',') > 0 ? photoPreview : `data:image/png;base64,${photoPreview}` } alt="profilepic"/>
                                
                                    </div>
                                    )                                           
                                }                                                   
                                <input 
                                    type="file" 
                                    name="photo"
                                    className="hidden input input-bordered w-full max-w-xs flex justify-center items-center"
                                    onChange={handlePhotoChange}  
                                />

                            </div>
                        </label>  

                            <Grid2 item size={6}>
                                <Button variant="outlined" onClick={handleCancle} color='error' size="medium" fullWidth={true} className="w-full">
                                    Calncel
                                </Button>

                            </Grid2>

                            <Grid2 item size={6}>
                                <ButtonCustom>
                                    Submit
                                </ButtonCustom>
                            </Grid2>


                        </Grid2>

                    </Form>
                </Formik>
            </DialogContent>
        </div>
    )
}
export default TrainingUpdateForm
