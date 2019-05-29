import React, { Component } from 'react';



class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const loggedUser = {
            username: this.state.username,
            password: this.state.password
        }

        try {
            const loginResponse = await fetch('/', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(loggedUser),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:8000'
                }
            })

            const parsedResponse = await loginResponse.json();
            console.log(parsedResponse)
            if(parsedResponse.id){
                this.props.loginUser(parsedResponse);
                this.props.history.push(`/profile/${parsedResponse.id}`);
            } else {
                this.setState({
                    authMessage: parsedResponse
                })
            }


        } catch(err) {
            console.log(err);
            return err
        }
    }

    render() {
        return(
            <div className="login">
                <form>
                    <label>
                        Username
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
                    </label>
                    <br />
                    <label>
                        Password
                        <input text="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <br />
                    <button type="submit" onSubmit={this.handleSubmit}>Login</button>
                </form> 
            </div>
        )
    }
}


export default Login;



