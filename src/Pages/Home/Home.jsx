import React, { useContext } from 'react';
import NavText from '../../components/NavText/NavText';
import WhoServe from '../../components/WhoServe/WhoServe';
import Does from '../../components/Does/Does';
import Clients from '../../components/Clients/Clients';
import { AuthContext } from '../../Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
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