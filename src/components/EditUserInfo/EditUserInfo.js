import React, { Component } from 'react'


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
            <div>
                <form onSubmit={this.doHandleSubmit}>
                    <h2>Edit Your Profile</h2>
                    <input type="text" name="username" defaultValue={this.state.username} onChange={this.doHandleInput} placeholder="username" /><br/>
                    <input type="text" name="email" defaultValue={this.state.email} onChange={this.doHandleInput} placeholder="email" /><br/>
                    <input type="text" name="password" defaultValue={this.state.password} onChange={this.doHandleInput} placeholder="password" /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default EditUserInfo