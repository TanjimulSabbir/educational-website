import React from 'react';
import Banner from './Banner';
import BannerFooter from './BannerFooter';
import HowWork from './HowWork/HowWork';
import Courses from '../Courses/Courses';
import LandingAbout from './LandingAbout/LandinAbout';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <LandingAbout></LandingAbout>
                <BannerFooter></BannerFooter>
                <HowWork></HowWork>
            </div>
            <Courses></Courses>
        </div>
    );
};

export default Home;