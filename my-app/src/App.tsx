import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Main from "./pages/Main";
import Dashbroad from "./pages/Dashbroad";
import Header from "./components/Header/Header";
import {useSelector} from "react-redux";
import {IRootState} from "./store";

const App = () => {
    const   isLoggedIn=useSelector(
        (state:IRootState)=>!!state.auth.authData.accessToken
    )
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/dashbroad"
                    element={isLoggedIn ?<Dashbroad /> : <Navigate to="/"/>  } />
            </Routes>
        </Router>
    );
};

export default App;
