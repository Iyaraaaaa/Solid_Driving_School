import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

const DatePickerCustom = ({
    name,
    ...otherProps
}) => {

    const [field,mata] = useField(name);

    const configDatePicker = {
        ...field,
        ...otherProps,
        type:'date',
        varient:"outlined",
        fullWidth:true,
        size:"small",
        InputLabelProps:{
            shrink:true,
        }
    };

    if(mata && mata.touched && mata.error) {
        configDatePicker.error = true;
        configDatePicker.helperText = mata.error;
      }

  return (
    <TextField {...configDatePicker}/>
  )
}

export default DatePickerCustom;
