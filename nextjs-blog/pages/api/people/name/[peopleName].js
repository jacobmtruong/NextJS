import { Users } from '../../../../data/people'


//Find One by Name

export default function handler (req,res) {
    const { peopleName } = req.query
    const name = Users.find ((name) => name.name === peopleName)
    res.status(200).json(name)
}