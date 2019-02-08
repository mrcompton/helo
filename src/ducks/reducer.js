const initialState = {
    username: '',
    id: '',
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(userObj){
    console.log({userObj})
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    const {type,payload} = action;

    switch(type){
        case UPDATE_USER:
        const {id,username,profile_pic} = payload
            return {...state, username,id, profile_pic}
        default:
            return state;
    }

}