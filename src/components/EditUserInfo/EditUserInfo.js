import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Redirect, Route, withRouter} from "react-router"


class EditUserInfo extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }
    doHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        const creator = {
            ...this.state,
            username: this.props.loggedUser.username,
            _id: this.props.loggedUser._id
        }
        console.log(creator, 'this is the changed user')
        this.props.doEditUser(creator)
    }

    render() {
        return(
            <div className="edit">
                <form onSubmit={this.doHandleSubmit}>
                    <h2>Edit Your Profile</h2>
                    <label>
                        <input type="text" name="username" defaultValue={this.state.username} onChange={this.doHandleInput} placeholder="username" />
                    </label>
                    <br/>
                    <label>
                        <input type="text" name="email" defaultValue={this.state.email} onChange={this.doHandleInput} placeholder="email" />    
                    </label>
                    <br/>
                    <label>
                        <input type="text" name="password" defaultValue={this.state.password} onChange={this.doHandleInput} placeholder="password" />
                    </label>
                    <br/>
                    <Button type="submit" onSubmit={this.handleSubmit}>Edit Profile</Button>
                </form>
            </div>
        )
    }
}


export default withRouter(EditUserInfo);