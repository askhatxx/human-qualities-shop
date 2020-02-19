import React from 'react';
import {NavLink} from 'react-router-dom';

const Page404: React.FC = () => {
    return (
        <div className='page-404'>Page 404 <NavLink to="/">Homepage ></NavLink></div>
    )
}

export default Page404;