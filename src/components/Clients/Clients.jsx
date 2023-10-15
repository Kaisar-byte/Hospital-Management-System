import React from 'react';
import client1 from "../../assets/images/clients/client1.webp";
import client2 from "../../assets/images/clients/client2.jpeg";
import client3 from "../../assets/images/clients/client3.jpeg";
import client4 from "../../assets/images/clients/client4.jpeg";
import client5 from "../../assets/images/clients/client5.png";
import Slider from 'react-slick';

const Clients = () => {

    const ourClients = [
        {
            clientId: 1,
            clientLogo: client1
        },
        {
            clientId: 2,
            clientLogo: client2
        },
        {
            clientId: 3,
            clientLogo: client3
        },
        {
            clientId: 4,
            clientLogo: client4
        },
        {
            clientId: 5,
            clientLogo: client5
        },
        {
            clientId: 6,
            clientLogo: client1
        },
        {
            clientId: 7,
            clientLogo: client4
        },
        {
            clientId: 8,
            clientLogo: client5
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <div className="bg-orange-600">
            <h2 className="text-xl font-semibold uppercase text-center py-14"> We work with the best manufactures in the market</h2>
            <Slider {...settings} className='flex justify-center'>
                {
                    ourClients.map(client => <div className="h-60" key={client.clientId}>
                        <img src={client.clientLogo} className="border-2 border-gray-400 p-2 rounded-full w-32 h-32" alt="" />
                    </div>)
                }
            </Slider>

        </div>
    );
};

export default Clients;