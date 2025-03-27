import React from 'react'
import { useField } from 'formik';
import {TextField} from "@mui/material";

const TextFieldCustom = ({name, multiline = false, rows = 5,...otherProps}) => {

    const [field, mata] = useField(name);

    const confixTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        size:"medium",
        margin:"dense",
        multiline,
        row:multiline?rows:undefined,
        InputProps: {
          style: {
            textAlign: 'left', // Align text to the left
          }
        }
    }

    if(mata && mata.touched && mata.error){
        confixTextField.error = true;
        confixTextField.helperText = mata.error;
    }

  return (
    <TextField {...confixTextField} />
  );
}

export default TextFieldCustom;
