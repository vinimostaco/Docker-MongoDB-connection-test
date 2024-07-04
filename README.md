# First MongoDB Connection Project using Docker

This is my first project connecting to a MongoDB instance locally, using Docker to manage the database. Below are detailed instructions for setting up and running the project.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) (recommended LTS version)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Set up MongoDB with Docker

First, let's create and run a Docker container with MongoDB:

```bash
# Run the MongoDB container
docker run --name mongodb -d -p 27017:27017 mongo:latest

docker run --name mongodb -d -p 27017:27017 mongo:latest: Creates and starts a container named mongodb in detached mode, mapping port 27017 on your local machine to port 27017 in the container.
```
Check if the container is running properly whith this command:
```
docker ps
```

Setup the node repository
```
# Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Navigate into your project directory
cd <YOUR_PROJECT_NAME>

# Install the project dependencies
npm install
```
Replace <YOUR_REPOSITORY_URL> with the URL of your repository and <YOUR_PROJECT_NAME> with the name of your project directory.

Connect to MongoDB
In this project, the connection to MongoDB is made using Mongoose. Here is the connection code (src/databaseConnect.js):
```
import mongoose from "mongoose";

async function databaseConnect() {
  mongoose.connect("mongodb://localhost:27017/mongodb");
  return mongoose.connection;
}

export default databaseConnect;
```

Run the Project
To start the project, execute the following command:
``` npm start ```
