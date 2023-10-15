import React from 'react';
import NavText from '../../components/NavText/NavText';
import WhoServe from '../../components/WhoServe/WhoServe';
import Does from '../../components/Does/Does';
import Clients from '../../components/Clients/Clients';

const Home = () => {
    return (
        <section>
            <NavText></NavText>
            <WhoServe></WhoServe>
            <Does></Does>
            <Clients></Clients>
        </section>
    );
};

export default Home;