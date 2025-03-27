import React from 'react';
import { useField, useFormikContext } from "formik";
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@mui/material";

const MultiSelectCustom = ({
                          name,
                          options,
                          label,
                          multiple = false, // Add support for single or multiple select
                          ...otherProps
                      }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    // Handle single or multiple selection
    const handleChange = (event) => {
        const { value } = event.target;
        if (multiple) {
            setFieldValue(name, value);
        } else {
            setFieldValue(name, value);
        }
    };

    const configSelect = {
        ...field,
        ...otherProps,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
        multiple: multiple, // Set the multiple prop
        value: multiple
            ? (field.value || []) // Handle multiple values (_id array)
            : (field.value || ''), // Handle single value (_id)
    };

    return (
        <FormControl fullWidth variant="outlined" margin="dense" error={meta && meta.touched && !!meta.error}>
            <InputLabel>{label}</InputLabel>
            <Select {...configSelect}>
                {Array.isArray(options) && options.length > 0 ? (
                    options.map((option, i) => (
                        <MenuItem key={i} value={option._id}>
                            {option.name}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem value="">
                        <em>No options available</em>
                    </MenuItem>
                )}
            </Select>
            {meta && meta.touched && meta.error && (
                <FormHelperText>{meta.error}</FormHelperText>
            )}
        </FormControl>
    );
};

export default MultiSelectCustom;
