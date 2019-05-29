import React, { Component } from 'react';

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        verify_password: ''   
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        
        try {
            const loginResponse = await fetch('/', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:8000'
                }
            })

            const parsedResponse = await loginResponse.json();
            console.log(parsedResponse)
            if(parsedResponse.success){
                this.props.history.push('/photos')
            }


        } catch(err) {
            console.log(err);
            return err
        }
    
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type='text' name='username' onChange={this.handleChange}/><br/>
                </label>
                <label>
                    Email:
                    <input type='email' name='email' onChange={this.handleChange}/><br/>
                </label>
                <label>
                    Password:
                    <input type='text' name='password' onChange={this.handleChange}/><br/>
                </label>
                <label>
                    Verify password:
                    <input type='text' name='verify_password' onChange={this.handleChange}/><br/>
                </label>
                <button type='submit'>Register</button>
            </form>
        )
    }
}

export default Register;