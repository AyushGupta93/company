import React, {useState,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';


// get data from localStorage
const getDataLS = () =>{
    let data=localStorage.getItem('Employee');
    if (data){
        return JSON.parse(data);    
    }
    else{
        return [];
    }
}

export default function SignUp() {
    
    const [userdata, setUserData] = useState(getDataLS())
    
    const [name, setName] = useState("")
    const [errorName, setErrorName] = useState(false)
    
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)
    
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState(false)
    
    // const navigate = useNavigate();
    
    
    const sumbitDetails = ((event) => {      
        event.preventDefault(); 

        let UserData ={
        name,
        email,
        password
              }
              setUserData([...userdata,UserData]);    
              
              if(name === ""){
                  setErrorName(true);
                };
                if(email === ""){
                    setErrorEmail(true);
                };
                if(password === ""){
                    setErrorPassword(true);
                };
                if (name && email && password !== "") {
                    alert('Data Saved Successfully')
                    
                }
                else{
                    alert('Please fill form correctly')
                }
            })
            
            // navigate("/login")
            useEffect(() => {
        localStorage.setItem('Employee',JSON.stringify(userdata));  //setting data to Local Storage 
                              
    },[userdata])
     
    return (   
        <div>
            <form onSubmit={sumbitDetails}>
                <div className="container">
                    <h2 className="text-center">SignUp</h2>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" error={errorName} value={name} onChange={(e)=> {let name = e.target.value; setName(name)}} aria-describedby="Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="Email"  error={errorEmail} value={email} onChange={(e)=> {let email = e.target.value; setEmail(email)}} aria-describedby="emailHelp"/>
                    <div id="Email" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name ="Password" id="Password"  error={errorPassword} value={password}  onChange={(e)=> {let password = e.target.value; setPassword(password)}} />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    )
}
