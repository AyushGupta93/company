import React from 'react'

export default function Login() {
    return (
        <div>
            <form>
                <div className="container">
                    <h1 className="text-center">Login</h1>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
                    <div id="Email" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password:</label>
                    <input type="password" className="form-control" name ="Password" id="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        
    )
}
