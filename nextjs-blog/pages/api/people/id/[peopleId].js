import { Users } from '../../../../data/people'

export default function handler (req,res) {
    const { peopleId } = req.query
    const Id = Users.find((person) => person.id === parseInt(peopleId))
    res.status(200).json(Id) 
}