import React from 'react';

const arrowChange = (e) => {
    console.log(e.target);

}

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__head">
                <div className="menu__head--title">days</div>
                <img
                    className="menu__head--img" alt="arrow"
                    src={require('../images/arrow.svg')}
                    onClick={arrowChange}
                />
            </div>
        </div>
    )
}

export default Menu;