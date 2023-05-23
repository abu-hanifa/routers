module.exports.messagesController = {
    getMessages: (req, res) => {
        res.json('привет')
    },
    getName: (req, res) => {
        res.json(`пользователь с ID ${req.params.id} ali`)
    },
    postAge: (req, res) => {
        res.json(24)
    },
    deleteName: (req, res) => {
        res.json(`удалить пользователя с ID ${req.params.id} `)
    },
    getfirstname: (req, res) => {
        res.json('ибрагимов')
    },
    postlastname: (req, res) => {
        res.json('интукодович')
    },
    deleteFirsname: (req, res) => {
        res.json('ибрагимов удален')
    }

}