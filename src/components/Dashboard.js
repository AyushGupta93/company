import React, { useState, useEffect } from 'react'
// import Navbar from './Navbar'

// get data from localStorage
const getDataLS = () => {
    let data = localStorage.getItem('userdata');
    if (data) {
        console.log(data);
        return JSON.parse(localStorage.getItem('userdata'));
    }
    else {
        return [];
    }
}

export const Dashboard = () => {

    const [userdata, setUserData] = useState(getDataLS());
    const [name, setName] = useState();
    const [email, setEmail] = useState("");

   

    
    return (
        <>
            <h1 className="text-center my-2">Welcome {name}</h1>
            <div className="card-body my-2">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
