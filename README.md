# Movies API

Movies API with user authentication and CRUD operations for movies.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Update the database configuration in `config/config.json`
4. Run `npm run sync` to create the database tables
5. Start the server with `npm start`

## API Endpoints

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Login a user
- `GET /api/users`: Get all users (with pagination)
- `GET /api/users/:id`: Get user by ID
- `PUT /api/users/:id`: Update user
- `DELETE /api/users/:id`: Delete user
- `GET /api/movies`: Get all movies (with pagination)
- `GET /api/movies/:id`: Get movie by ID
- `POST /api/movies`: Create a new movie
- `PUT /api/movies/:id`: Update a movie
- `DELETE /api/movies/:id`: Delete a movie

## Documentation

API documentation is available at `/api-docs` when the server is running.
