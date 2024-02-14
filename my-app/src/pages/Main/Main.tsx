import React from 'react';
import Login from "./components/Login";
import {useSelector} from "react-redux";
import {IRootState, useAppDispatch} from "../../store";
import {logoutSuccess} from "../../store/auth/authReducer";
import {getProfile, logoutUser} from "../../store/auth/actionCreators";

const Main = () => {
    const  dispatch=useAppDispatch();

    const isLoggedIn=useSelector(
        (state:IRootState)=>!!state.auth.authData.accessToken
    )

    const renderProfile=()=>(
        <div>
            <h1>Вы успешно авторизовались</h1>
            <button onClick={() => dispatch(logoutUser())}>Logout</button>
            <button onClick={() => dispatch(getProfile())}>Update profile</button>
        </div>
    )
    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn ? renderProfile() : <Login/>}
        </div>
    )
};

export default Main;