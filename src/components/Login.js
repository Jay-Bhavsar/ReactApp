import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './form.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state

        if (username === "jaybhavsar278@gmail.com" && password === "1234") {
            this.setState({ loggedIn: true })
        }
        
       else if (username === "khush@gmail.com" && password === "1234") {
            this.setState({ loggedIn: true })
        }
        else{
            alert('invalid credentials')
            this.setState({
                username:'',
            }
            )
            this.setState({
                password:'',
            }
            )
        }
        
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (
            <div>
                

                {/* <form onSubmit={this.submitForm}>

                    <input type="text" placeholder='Username' name="username" id="" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" placeholder='Password' name="password" id="" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                </form> */}
                <div className="container my-5 d-flex justify-content-center">
                
                <form onSubmit={this.submitForm}>
                <h2> <i>Login</i> </h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> <i>Email address</i> </label>
                        <input type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.username} onChange={this.onChange}/>
                         
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><i>Password</i></label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword1"  value={this.state.password}  onChange={this.onChange}/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1"> <i>Check me out </i> </label>
                    </div>
                    <button type="submit" class="btn btn-danger"> <i>Login</i> </button>
                </form>
                </div>


            </div>
        )
    }
}
