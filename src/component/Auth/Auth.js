import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'

class Auth extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUpdateUsername =(val)=>{
        this.setState({username: val})
    }
    handleUpdatePassword =(val)=>{
        this.setState({password: val})
    }

    handleRegister = () => {
        const {username,password} = this.state
        axios.post('/auth/register', {username,password})
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {console.log(err)})
    }

    handleLogin = () => {
        const {username,password} = this.state
        axios.post('/auth/login', {username,password})
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => (console.log(err)))
    }
    render(){
        return(
            <div>
                <p>Auth</p>
                Username: <input value = {this.state.username} onChange ={(e) => this.handleUpdateUsername(e.target.value)} ></input>
                Password: <input value = {this.state.password} onChange ={(e) => this.handleUpdatePassword(e.target.value)}></input>
                <button onClick={()=>this.handleLogin()}>Login</button>
                <button onClick={()=>this.handleRegister()}>Register</button>
            </div>
        )
    }
}

export default connect(null,{updateUser})(Auth)