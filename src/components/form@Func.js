import React, { useState } from 'react';
import { CarouselItem } from 'react-bootstrap';
// import './form.css';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');
</style>





export const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [allEntry, setallEntry] = useState([]);




    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
            setallEntry([...allEntry, newEntry]);
            console.log(allEntry);
            setEmail("");
            setPassword("");
        }
        else {
            alert('please fill the data')
        }

    }



    return (
        <>
            <div className="container my-5">
                <form onSubmit={submitForm}>
                    <div className="form-group" >
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <h2>Login Form</h2>
                        <input type="email" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-danger my-3 mx-auto">Login</button>
                </form>
            </div>
            <div className="container">
                {
                    allEntry.map((curElem) => {
                        const { id, email, password } = curElem;
                        return (

                            <div className="showData" key={id}>
                                <label>email: {email}</label>
                                <br /><br />
                                <label>password: {password}</label>
                            </div>
                        )
                    })
                }
            </div>


        </>
    )
}
