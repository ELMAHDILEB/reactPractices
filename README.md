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

## Usage
- Open your browser at http://localhost:5173 (default Vite port)
- Navigate through pages using Prev and Next buttons
- Observe the URL query parameters _page and _limit updating automatically
- Check loading states and error handling when fetching data

## Technologies
- React 18
- TypeScript
- Vite
- React Router DOM
- Fetch API

## Contributing
- Fork the repository
- Create your feature branch (`git checkout -b feature/new-feature`)
- Commit your changes (`git commit -m "Add new feature"`)
- Push to the branch (`git push origin feature/new-feature`)
- Open a pull request

## License
This project is licensed under the MIT License.
