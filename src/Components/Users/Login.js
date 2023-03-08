import React,{useState}from 'react';
import NavBar from './NavBar';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login =() =>{

     
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');
    const [errorMsg, setErrorMsg]= useState("");
    const [succesMsg, setSuccesMsg]= useState("");

    const auth= getAuth();
    const navigate =useNavigate();
 
    return(
        <div>
            <NavBar/>
            <p>Login</p>
        </div>
    )
};
export default Login;