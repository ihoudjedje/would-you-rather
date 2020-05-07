<p align="center">
  <a href="https://github.com/ilyeSudo/would-you-rather">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Would You Rather?</h3>

  <p align="center">
    Create and answer polls, & challenge your friends!
    <br />
    Udacity's <a href="https://www.udacity.com/course/react-nanodegree--nd019">React Nanodegree</a> 2nd Project
    <br />
    <br />
    <a href="https://ilyesudo-would-you-rather.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/ilyeSudo/would-you-rather/issues">Report Bug</a>
    ·
    <a href="https://github.com/ilyeSudo/would-you-rather/issues">Request Feature</a>
  </p>
</p>

&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; [![Netlify Status](https://api.netlify.com/api/v1/badges/77f48d68-c1f2-47d9-b5b3-0237eb80d3f1/deploy-status)](https://app.netlify.com/sites/ilyesudo-would-you-rather/deploys)

## Table of Contents

- [About the Project](#about-the-project)
  - [Live Demo](#live-demo)
  - [Video Demo](#video-demo)
  - [GIF Demo](gif-demo)
  - [User Experience](#user-experience)
  - [Built With](#built-with)
  - [Data](#data)
    - [Users](#users)
    - [Questions](#questions)
    - [Voting Options](#voting-options)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About The Project

### [Live Demo](https://ilyesudo-would-you-rather.netlify.app/)

### [Video Demo](https://youtu.be/FjxgGaLCVNo)

### GIF Demo

![](images/result.gif)

### User Experience

This is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered” column.

### Built With

- [React](https://www.github.com/facebook/react) - A JavaScript library for building user interfaces
- [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
- [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [Semantic UI](https://github.com/Semantic-Org/Semantic-UI) - UI component framework

### Data

There are two types of objects stored in our database:

- Users
- Questions

#### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

#### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

#### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database.  
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- `yarn` or `npm`, I highly recommand the former!

```sh
sudo apt update && sudo apt install yarn
```

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/ilyeSudo/would-you-rather.git
```

2. Install project packages

```sh
yarn install
```

3. Launch the project

```sh
yarn start
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

- **Ilyes Houdjedje** - [Linkedin](https://www.linkedin.com/in/ilyes-houdjedje) - [Github](https://github.com/ilyeSudo) - [Twitter](https://twitter.com/ilyesudo)

## Acknowledgments

- [Freepic](https://www.freepik.com/) for the amazing avatars
- [Mr.Tyler McGinnis](https://twitter.com/tylermcginn) for the great course and to all the Udacity team!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
