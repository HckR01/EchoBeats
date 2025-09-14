import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get("/api/songs").then((response) => {
      setSongs(response.data);
    });
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2  ">
        <div className="border border-indigo-600 mb-4 pb-4 p-4 rounded-lg">
          <h1 className="text-3xl font-bold ">Hello world!</h1>
          <p>Songs:{songs.length}</p>
          {songs.map((song, index) => (
            <div key={index}>
              {song.title} - {song.artist}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
