# Job Listing Mini Portal

A simple React-based job browsing and saving application built using Vite and deployed on GitHub Pages.

This project allows students to browse jobs, search by role, and save preferred jobs.

---

## Live Demo

https://Mitansh-09.github.io/Job-Listing-Portal/

---

## Features

- Fetch jobs using `useEffect`
- Search jobs by role (case-insensitive)
- Save jobs to a saved list
- Remove jobs from saved list
- Toggle between All Jobs and Saved Jobs
- Display saved jobs count
- Clean and modern UI
- Component-based architecture

---

## Tech Stack

- React (Functional Components)
- Vite
- JavaScript (ES6+)
- CSS
- Git & GitHub Pages

---

## API Used

Data fetched from:

https://jsonplaceholder.typicode.com/posts

Posts are mapped to job format:

```js
{
  id: post.id,
  role: post.title,
  description: post.body
}
