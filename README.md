# First MongoDB Connection Project using Docker

This is my first project connecting to a MongoDB instance locally, using Docker to manage the database. Below are detailed instructions for setting up and running the project using Bash commands.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) (recommended LTS version)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Set up MongoDB with Docker

First, let's create and run a Docker container with MongoDB:

```bash
# Pull the latest MongoDB image
docker pull mongo:latest

# Run the MongoDB container
docker run --name mongodb -d -p 27017:27017 mongo:latest
