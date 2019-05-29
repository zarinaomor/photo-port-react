import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class AddPhoto extends Component {
    state = {
    title: '',
    url: '',
    description: '',
    camera: '',
    category: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault()

        const newPhoto = {
            title: this.state.title,
            url: this.state.url,
            description: this.state.description,
            camera: this.state.camera,
            category: this.state.category
            // created_by: current users id
        };
        
        try {
            const photoResponse = await fetch('http://localhost:8000/photos/', {
                method: 'POST',
                body: JSON.stringify(newPhoto),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:8000'
                }
            })
            const parsedResponse = await photoResponse.json();
            console.log(parsedResponse)
        } catch(err){
            console.log(err);
            return err
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type='text' name='title' placeholder='title' onChange={this.handleChange} value={this.state.title}/><br/>
                </label>
                <label>
                    Url:
                    <input type='text' name='url' placeholder='url' onChange={this.handleChange} value={this.state.url}/><br/>
                </label>
                <label>
                    Description:
                    <input type='text' name='description' placeholder='description' onChange={this.handleChange} value={this.state.description}/><br/>
                </label>
                <label>
                    Camera:
                    <input type='text' name='camera' placeholder='camera' onChange={this.handleChange} value={this.state.camera}/><br/>
                </label>
                <label>
                    Category:
                    <input type='text' name='category' placeholder='category' onChange={this.handleChange} value={this.state.category}/><br/>
                </label>
                <Button type='submit'>Submit Photo</Button>
            </form>
        )
    }

}

export default AddPhoto;