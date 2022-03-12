import React, { Component } from 'react'

export default class form extends Component {
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
    }




    render() {
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.submitForm}>

                    <input type="text" placeholder='Username' name="username" id="" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="text" placeholder='Password' name="password" id="" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" />



                </form>


            </div>
        )
    }
}
