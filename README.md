# Profile REST API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)

## Overview

**Profile REST API** is a modern, secure, and scalable API service built with **Django REST Framework**. This API manages user profiles, implements JWT-based authentication, and provides full CRUD operations for profile data. It is designed for speed, reliability, and ease-of-use.

---

## Features

- **User Registration & Authentication**: Secure sign-up/login with JWT.
- **Profile Management**: Create, read, update, and delete profiles.
- **Robust API Endpoints**: RESTful API endpoints that adhere to best practices.
- **Modular & Scalable**: Structured code that is easy to extend and maintain.
- **Documentation**: Auto-generated API docs using Swagger or Redoc.

---

## Tech Stack

- **Backend Framework**: Django & Django REST Framework
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: PostgreSQL (or SQLite for development)
- **Tools**: Docker (optional), Git, and CI/CD setup with GitHub Actions

---

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed on your local machine:

- Python 3.8+
- pip
- virtualenv (optional but recommended)
- PostgreSQL (if you prefer using PostgreSQL)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Kashif1Naqvi/profile-rest-api.git
    cd profile-rest-api
    ```

2. **Create & activate a virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configure environment variables:**

    - Rename `.env.example` to `.env` and update the settings as needed.

5. **Run database migrations:**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. **Create a superuser (optional):**

    ```bash
    python manage.py createsuperuser
    ```

7. **Start the development server:**

    ```bash
    python manage.py runserver
    ```

8. **Access API Docs:**

    - Swagger UI: [http://localhost:8000/swagger/](http://localhost:8000/swagger/)  
    - Redoc: [http://localhost:8000/redoc/](http://localhost:8000/redoc/)

---

## Usage

Once the server is running, you can interact with the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

### Example Endpoints

- **Register a New User:**

    ```http
    POST /api/auth/register/
    Content-Type: application/json

    {
      "username": "johndoe",
      "password": "yourPassword123",
      "email": "johndoe@example.com"
    }
    ```

- **Login & Obtain JWT Token:**

    ```http
    POST /api/auth/login/
    Content-Type: application/json

    {
      "username": "johndoe",
      "password": "yourPassword123"
    }
    ```

- **Get Profile:**

    ```http
    GET /api/profiles/
    Authorization: Bearer <your_token_here>
    ```

---

## Running Tests

*Optionally, if your project includes tests, add instructions:*

```bash
python manage.py test
