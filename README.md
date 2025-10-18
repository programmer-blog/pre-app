````markdown
# 🚀 React Learning Project

Welcome to my **React Learning Project**!  
This repository documents everything I’ve learned so far about **React** and related tools — from setting up a project to deploying it live.

This README is written especially for **beginners** who are starting their React journey.

---

## 📚 Table of Contents
1. [Introduction to React](#-introduction-to-react)
2. [Project Setup](#-project-setup)
   - [Using Vite](#-using-vite)
   - [Styling with Tailwind CSS](#-styling-with-tailwind-css)
   - [Version Control with Git & GitHub](#-version-control-with-git--github)
   - [Deploying to GitHub Pages](#-deploying-to-github-pages)
3. [Core React Concepts](#-core-react-concepts)
   - [JSX](#-jsx)
   - [Function Components](#-function-components)
   - [Props vs State](#-props-vs-state)
   - [useState Hook (in Detail)](#-usestate-hook-in-detail)
   - [Event Handlers](#-event-handlers)
   - [Dynamic & Conditional Rendering](#-dynamic--conditional-rendering)
   - [Component Lifecycle in Function Components](#-component-lifecycle-in-function-components)
   - [useEffect Hook (in Detail)](#-useeffect-hook-in-detail)
   - [Props Drilling and Context API (3 Steps)](#-props-drilling-and-context-api-3-steps)
   - [Virtual DOM](#-virtual-dom)
4. [Styling in React](#-styling-in-react)
   - [Inline Styles](#-inline-styles)
   - [CSS Modules](#-css-modules)
   - [Styled Components](#-styled-components)
   - [Tailwind CSS](#-tailwind-css)
   - [MUI (Material UI)](#-mui-material-ui)
5. [Tips for Beginners](#-tips-for-beginners)
6. [Next Steps](#-next-steps)

---

## 🌱 Introduction to React
React is a **JavaScript library** for building **user interfaces (UIs)**.  
It focuses on building **reusable components** that describe what your UI should look like.

- **Declarative:** You describe what the UI looks like, and React updates it efficiently.
- **Component-Based:** Build small, reusable pieces called **components**.
- **Virtual DOM:** React uses a virtual representation of the DOM to efficiently update the browser UI.

👉 React makes it easier to build interactive, dynamic web applications.

---

## ⚙️ Project Setup

### 📦 Using Vite
[Vite](https://vitejs.dev/) is a **modern frontend build tool** that’s fast and easy to set up for React.

**Steps:**
```bash
# Create a new Vite + React project
npm create vite@latest react-learning

# Move into the project folder
cd react-learning

# Install dependencies
npm install

# Start the dev server
npm run dev
````

✅ **Why Vite?**

* Very fast development server
* Out-of-the-box support for React + TypeScript
* Minimal configuration

---

### 🎨 Styling with Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a **utility-first CSS framework** that lets you style your components quickly.

**Setup:**

```bash
# Install Tailwind and required plugins
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js` and add the Tailwind directives in your `index.css`.

✅ Example:

```jsx
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click Me
</button>
```

✨ **Tip:** Tailwind speeds up styling by avoiding repetitive CSS files.

---

### 🌳 Version Control with Git & GitHub

1. Initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub:

```bash
git branch -M main
git remote add origin https://github.com/your-username/react-learning.git
git push -u origin main
```

✅ **Tip:** Commit often with meaningful messages (e.g., `feat: add button component`).

---

### 🌐 Deploying to GitHub Pages

We used **GitHub Actions** to automatically deploy the project whenever we push changes.

1. Install the GitHub Pages package:

```bash
npm install gh-pages --save-dev
```

2. Configure `vite.config.js` with the correct `base` path.

3. Add a GitHub Action workflow in `.github/workflows/deploy.yml`.

✅ **Result:** The app is live at
`https://your-username.github.io/react-learning`

---

## ⚛️ Core React Concepts

### 📦 JSX

**JSX** (JavaScript XML) lets you write HTML-like syntax inside JavaScript.

Example:

```jsx
const App = () => <h1>Hello React!</h1>;
```

👉 JSX is compiled into JavaScript behind the scenes:

```js
React.createElement('h1', null, 'Hello React!')
```

---

### 🔹 Function Components

A **Function Component** is just a JavaScript function that returns JSX.

```jsx
const Button = ({ text }) => {
  return <button>{text}</button>;
};
```

✅ **Tip:** Start with function components; they are simpler and preferred over class components.

---

### 🔑 Props vs State

| Feature    | Props                                | State                                      |
| ---------- | ------------------------------------ | ------------------------------------------ |
| Definition | Data passed **from parent to child** | Internal data **managed by the component** |
| Mutable?   | ❌ Immutable                          | ✅ Mutable                                  |
| Example    | `<Button text="Click me" />`         | `const [count, setCount] = useState(0)`    |

👉 Use **props** to pass data into a component.
👉 Use **state** for data that can change inside the component.

---

### 🌿 useState Hook (in Detail)

I learned the `useState` hook in depth.
It allows functional components to have internal state and update it dynamically.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

✅ **Key Points:**

* `useState` returns a state variable and a function to update it.
* Updating state triggers a re-render.
* State is isolated per component.
* It’s ideal for interactive UI parts like forms, toggles, or counters.

---

### 🎛 Event Handlers

React uses **camelCase event names** (e.g., `onClick`, `onChange`).

Example:

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Clicked {count} times</button>;
};
```

✅ **Tip:** Always pass a function to event handlers, not the result of a function call.

---

### 🔄 Dynamic & Conditional Rendering

**Dynamic Rendering:**

```jsx
<p>Welcome, {userName}!</p>
```

**Conditional Rendering:**

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

✅ **Tip:** Use `&&` for short conditional rendering:

```jsx
{cartItems.length > 0 && <Cart items={cartItems} />}
```

---

### ⏳ Component Lifecycle in Function Components

In function components, lifecycle events are handled using the **`useEffect` hook**.

| Lifecycle Event    | Hook                                     |
| ------------------ | ---------------------------------------- |
| Component mounts   | `useEffect(() => { ... }, [])`           |
| Component updates  | `useEffect(() => { ... }, [dependency])` |
| Component unmounts | Cleanup function inside `useEffect`      |

Example:

```jsx
useEffect(() => {
  console.log("Component mounted");

  return () => console.log("Component unmounted");
}, []);
```

---

### ⚡ useEffect Hook (in Detail)

I explored the `useEffect` hook deeply. It’s used to perform **side effects** like fetching data, timers, subscriptions, or DOM updates.

Example:

```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>Seconds passed: {seconds}</p>;
}
```

✅ **Key Points:**

* Runs after every render by default.
* Use dependency array (`[]`) to control execution.
* Cleanup prevents memory leaks.
* Common use cases: API calls, subscriptions, and DOM events.

---

### 🧩 Props Drilling and Context API (3 Steps)

#### Step 1: Understanding Props Drilling

Initially, I passed data and functions as **props** from parent components (`App.ts`) down to child components like **Notes** and **StickyNotes**.

```jsx
<App>
  <Notes notes={notes} onDelete={deleteNote} />
</App>
```

This worked fine for small apps but became complex when props had to go through multiple layers of components.

---

#### Step 2: The Problem with Deep Props Passing

As the project grew, prop drilling became hard to manage:

* Functions like `toggleStarNote`, `deleteNote`, and `addNote` needed to be passed through many components.
* Components had to forward props they didn’t use.
* It made code harder to maintain and read.

---

#### Step 3: Using Context API for Global State

To fix this, I used the **Context API** for managing global state (notes and sticky notes).
Now all components can access shared data without prop drilling.

```jsx
import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => setNotes([...notes, note]);
  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));
  const toggleStar = (id) =>
    setNotes(notes.map(n => n.id === id ? { ...n, starred: !n.starred } : n));

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, toggleStar }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotes = () => useContext(NotesContext);
```

In `StickyNotes` or `NotesList`:

```jsx
const { notes, toggleStar, deleteNote } = useNotes();
```

✅ **Benefits:**

* Eliminates prop drilling.
* Centralized logic for notes.
* Cleaner and easier to extend codebase.

---

### 🌳 Virtual DOM

React creates a **virtual representation of the DOM** in memory.
When state changes, React updates only the affected parts.

✅ **Benefit:** Improves performance and keeps UI fast.

---

## 🎨 Styling in React

### ✏️ Inline Styles

```jsx
<button style={{ backgroundColor: "blue", color: "white" }}>Click</button>
```

---

### 📦 CSS Modules

Scoped CSS to a single component.

```jsx
import styles from './Button.module.css';

<button className={styles.primary}>Click</button>
```

---

### 🌟 Styled Components

Write CSS directly in JavaScript.

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
  padding: 8px 16px;
`;
```

---

### 🎨 Tailwind CSS

Utility-first classes for rapid styling.

```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Tailwind Button
</button>
```

---

### 🟦 MUI (Material UI)

A popular React component library.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Example:

```jsx
import Button from '@mui/material/Button';

<Button variant="contained">MUI Button</Button>
```

✅ **Tip:** Great for building professional UIs quickly.

---

## 💡 Tips for Beginners

* Start with **small components** and combine them.
* Always keep **state minimal and close to where it’s used**.
* Use **props for data flow downwards**.
* Commit often with clear messages.
* Don’t memorize everything — use [React docs](https://react.dev/) as a reference.
* Experiment! Break things and learn by fixing them.

---

## 🚀 Next Steps

* Learn **React Router** for navigation.
* Understand **Context API** for global state.
* Explore **Redux or Zustand** for state management.
* Learn **Testing (Jest, React Testing Library)**.
* Dive deeper into **performance optimization**.

---

## 📜 License

This project is for **learning purposes** only and is open for anyone to explore.

```
```
