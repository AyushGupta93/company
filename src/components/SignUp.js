import React, {useState,useEffect} from 'react'
import { useHistory } from 'react-router';

// get data from localStorage
const getDataLS = () =>{
    let data=localStorage.getItem('userdata');
    console.log(data);
    if (data){
        let parsedData = JSON.parse(localStorage.getItem('userdata'));
        return parsedData;
    }
    else{
        return [];
    }
}

export default function SignUp() {
    
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const [userdata, setUserData] = useState(getDataLS());
    
    const sumbitDetails = ((event) => {      
        event.preventDefault(); 
        
        let userData =[{
        name:name,
        email:email,
        password:password
        }]
        
        setUserData(userData);
        //  savedUserData();
    })
    
    useEffect(() => {
        localStorage.setItem('userdata',JSON.stringify(userdata));
    },[userdata])
    

    const savedUserData =()=>{ 
        localStorage.setItem('userdata',JSON.stringify(userData));
    }

    // function handleClick() {
        //  history.push("/Login");    
    // }
    let history = useHistory();
    
    return (   
        <div>
            <form onSubmit={sumbitDetails}>
                <div className="container">
                    <h1 className="text-center">SignUp</h1>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"  value={name} onChange={(e)=> {let name = e.target.value; setName(name)}} aria-describedby="Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="Email"  value={email} onChange={(e)=> {let email = e.target.value; setEmail(email)}} aria-describedby="emailHelp"/>
                    <div id="Email" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name ="Password" id="Password" value={password}  onChange={(e)=> {let password = e.target.value; setPassword(password)}} />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    )
}
