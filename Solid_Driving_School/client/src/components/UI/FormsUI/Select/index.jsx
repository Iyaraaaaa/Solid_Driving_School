import React from 'react'
import {useField, useFormikContext} from "formik";
import {MenuItem, TextField} from "@mui/material";



const SelectCustom = ({
    name,
    options,
    ...otherProps
}) => {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    
  const handleChange = event => {
        const { value } = event.target;
        console.log(value);
        
        const selectedOption = options.find(option => option._id === value); 
        setFieldValue(name, selectedOption);

    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
        size: "medium",
        margin:"dense",
        value:field.value?._id || '' 
    };


    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>

            {Array.isArray(options) && options.length > 0 ? (
                options.map((option,i) => (
                    <MenuItem key={i} value={option._id}>
                        {option.name}
                    </MenuItem>
                ))
            ) : (
                <MenuItem value="">
                    <em>No options available</em>
                </MenuItem>
            )}

        </TextField>
    )
}

export default SelectCustom;
