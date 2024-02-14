import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootState} from "../../store";

const Header = () => {
    const isLoggedIn=useSelector(
        (state:IRootState)=>!!state.auth.authData.accessToken
    )
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Link to="/dashbroad">Dashbroad</Link>
                    </li>
                )}


            </ul>
        </nav>
    );
};

export default Header;