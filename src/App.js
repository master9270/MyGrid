import React from 'react'
import {  BrowserRouter as Router,Route,Switch as SwitchRoute} from 'react-router-dom';
import Options from './Options';

export default function App(){
    return (
    <div>
        
        <Router>

            <Route path="/tree" exact component={Options} />

            <Route path="/" exact>
                <Options />
            </Route>

            <Route path="/login" eaxt>Login</Route>    

        </Router>

    </div>)
}
