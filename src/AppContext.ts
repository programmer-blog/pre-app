import { createContext } from "react";
import type { Note } from "./types";

export interface IAppContext {
  notes: Note[];
  toggleStarNote: (nodeId: number) => void;
  deleteNote: (noteId: number) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
  toggleStarNote: () => {},
  deleteNote: () => {},
});
