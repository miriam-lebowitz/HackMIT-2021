import React, { useEffect, useState } from "react";
import {auth, firestore} from '../index.js';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from '../../src/GMLogo.png';
import './css/home.css';
import Button from 'react-bootstrap/Button';
import Intro from './Intro.js';

export default function Home(props) {
    const [user] = useAuthState(auth); // Holds user
    const [startQuiz, setStartQuiz] = useState(false);

    return (
        startQuiz ? <Intro /> : 
        <div>
            <div>
                <img src={Logo} alt="GreenerMeLogo" />
            </div>
            {user ? 'Welcome Back ' + user.displayName + '!' : <Login />}
            <div className="InitiateQuiz"><Button onClick={() => setStartQuiz(true)}>Take a Quiz</Button></div>
        </div> 
    );
   
}

function Login(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
      <Button variant="light" onClick={signInWithGoogle}>Login</Button>
    );
}


