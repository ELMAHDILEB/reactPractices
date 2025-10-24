React Blog App with Pagination, Search & Favorites

This project is a small React application built with TypeScript, React Router, and Context + useReducer to manage favorites. The app fetches Posts from an external API with Pagination, Live Search, and a Favorites System.

Features

Posts Listing with Pagination

Displays a limited number of posts per page (_page and _limit)

Prev and Next buttons to navigate pages

URL stays synchronized with the current page

Live Search

Search by title, body, or ID

Results update instantly without page reload

Works with both paginated data or fetching all posts

Favorites System

Add or remove any post to/from favorites

Managed globally using Context + useReducer

Favorite posts show "❤️ Favorite" or "💔 Remove" button

Post Details Page

Clicking Show Detail opens a post details page

Passes state via React Router including post info and current pagination

AbortController Support

Cancels any old requests when navigating quickly between pages

Prevents displaying outdated data during page changes or search

Tech Stack

React + TypeScript

React Router DOM

Context API + useReducer

JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts)

CSS Grid / Flexbox for layout 

# Clone the repository
git clone https://github.com/username/react-blog-app.git

# Enter the project folder
cd react-blog-app

# Install dependencies
npm install

# Start development server
npm run dev


Usage

Visit the main page /post to see the list of posts

Use the Prev and Next buttons to navigate pages

Type in the search input to filter posts by title, body, or ID

Click Show Detail on any post to view detailed content

Add or remove posts to favorites with the heart button

The app uses local state + Context to manage favorites

Searching can work on paginated posts or fetch all posts depending on the configuration

AbortController ensures smoother user experience by cancelling outdated fetch requests