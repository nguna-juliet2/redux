import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import classes from './Signup.module.css';
import {auth,db} from  '../FirebaseConfigs/FirebaseConfig';
import {createUserWithEmailAndPassword} from  'firebase/auth';
import {collection, addDoc} from 'firebase/firestore';
const SignUp =() =>{
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');
    const [phonenumber, setPhoneNumber]= useState('');
    const navigate =useNavigate()
    const [errorMsg, setErrorMsg]= useState("");
    const [succesMsg, setSuccesMsg]= useState("");
    const SuBmitFormHandler=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            const intiatalcartvalue =0;
            console.log(user);
            
            addDoc(collection(db,'users'),{
                username:username,
                email:email,
                phonenumber:phonenumber,
                password:password,
                cart: intiatalcartvalue,
                id:user.id
            }).then(()=>{
                setSuccesMsg('new user added successfully , you will be redirectited to login page automatically ')
                setUserName('')
                setPhoneNumber('')
                setEmail('')
                setPassword('')
                setErrorMsg('')
                setTimeout(()=>{
                    setSuccesMsg('');
                    navigate('/login')
                },2000)
            })
            .catch((error)=>{setErrorMsg(error.message)}); 
            
        })
        .catch((error)=>{ 
            if (error.message ==='Firebase: Error (auth/invalid-email).'){
                setErrorMsg('please fill the required fileds')
            }
            if(error.message ==='Firebase: Error (auth/email-already-in-use).'){
                setErrorMsg('user already exists')
            }
        }); 
    }
     
    return(
        <div>
            <NavBar/>
              <div>
               <div className={classes['signup-container']}>
                <form className={classes.signupform} onSubmit={SuBmitFormHandler}>
                    <p>create Account</p>

                    {succesMsg && <>
                    <div className={classes['succes-msg']}>
                        {succesMsg}
                    </div></>}
                    {errorMsg && <>
                    <div className={classes['error-msg']}>
                        {errorMsg}
                    </div></>}
                    <label>Your name</label>
                    <input type='text' onChange={(e)=>setUserName(e.target.value)}
                     placeholder='frist and last name'/>
                    <label>Mobile number</label>
                    <input type='tel' onChange={(e)=>setPhoneNumber(e.target.value)}
                     placeholder='Mobile Number'/>

                    <label>Email</label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)}
                     placeholder='enter email address'/>

                    <label>password</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}
                     placeholder='Enter password'/>
                     <button type='submit'>Sign up</button>
                     <div>
                        <span>
                            Already have an account?
                            <Link to='/login'>Sign In</Link>
                        </span>
                     </div>

                    
                </form>
               </div>
              </div>
        </div>
    )
};
export default SignUp;