export const users = [
  {
    name: "Jacob",
  },
  {
    name: "Andrew",
  },
];

export default function handler(req, res) {
  res.status(200).json(users);
}
