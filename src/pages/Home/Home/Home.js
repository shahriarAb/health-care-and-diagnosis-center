import React from 'react';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Feedback from '../Feedback/Feedback';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <ClientReview></ClientReview>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;