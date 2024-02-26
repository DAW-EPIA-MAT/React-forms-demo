const FACTOR = 1000;

export const notes = [
  {
    id: Date.now() + FACTOR,
    content: "HTML is easy",
    important: true,
  },
  {
    id: Date.now() + FACTOR * 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: Date.now() + FACTOR * 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
