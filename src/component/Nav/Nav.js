import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
    console.log(props)
    return (
        <div>
            {props.location.pathname === '/'
            ? null
            : 
            <div>
                <p>Nav Bar</p>
                <img src={props.profile_pic} alt="profile"/>
                <p>Username: {props.username}</p>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
          
            }

        </div>
    )
}

const mapToProps = (reduxState) => {
    const {username, profile_pic} = reduxState
    return{
        username, profile_pic
    }
}

export default withRouter(connect(mapToProps)(Nav))