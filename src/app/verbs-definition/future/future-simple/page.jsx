import QuizForm from "@/src/components/QuizForm";

import {
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Future Simple Tense | English in Eight Minutes",
  description:
    "Learn about the future simple tense in English. This page provides explanations, examples, and a quiz",
  keywords:
    "future simple tense, English grammar, English lessons, phrasal verbs, idiomatic expressions, United States",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Future Simple Tense | English in Eight Minutes",
    description:
      "Learn about the future simple tense in English. This page provides explanations, examples, and a quiz to help you understand and use this tense correctly. English in Eight Minutes offers quick and concise English language lessons with a focus on phrasal verbs, grammar, and idiomatic expressions specific to the United States.",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function FutureSimple() {
  const questionsArray = [
    {
      id: 1,
      title:
        "It's Nia's birthday next week, so we _____________ buy her a microwave. (prior plan)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to",
    },
    {
      id: 2,
      title:
        "Could you lend me $40? I promise I _______________ pay you back Thursday. (promise)",
      possibleAnswers: [
        { title: "a. am going to" },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a promise so it requires will",
    },

    {
      id: 3,
      title: "The coach __________________ retire! It's very sad. (prior plan)",
      possibleAnswers: [
        { title: "a. will" },
        { title: "b. is going to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to",
    },
    {
      id: 4,
      title: "He _______ do anything his mother tells him to do. (refusal)",
      possibleAnswers: [
        { title: "a. won't", correctAnswer: true },
        { title: "b. am not going to" },
      ],
      userAnswer: "",
      explanation: "This is a refusal so it requires won't",
    },
    {
      id: 5,
      title: "Antonio's sister ____________________ have a baby. (prior plan)",
      possibleAnswers: [
        { title: "a. is going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to",
    },
    {
      id: 6,
      title:
        "I don't have anything to wear. That's ok. I _______ give you one of my dresses.(offer)",
      possibleAnswers: [
        { title: "a. will", correctAnswer: true },
        { title: "b. am going to" },
      ],
      userAnswer: "",
      explanation: "This is an offer so it requires will",
    },
    {
      id: 7,
      title:
        "Just a moment. I __________________ help you bring in the groceries. (offer)",
      possibleAnswers: [
        { title: "a. am going to" },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an offer so it requires will",
    },
    {
      id: 8,
      title:
        "We ____________________ take a trip to Accra in June. (prior plan)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to",
    },
    {
      id: 9,
      title:
        "Look at those gray clouds over there! It _________________  rain soon. (prediction) ",
      possibleAnswers: [
        { title: "a. is going to", correctAnswer: true },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a prediction so it can use either",
    },
    {
      id: 10,
      title:
        "They ______________ have the meeting outside tomorrow. It's all planned, so I hope it won't rain. (prior plan)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to",
    },
    {
      id: 11,
      title:
        "I can't find my phone anywhere! I ___________ call it to find it for you.(offer)",
      possibleAnswers: [
        { title: "a. am going to" },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is an offer so it requires will",
    },
    {
      id: 12,
      title:
        "The restaurant is really busy tonight. We ________________ have to wait for a table. (prediction)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a prediction so it can use either.'",
    },
    {
      id: 13,
      title:
        "Sarah ________________________ own her own business next year. (prior plan)",
      possibleAnswers: [
        { title: "a. is going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan, so it requires 'is going to.'",
    },
    {
      id: 14,
      title:
        "My parents ___________________ celebrate their 25th anniversary next month. (prior plan)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires 'are going to.'",
    },
    {
      id: 15,
      title:
        "I ____________________ pick you up at the airport tomorrow. What time does your flight arrive? (offer)",
      possibleAnswers: [
        { title: "a. will", correctAnswer: true },
        { title: "b. am going to" },
      ],
      userAnswer: "",
      explanation: "This is an offer so it requires will",
    },
    {
      id: 16,
      title: "The company ___________________ make any changes. (refusal)",
      possibleAnswers: [
        { title: "a. isn't going to" },
        { title: "b. won't", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a refusal so it requires won't.",
    },
    {
      id: 17,
      title:
        "I have a feeling that it ____________________ snow tomorrow. (prediction)",
      possibleAnswers: [
        { title: "a. is going to", correctAnswer: true },
        { title: "b. will", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a prediction so it can use either'",
    },
    {
      id: 18,
      title:
        "The weather forecast says it ____________________ be sunny all day. (prediction)",
      possibleAnswers: [
        { title: "a. will", correctAnswer: true },
        { title: "b. is going to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "This is a prediction so it can use either'",
    },
    {
      id: 19,
      title:
        "I ___________________ call the electrician to fix the light. (prior plan)",
      possibleAnswers: [
        { title: "a. am going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan so it requires going to ",
    },
    {
      id: 20,
      title:
        "They ________________________ have a surprise party for their friend on Saturday. (prior plan)",
      possibleAnswers: [
        { title: "a. are going to", correctAnswer: true },
        { title: "b. will" },
      ],
      userAnswer: "",
      explanation: "This is a prior plan, so it requires 'are going to.'",
    },
  ];

  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Future Simple
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          The future simple is a verb tense that's used to talk about things
          that haven't happened yet. For example, next year she{" "}
          <b>is going to</b> change careers. There are two ways to express the
          future. You can use <b>will</b> or <b>going to</b> depending on the
          situation.
        </Typography>
        <Typography mb={2}>
          The first way to express the simple future
        </Typography>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I am going to eat</td>
              <td>I'm going to eat</td>
              <td>I am not going to eat</td>
              <td>I'm not going to eat</td>
            </tr>
            <tr>
              <td>You are going to play</td>
              <td>You're going to play</td>
              <td>You are not going to play</td>
              <td>You're not going to play</td>
            </tr>
            <tr>
              <td>She, he, it is going to work</td>
              <td>She, he, it's going to work</td>
              <td>She, he, it is not going to work</td>
              <td>She, he, it's not going to work</td>
            </tr>
            <tr>
              <td>We are going to swim</td>
              <td>We're going to swim</td>
              <td>We are not going to swim</td>
              <td>We're not going to swim</td>
            </tr>
            <tr>
              <td>They are going to finish</td>
              <td>They're going to finish</td>
              <td>They are not going to finish</td>
              <td>They're not going to finish</td>
            </tr>
          </tbody>
        </table>
        <Typography mb={2}>
          The second way to express the simple future
        </Typography>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Positive short form</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will eat</td>
              <td>I'll eat</td>
              <td>I will not eat</td>
              <td>I won't eat</td>
            </tr>
            <tr>
              <td>You will relax</td>
              <td>You'll relax</td>
              <td>You will not relax</td>
              <td>You won't relax</td>
            </tr>
            <tr>
              <td>She, he, it will work</td>
              <td>She, he, it'll work</td>
              <td>She, he, it will not work</td>
              <td>She, he, it won't work</td>
            </tr>
            <tr>
              <td>We will talk</td>
              <td>We'll talk</td>
              <td>We will not talk</td>
              <td>We won't talk</td>
            </tr>
            <tr>
              <td>They will fight</td>
              <td>They'll fight</td>
              <td>They will not fight</td>
              <td>They won't fight</td>
            </tr>
          </tbody>
        </table>
        <Typography>
          {" "}
          We use <b>going to </b> for prior plans and in situations where
          something is probably going to happen.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              We're going to go to the movies this weekend. (prior plan)
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              My team is winning 8-2. They're going to win. (probably going to
              happen)
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          {" "}
          We use <b>will</b> with refusals, offers and promises.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>She won't listen to me. (refusal)</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              You look tired. I will help you with your homework. (offer)
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I love you very much. I will never leave you. (promise)
            </ListItemText>
          </ListItem>
        </List>
        <Typography>
          {" "}
          We can use <b>will</b> or <b>going to</b> for predictions.
        </Typography>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>I predict she will win the election.</ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I predict she's going to win the election.
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
      <QuizForm questionsArray={questionsArray} />
      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tri7u632AaA?si=Br_dxsWwJec0QBq9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
