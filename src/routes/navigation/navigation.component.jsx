import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";

const Navigation =  () => {
    return (
        <Fragment>
            <div className='navigation'>
               <Link to='/' className='logo-container'>
                   Logo
               </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;