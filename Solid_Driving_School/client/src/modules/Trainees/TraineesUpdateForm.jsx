import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import DialogTitle from "@mui/material/DialogTitle";
import {Form, Formik} from "formik";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextFieldCustom from "../../components/UI/FormsUI/TextField/index.jsx";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ButtonCustom from "../../components/UI/FormsUI/Button/index.jsx";
import MultiSelectCustom from "../../components/UI/FormsUI/CustomMultiSelect/index.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const BaseUrl = "http://localhost:3000/api/users";

const FORM_VALIDATION = Yup.object().shape({
    firstname: Yup.string()
        .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,"Invalid First Name")
        .required('Required'),
    lastname: Yup.string()
        .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,"Invalid Last Name")
        .required('Required'),
});

const TraineesUpdateForm = ({traineeob,onTraineeUpdate,onTraineeCancel}) => {

    const {_id,firstname,lastname,training} = traineeob;
    const [trainings,setTrainings] = useState(null);
    const INITIAL_FORM_STATE = {
        firstname: firstname,
        lastname: lastname,
        training:training,
    };

    useEffect(()=>{
        axios.get('http://localhost:3000/api/trainings')
            .then(res =>{
                setTrainings(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    },[])

    const handleSubmit = (values, {resetForm}) => {

        const formdata = new FormData();
        formdata.append('_id',_id);
        formdata.append('firstname',values.firstname);
        formdata.append('lastname',values.lastname);
        formdata.append('training',values.training);

        console.log(values)

        onTraineeUpdate();
        resetForm();

        axios.put(`${BaseUrl}`,formdata)
            .then(res => {
                console.log(res);
                // window.location.reload();
                // navigate("../trainers");
                toast.success("Trainee Successfully Updated");
            })
            .catch(err => {
                    console.log(err);
                    toast.error(err.message);
                }
            );
    }

    const handleCancel = () => {
        onTraineeCancel(false);
    }
    return (
        <div className="p-3">
            <DialogTitle>Update Trainee</DialogTitle>
            <Formik
                initialValues={{...INITIAL_FORM_STATE}}
                validationSchema={FORM_VALIDATION}
                onSubmit={handleSubmit}
            >
                <Form>
                    <DialogContent>
                        <DialogContentText>
                            **Insert your valid information and submit
                        </DialogContentText>

                        <TextFieldCustom name="firstname" label="Insert First Name"/>

                        <TextFieldCustom name="lastname" label="Insert LastName"/>

                        <MultiSelectCustom
                            name="training"
                            label="Training"
                            options={trainings}
                            multiple
                        />

                    </DialogContent>
                    <DialogActions>
                        <div className="w-full h-full px-[16px] flex justify-end gap-2">
                            <Button variant="outlined" color="error" type='button'
                                    onClick={handleCancel} fullWidth={true}>Cancel</Button>
                            <ButtonCustom>Submit</ButtonCustom>
                        </div>

                    </DialogActions>


                </Form>
            </Formik>

        </div>
    )
}
export default TraineesUpdateForm
