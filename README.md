# TaskMaster

A backend application for managing tasks, projects, and teams.

## API Routes

### Authentication

- `POST /api/auth/signup`
  - **Description:** Registers a new user.
  - **Request Body:** `{ "name": "John Doe", "email": "john.doe@example.com", "password": "password123" }`
- `POST /api/auth/signin`
  - **Description:** Authenticates a user and returns a JWT token.
  - **Request Body:** `{ "email": "john.doe@example.com", "password": "password123" }`

### Users

- `GET /api/users`
  - **Description:** Retrieves a list of all users.
- `POST /api/users`
  - **Description:** Creates a new user.
  - **Request Body:** `{ "name": "Jane Doe", "email": "jane.doe@example.com", "password": "password456" }`

### Projects

- `GET /api/projects`
  - **Description:** Retrieves a list of all projects for the authenticated user's team.
  - **Authentication:** Required
- `POST /api/projects`
  - **Description:** Creates a new project.
  - **Authentication:** Required
  - **Request Body:** `{ "name": "New Project", "team": "<team-id>" }`

### Tasks

- `GET /api/tasks/user/:id`
  - **Description:** Retrieves all tasks for a specific user.
  - **Authentication:** Required
- `POST /api/tasks`
  - **Description:** Creates a new task.
  - **Authentication:** Required
  - **Request Body:** `{ "title": "New Task", "description": "Task description", "status": "pending", "dueDate": "2025-12-31" }`
- `GET /api/tasks/:id`
  - **Description:** Retrieves a specific task by its ID.
  - **Authentication:** Required
- `PUT /api/tasks/:id`
  - **Description:** Updates a specific task.
  - **Authentication:** Required
  - **Request Body:** `{ "title": "Updated Task Title" }`
- `DELETE /api/tasks/:id`
  - **Description:** Deletes a specific task.
  - **Authentication:** Required
- `PUT /api/tasks/:id/comment`
  - **Description:** Adds a comment to a specific task.
  - **Authentication:** Required
  - **Request Body:** `{ "text": "This is a comment." }`

### Teams

- `GET /api/teams`
  - **Description:** Retrieves a list of all teams.
  - **Authentication:** Required
- `POST /api/teams`
  - **Description:** Creates a new team.
  - **Authentication:** Required
  - **Request Body:** `{ "name": "New Team" }`
- `GET /api/teams/:id`
  - **Description:** Retrieves a specific team by its ID.
  - **Authentication:** Required
- `PUT /api/teams/:id/members`
  - **Description:** Adds members to a specific team.
  - **Authentication:** Required
  - **Request Body:** `{ "userId": "<user-id>" }`
