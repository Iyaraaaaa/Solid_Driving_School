import React from 'react'
import {useFormikContext} from "formik";
import {Button} from "@mui/material";

const ButtonCustom = ({
    children,
    ...otherProps
}) => {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        variant: 'outlined',
        color: 'primary',
        onClick: handleSubmit,
        size:"medium",
        margin:"dense",
        fullWidth:true
    }
    
  return (
    <Button {...configButton} >
        {children}
    </Button>
  )
}

export default ButtonCustom;


