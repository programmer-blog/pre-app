import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import type { Note } from "./types";
import { AppContext } from "./AppContext";
import useWindowSize from "./components/hooks/useWindowSize";
import useFetch from "./components/hooks/useFetch";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const size = useWindowSize();
  const { data, loading } = useFetch<Note[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setNotes(data ? data : []);
  }, [data]);

  const toggleStarNote = (noteId: number) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            completed: !noteItem.completed,
          };
        }
        return noteItem;
      })
    );
  };

  const deleteNote = (id: number) => {
    setNotes(
      notes.filter((noteItem) => {
        return noteItem.id !== id;
      })
    );
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <AppContext.Provider
      value={{
        notes,
        toggleStarNote,
        deleteNote,
      }}
    >
      {size.width < 300 ? <h1>Resolution not supported</h1> : <Notes />}
    </AppContext.Provider>
  );
}

export default App;
