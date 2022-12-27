const randomDate = new Date();

const events = [
  {
    id: 1,
    name: "Networking for Introverts",
    date: randomDate,
    address: {
      street: "New Wall Street 5",
      city: "New York",
      zipcode: 98765,
    },
    image:
      "https://www.strety.com/hubfs/images/blog/run-an-effective-team-meeting.png",
  },
  {
    id: 2,
    name: "Networking for Extroverts",
    date: randomDate,
    address: {
      street: "My Street 12",
      city: "Broke City",
      zipcode: 10115,
    },
    image:
      "https://assets-global.website-files.com/62196607bf1b46c300301846/62196607bf1b46a1ce30228b_purpose-of-team-meeting.jpg",
  },
];

export default events;
