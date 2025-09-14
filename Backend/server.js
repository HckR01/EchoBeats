import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready!!");
});

app.get("/api/songs", (req, res) => {
  const songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2019,
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      year: 2017,
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      year: 2020,
    },
    {
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      album: "Uptown Special",
      year: 2014,
    },
    {
      title: "Believer",
      artist: "Imagine Dragons",
      album: "Evolve",
      year: 2017,
    },
    {
      title: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
    },
    {
      title: "Humble",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      year: 2017,
    },
    {
      title: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      album: "Collage",
      year: 2016,
    },
    {
      title: "Bad Guy",
      artist: "Billie Eilish",
      album: "When We All Fall Asleep, Where Do We Go?",
      year: 2019,
    },
    {
      title: "Someone Like You",
      artist: "Adele",
      album: "21",
      year: 2011,
    },
  ];

  res.send(songs); // ✅ send songs as JSON
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
