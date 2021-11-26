import React, { useState } from 'react'

// get data from localStorage
const getDataLS = () => {
    let data = localStorage.getItem('Employee');
    if (data) {
        console.log(data);
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

export const Dashboard = () => {

    const [userdata, setUserData] = useState(getDataLS());




    return (

        <div>
            <h1 className="text-center my-2">Welcome Aditi Malpani</h1>
            <div className="card-body my-2">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map(data =>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>Pending</td>

                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )




}

