import React, { useEffect, useState } from 'react';
import {
    TextField,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    ListItemAvatar,
    Avatar,
    ListItemText,
    CircularProgress,
    Box,
    Container,
} from '@mui/material';
import Button from "@mui/material/Button";
import axios from "axios";
import toast from "react-hot-toast";
import backgroundImg from './Assets/bg.jpg';

const BaseUrl = "http://localhost:3000/api/trainers";
const BookingUrl = "http://localhost:3000/api/bookings";

const Booking = () => {
    const [trainers, setTrainers] = useState(null);
    const [values, setValues] = useState({ bookingdate: '', trainer: '' });
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const loggeduser = JSON.parse(localStorage.getItem("auth_user"));
    const [userid, setUserId] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get(BaseUrl)
            .then(res => setTrainers(res.data))
            .catch(err => toast.error("Failed to load trainers"))
            .finally(() => setLoading(false));

        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);

        if (loggeduser?._id) setUserId(loggeduser._id);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.bookingdate || !values.trainer) {
            toast.error("Please fill in all fields");
            return;
        }

        const bookingData = {
            createddate: currentDate,
            bookingdate: values.bookingdate,
            user: userid,
            trainer: values.trainer
        };

        axios.post(BookingUrl, bookingData)
            .then(() => toast.success("Booking Successfully Added"))
            .catch(error => toast.error("Failed to add booking"));
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                paddingTop: '80px'
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align items to the left
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        textAlign: 'left', // Align text to the left
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        Booking Details
                    </Typography>

                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                            Select Booking Date
                        </Typography>
                        <TextField
                            name="bookingdate"
                            value={values.bookingdate}
                            fullWidth
                            type="date"
                            onChange={handleChange}
                            sx={{ mb: 3 }} // Add margin bottom for spacing
                        />

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Select Preferred Coach
                        </Typography>

                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="select-instructor-label">Instructor</InputLabel>
                            <Select
                                labelId="select-instructor-label"
                                onChange={handleChange}
                                name="trainer"
                                value={values.trainer}
                                label="Select Instructor"
                                disabled={loading}
                            >
                                {loading ? (
                                    <MenuItem disabled>
                                        <CircularProgress size={24} />
                                    </MenuItem>
                                ) : (
                                    trainers?.map((trainer, i) => (
                                        <MenuItem key={i} value={trainer._id}>
                                            <ListItemAvatar>
                                                <Avatar src={`data:image/png;base64,${trainer.photo}`} />
                                            </ListItemAvatar>
                                            <ListItemText primary={trainer.name} />
                                        </MenuItem>
                                    ))
                                )}
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            sx={{ py: 1.5, fontSize: '1rem' }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default Booking;
