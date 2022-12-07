// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Users = [
  {
    id: 1,
    name: 'John',
    age: 22
  },
  {
    id: 2,
    name: 'Mary',
    age: 24
  }
]


export default function handler(req, res) {
  res.status(200).json(Users)
}
