import React, { Component } from 'react';
import AddPhoto from '../AddPhoto/AddPhoto';
import { withRouter } from 'react-router-dom'


class Profile extends Component {
    state = {
        userID: null,
        userObj:{}
    }

    getUser = async()=>{
        
        await this.setState({
            userID:this.props.match.params.id
        })
        
        const userResponse = await fetch (`http://localhost:8000/users/${this.props.match.params.id}`,{
            method:"GET",
            headers:{
                "Content-Type":'application/json'
            }
        });
        const parsedResponse = await userResponse.json();
        console.log(parsedResponse, ' this is parsed response')
        this.setState({
            userObj: parsedResponse
        })
       
    }

    componentDidMount(){
        this.getUser();
    }

    render(){
        return(
            <div>
                <h1> Hey, {this.state.userObj.username}</h1>
                {this.props.logged
                ?   <div>
                        <AddPhoto userID={this.state.userID}/>    
                    </div> 
                :<p></p>}
            </div>
        )
    }
}


export default withRouter(Profile);