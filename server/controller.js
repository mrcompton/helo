module.exports = {
    register: async (req,res) => {
        console.log('New User Registered')
        const {username,password} = req.body
        const db = req.app.get('db')
        let newUser = await db.user.register({user: username, pass: password})
        newUser = newUser[0]
        if(newUser){
            return res.status(409).send('User already exists')
        }
        res.status(200).send(newUser)
    },
    login: async (req,res) => {
        console.log('Login Happened')
        const {username,password} = req.body
        const db = req.app.get('db')
        let user = await db.user.login({user: username})
        user = user[0]
        if(!user){
            return res.status(403).send('Invalid')
        }
        res.status(200).send(user)

    }
}