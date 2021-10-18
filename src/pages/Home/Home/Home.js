import React from 'react';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientReview></ClientReview>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;