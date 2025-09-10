# React + TypeScript + Vite Pagination Project

This is a small React application using TypeScript and Vite. It fetches data from an API and implements pagination using URL query parameters.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## About
This app fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and displays them with pagination.  
The pagination uses query parameters `_page` and `_limit` in the URL, and allows navigation via **Prev** and **Next** buttons.

## Features
- Fetch posts from JSONPlaceholder API
- Pagination with Prev / Next buttons
- URL query parameters (`_page` & `_limit`) for navigation
- Loading state and error handling
- Built with TypeScript + React 18 + Vite

## Installation

```bash
# Clone the repo
git clone https://github.com/ELMAHDILEB/reactPractices.git

# Go to project folder
cd vite-project

# Install dependencies
npm install

# Start development server
npm run dev
