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
            age: Math.floor(Math.random() * 50),
        }
        people.push(newPerson)
        res.status(201).json(people)
    }
}

// export default function handler(req, res) {
//     const { method } = req
//     switch(method) {
//         case "GET":
//             res.status(200).json(people)
//             break;
//         case "POST": 
//             const {name} = req.body
//             people.push({
//                 id: people.length + 1,
//                 name: name
//             })
//             res.status(200).json(people)
//             break;
//         default:
//             res.setHeader("Allow", ["GET","POST"]);
//             res.status(405).end(`Method ${method} Not Allowed`);
//             break;
//     }
// }

