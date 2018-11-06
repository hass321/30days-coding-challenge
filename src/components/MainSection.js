import React from 'react';

import DaySection from './DaySection';
import Menu from './Menu';


const MainSection = () => {
    return (
        <div className="row__daySection">
            <div className="row__daySection--menu">
                <Menu />
            </div>
            <div className="row__daySection--section">
                <DaySection />
            </div>
        </div>
    );
};

export default MainSection;