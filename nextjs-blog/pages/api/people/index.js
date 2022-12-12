import { people } from '../../../data/people';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(people)
    }
    else if (req.method === 'POST') {
        const person = req.body.person
        const newPerson = {
            id: people.length + 1,
            name: person,
            age: Math.floor(Math.random() * 50)
        }
        people.push(newPerson)
        res.status(201).json(newPerson)
    }
}

