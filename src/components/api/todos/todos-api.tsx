import type { Todo } from "../../../types";

export const getTodos = async() => {
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data as Todo[];
}