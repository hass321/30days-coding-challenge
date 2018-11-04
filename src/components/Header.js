import React from "react";

const Header = (props) => {
  return (
    <div className="row__header">
      <div className='row__header--logo'>
        <img  src={require('../images/logo.png')} alt='logo'/>
      </div>
      <div className='row__header--heading'>
        <h2>30 Days coding Challenge</h2>
      </div>
    </div>
  );
};

export default Header;
