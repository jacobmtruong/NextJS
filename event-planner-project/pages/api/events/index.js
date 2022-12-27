const events = [
  {
    name: "Networking for Introverts",
    date: new Date(),
    address: {
      street: "New Wall Street 5",
      city: "New York",
      zipcode: 98765,
    },
  },
  {
    name: "Networking for Extroverts",
    date: new Date(),
    address: {
      street: "My Street 12",
      city: "Broke City",
      zipcode: 10115,
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(events);
}
