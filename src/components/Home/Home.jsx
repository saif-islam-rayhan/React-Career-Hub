import React from 'react';
import Banner from '../Banner/Banner';
import CategoryLIst from '../CategoryList/CategoryLIst';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryLIst></CategoryLIst>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;