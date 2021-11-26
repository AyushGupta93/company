import React, { useState } from 'react'
import { useHistory } from 'react-router';

// get data from localStorage
const getDataLS = () => {
    let data = localStorage.getItem('userdata');
    console.log(data);
    if (data) {
        return JSON.parse(localStorage.getItem('userdata'));
    }
    else {
        return [];
    }
}

export default function Login() {

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);

    const [match, setMatch] = useState(getDataLS());

    // console.log(match);
   
    let loginData = {
        email: email,
        password: password,
    }
    
    let history = useHistory();
    
    const handleLogin = () => {
        match.forEach(element => {
            let matchData = {
                email: element.email,
                password: element.password
            }
            if(email === ""){
                setErrorEmail(true);
            };
            if(password === ""){
                setErrorPassword(true);
            };            
            if(matchData.email === loginData.email && matchData.password === loginData.password){
                history.push("/Dashboard")
            }
            else{
               alert('Invalid Credientials');
            }
        });
    }
    const submitForm = ((e) => {
        e.preventDefault();
        handleLogin();
    })

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="container">
                    <h1 className="text-center">Login</h1>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="Email" error={errorEmail}  value={email} onChange={(e) => { let email = e.target.value; setEmail(email) }} aria-describedby="emailHelp" />
                        <div id="Email" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password:</label>
                        <input type="password" className="form-control" name="Password" id="Password"  error={errorPassword} value={password} onChange={(e) => { let password = e.target.value; setPassword(password) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
