import React from 'react';
import cardiologist from "../../assets/images/scrollable/cardiologist.jpg";
import dentist from "../../assets/images/scrollable/dentist.jpg";
import gynecologist from "../../assets/images/scrollable/gynecologist.jpg";
import medicine from "../../assets/images/scrollable/medicine.jpg";
import neurologist from "../../assets/images/scrollable/neurologist.jpg";
import orthopadic from "../../assets/images/scrollable/orthopadic.jpg";
import urologist from "../../assets/images/scrollable/urologist.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ScrollableImg = () => {
    const doctors = [
        {
            doctorId: 1,
            doctorImg: cardiologist
        },
        {
            doctorId: 2,
            doctorImg: dentist
        },
        {
            doctorId: 3,
            doctorImg: gynecologist
        },
        {
            doctorId: 4,
            doctorImg: medicine
        },
        {
            doctorId: 5,
            doctorImg: neurologist
        },
        {
            doctorId: 6,
            doctorImg: orthopadic
        },
        {
            doctorId: 7,
            doctorImg: urologist
        },

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <Slider className="p-4" {...settings} >
                {
                    doctors.map(doctor => <div className="p-2 m-2 bg-blue">
                        <img key={doctor.doctorId} src={doctor.doctorImg} className="flex w-4/5 mx-auto h-40 rounded-lg" />
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default ScrollableImg;