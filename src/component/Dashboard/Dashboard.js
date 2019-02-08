import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchVal: '',
            isMyPost: true,
            postList: []
        }
    }

    componentDidMount = () => {
        this.handlGetPosts()
    }
    handleSearch = (val) => {
        this.setState({ searchVal: val })
    }

    handleToggle = () => {
        this.setState({ isMyPost: (!this.state.isMyPost) })
    }

    handlGetPosts = () => {
        axios.get(`/api/getposts/${this.props.id}`)
        .then(res => {
            this.setState({postList: res.data})
        })
    }
    render() {
        console.log(this.props)
        const mappedPosts = this.state.postList.map((eachPost) => {
            return (
                <div className="searchResults">
                    <div>Title: {eachPost.title}</div>
                    <div>Author: {eachPost.username}</div>
                    <img src={eachPost.profile_pic} alt =""/>
                </div>
            )
        })
        return (
            <div>
                Search: <input onChange={(e) => this.handleSearch(e.target.value)}></input>
                <button>Search</button>
                <button>Reset</button>
                <span>My Posts:</span> <input type="checkbox" value={this.state.isMyPost} onChange={()=>this.handleToggle}></input>
                {mappedPosts}
            </div>
        )
    }
}
const mapToProps = (reduxState) => {
    const {id} = reduxState
    return{
        id
    }
}
export default connect(mapToProps)(Dashboard)