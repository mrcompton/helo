module.exports = {
    register: async (req,res) => {
        
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
        
        const {username,password} = req.body
        const db = req.app.get('db')
        let user = await db.user.login({user: username, pass: password})
        user = user[0]
        if(!user){
            return res.status(403).send('Invalid')
        }
        res.status(200).send(user)

    },
    getPosts: (req,res) => {
        const db = req.app.get('db')
        db.posts.get_posts()
        .then((response => {res.status(200).send(response)}))
        .catch((err) => res.status(500).send(err))
    },
    getOnePost: async (req,res) => {
        const{params} = req
        console.log({params})
        const db = req.app.get('db')
        let post = await db.posts.getOnePost([params.postid])
        post = post[0]
        res.status(200).send(post)
    }
}