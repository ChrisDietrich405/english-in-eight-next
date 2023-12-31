import QuizForm from "@/src/components/QuizForm";

import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import styles from "../../styles/content-page.module.css";

export const metadata = {
  title: "Prepositions of Place: A Detailed Guide",
  description:
    "Explore the nuances of the prepositions of place at, on, in with this detailed guide.",
  keywords:
    "Prepositions of Place, English Grammar, Quiz, Learn English, Grammar Skills, At, On, In",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Understanding Prepositions of Place: A Detailed Guide",
    description:
      "Explore the nuances of prepositions of place with this detailed guide. Enhance your understanding of 'at', 'on', and 'in' prepositions. Test your knowledge with a quiz and solidify your grasp of English grammar.",
    images: [
      {
        alt: "Prepositions of Place Guide",
        url: "/images/prepositions-of-place.jpg", // Replace with the actual image URL
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function PrepositionsOfPlace() {
  const questionsArray = [
    {
      id: 1,
      title: "He's _____ the bedroom.",
      possibleAnswers: [{ title: "on" }, { title: "in", correctAnswer: true }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 2,
      title: "It's ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 3,
      title: "She's ______ the airport.",
      possibleAnswers: [{ title: "on" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 4,
      title: "They are ______ the restaurant.",
      possibleAnswers: [{ title: "on" }, { title: "at", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 5,
      title: "The clothes are ________ the floor.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 6,
      title: "He is ______ the store.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 7,
      title: "The cat is ______ the roof.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 8,
      title: "The book is ______ the shelf.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 9,
      title: "She is ______ the car.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
    },
    {
      id: 10,
      title: "The book is ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 11,
      title: "The painting is ______ the wall.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 12,
      title: "They are ______ the park.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 13,
      title: "The pen is ______ the desk.",
      possibleAnswers: [{ title: "in" }, { title: "on", correctAnswer: true }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 14,
      title: "The clock is ______ the wall.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 15,
      title: "The bats are ______ the cave.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "In is used when referring to something that is in something else.",
    },
    {
      id: 16,
      title: "The dog is ______ the yard.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "In is used when referring to something that is in something else. ",
    },
    {
      id: 17,
      title: "The keys are ______ the counter.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 18,
      title: "The cup is ______ the table.",
      possibleAnswers: [{ title: "on", correctAnswer: true }, { title: "in" }],
      userAnswer: "",
      explanation:
        "On is used when referring to something that is on a surface.",
    },
    {
      id: 19,
      title: "They are ______ the museum.",
      possibleAnswers: [{ title: "at", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation:
        "At is used when referring to something at a specific point.",
    },
    {
      id: 20,
      title: "The necklace is ______ the jewelry box.",
      possibleAnswers: [{ title: "in", correctAnswer: true }, { title: "on" }],
      userAnswer: "",
      explanation: "In is used when referring to something that is inside.",
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
          Prepositions of Place
        </Typography>
      </Stack>
      <Stack>
        <Typography mb={2}>
          Examples of prepositions of place include: at, on, in.
        </Typography>
      </Stack>
      <Typography>
        We use <b>on</b> to refer to something on a surface.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              I dropped something <b>on</b> the document.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              I hung the picture <b>on</b> the wall.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              {" "}
              The drinks are <b>on</b> the menu.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        We use <b>in</b> to refer to something that is inside.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              The veggie burgers are <b>in</b> the fridge.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              She's <b>in</b> the house.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              Marcus is <b>in</b> Kenya, visiting his friend <b>in</b> the
              hospital.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Typography>
        We use <b>at</b> to refer to something at a specific point.
      </Typography>
      <Box component="section">
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              He waited <b>at</b> the bus stop for 2 hours.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              They’ll meet <b>at</b> the airport.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              They are <b>at</b> the movies.
            </ListItemText>
          </ListItem>
        </List>
      </Box>

      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="160"
        height="315"
        src="https://www.youtube.com/embed/kq65VGkVwC8?si=RqBQKKDNXQZ_AD5R"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
