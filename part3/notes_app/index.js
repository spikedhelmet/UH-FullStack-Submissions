// const htttp = require("http");
const express = require("express");
const app = express();

// Establishing JSON Paser to read incoming body data
app.use(express.json());

function generateId() {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
}

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: "4",
    content: "DICK and BALLS are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => response.send("<h1>Hello mudafakas!<h1/>"));

app.get("/api/notes", (request, response) => response.json(notes));

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  console.log(id);
  const note = notes.find((note) => note.id === id);
  console.log(note);

  if (note) response.json(note);
  else response.status(404).end();
});

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content)
    return response.status(400).json({ error: "content missing" });

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };
  console.log(note);

  notes = notes.concat(note);
  response.json(note);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

console.log(`Server running on port ${PORT}`);
