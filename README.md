# IQ Quiz Website - MERN Stack

## Overview

This is a quiz website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to take quizzes on various topics and view their scores. The application follows a client-server architecture with the front end developed using React.js and the back end using Node.js and Express.js. Data is stored in a MongoDB database.

## Installation

1. Clone the repository:

   ```bash
   git clone 
   cd Logic-Master
   ```

2. Install dependencies for both the client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up MongoDB:

   - Create a MongoDB database.
   - Update the `quiz-questions.json` file with your MongoDB connection string.

4. Run the development server:

   ```bash
   # In the server directory
   npm start

   # In the client directory
   npm start
   ```

   The client will be accessible at `http://localhost:3000`, and the server will run at `http://localhost:5000`.

## Usage

1. Register yourself by just entering your name.
2. Navigate to the "Quizze" section to view available quizzes.
3. Click on a quiz to start taking it.
4. After completing the quiz, view your score and the correct answers.
