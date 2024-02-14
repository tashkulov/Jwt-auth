import React, {FormEvent, useState} from 'react';
import {useAppDispatch} from "../../../../store";
import {loginUser} from "../../../../store/auth/actionCreators";

const Main = () => {
    const dispatch=useAppDispatch()

    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(loginUser({login,password}))
    };
    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '400px',
                    margin: 'auto',
                    backgroundColor: '#49a14d',
                    padding: '20px',
                    borderRadius: '60px',
                    marginTop:"100px"
                }}
            >
                <h1>Welcome back!</h1>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="login">Login</label>
                    <input name="login" type="text"
                           value={login}
                           onChange={e => setLogin(e.target.value)}
                           style={{ width: '50%' }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           style={{ width: '50%' }} />
                </div>

                <button
                    type="submit"
                    style={{
                        width: '50%',
                        padding: '10px',
                        background: 'blue',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius:'70px'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Main;
