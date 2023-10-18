import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Doctor = () => {
    return (
        <Card className="mt-6 w-82 py-6">
            <CardHeader color="blue-gray" className="relative h-56">
                <img className="h-56"
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    Dr Mrinal Das
                </Typography>
                <Typography className="text-center">
                    MBBS, FCPS, MD (Cardiology)
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 mb-4 flex justify-center items-center">
                <Button>Book Appointment</Button>
            </CardFooter>
        </Card>
    );
};

export default Doctor;