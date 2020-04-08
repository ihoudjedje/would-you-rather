let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: require("../assets/sarahedo.png"),
    answers: {
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
      vthrdm985a262al8qx3do: "optionTwo",
      "8xf0y6ziyjabvozdd253nd": "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  dustinforrest: {
    id: "dustinforrest",
    name: "Dustin Forrest",
    avatarURL: require("../assets/dustinforrest.png"),
    answers: {},
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  amberremy: {
    id: "amberremy",
    name: "Amber Remy",
    avatarURL: require("../assets/amberremy.png"),
    answers: {
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  danlester: {
    id: "danlester",
    name: "Dan Lester",
    avatarURL: require("../assets/danlester.png"),
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  ishaaqoakley: {
    id: "ishaaqoakley",
    name: "Ishaaq Oakley",
    avatarURL: require("../assets/ishaaqoakley.png"),
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  kianafuller: {
    id: "kianafuller",
    name: "Kiana Fuller",
    avatarURL: require("../assets/kianafuller.png"),
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  aminolson: {
    id: "aminolson",
    name: "Amin Olson",
    avatarURL: require("../assets/aminolson.png"),
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  sofijashery: {
    id: "sofijashery",
    name: "Sofija Shery",
    avatarURL: require("../assets/sofijashery.png"),
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sofijashery",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sofijashery", "ishaaqoakley"],
      text: "Have horrible short term memory",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "Have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "aminolson",
    timestamp: 1468479767190,
    optionOne: {
      votes: ["ishaaqoakley", "amberremy"],
      text: "Become a superhero",
    },
    optionTwo: {
      votes: ["sarahedo", "kianafuller", "danlester"],
      text: "Become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: ["amberremy", "danlester"],
      text: "Be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo", "ishaaqoakley"],
      text: "Be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "amberremy",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "Be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo", "amberremy", "sofijashery"],
      text: "Be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "dustinforrest",
    timestamp: 1489579767190,
    optionOne: {
      votes: [],
      text: "Find $50 yourself",
    },
    optionTwo: {
      votes: ["danlester", "sarahedo", "kianafuller"],
      text: "Have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "sofijashery",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["aminolson", "kianafuller", "danlester"],
      text: "Write JavaScript",
    },
    optionTwo: {
      votes: [],
      text: "Write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
