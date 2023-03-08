import React from 'react'
import {Link} from 'react-router-dom';
import cartImg from '../assets/cartlogo.png';
import profileImg from '../assets/profilelogo.png';
import classes from './NavBar.module.css';

const NavBar =() =>{
    return(
        <div>
            <nav>
                <Link to='/'><button>Home</button></Link>
                <Link to='/signup'><button>Register</button></Link>
                <Link to='/login'><button>Login</button></Link>


                <Link to='/cart'>
                    <div className={classes['cart-btn']}>
                        <img src={cartImg} alt='the cart logo'/>
                        <span className={classes['cart-icon']}>0</span>

                    </div>
                </Link>
                <Link to='/userprofile'>
                    <img src={profileImg} alt="insert your pasprt" className={classes['profile-icon']}/>
                </Link>
            </nav>
        </div>
    )
};
export default NavBar;