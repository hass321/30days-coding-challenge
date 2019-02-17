import React from 'react';
let control = false;
const arrowChange = (e) => {
    if(!control){
        console.log(e.target);
        e.target.style.transform = 'rotate(180deg)'; 
        control = !control; 
    }
    else{
        e.target.style.transform = 'rotate(0deg)';
        control = !control;
    }

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