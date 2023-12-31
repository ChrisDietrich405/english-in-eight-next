import Quiz from "@/src/components/Quiz";

import {
  Container,
  Box,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "Idiomatic Expressions | English in Eight Minutes",
  description:
    "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
  keywords:
    "English, Idiomatic Expressions, English idioms, English in Eight Minutes",
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
    title: "Idiomatic Expressions | English in Eight Minutes",
    description:
      "Explore a list of common idiomatic expressions in English with English in Eight Minutes. Learn their meanings and usage through examples and a quiz.",
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

export default function Expressions2() {
  return (
    <Container>
      <Stack>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Idiomatic Expressions List Two
        </Typography>
      </Stack>

      <Stack>
        <List sx={{ marginLeft: "20px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Hand me downs</b> - clothes that are received that were worn by
              older relatives
              <br />
              <Typography>
                Example: I wore a lot of my older brother’s{" "}
                <b>hand me downs.</b>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Second wind</b> - a new strength or energy to continue
              something that is difficult
              <br />
              <Typography>
                Example: I was tired around 11pm, but got a <b>second wind</b>{" "}
                and finished the project.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>To wing it</b> - to not plan for something
              <br />
              <Typography>
                Example: Malcolm didn’t have time to prepare for his interview
                so he needed <b>to wing it.</b>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>To backfire</b> - (of a plan or action) to have an opposite and
              undesirable effect to what was intended
              <br />
              <Typography>
                Example: Her plans to make him jealous <b>backfired</b> on her
                when he started dating her best friend.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText>
              <b>Out of one's hands</b> - not being able to be controlled or
              managed
              <br />
              <Typography>
                Example: The decision is <b>out of my hands.</b> I have no
                control in this situation.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            id: 1,
            title:
              "The decision is _________________. The boss will decide now.",
            possibleAnswers: [
              { title: "a. backfired" },
              { title: "b. out of her hands", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 2,
            title:
              "I completely forgot about my presentation today. I needed _____________.",
            possibleAnswers: [
              { title: "a. to wing it", correctAnswer: true },
              { title: "b. second wind" },
            ],
            userAnswer: "",
          },
          {
            id: 3,
            title:
              "Working extra _____________ on me. They thought I was crazy and fired me.",
            possibleAnswers: [
              { title: "a. winged" },
              { title: "b. backfired", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            id: 4,
            title:
              "It's better for the environment for children to wear _________________.",
            possibleAnswers: [
              { title: "a. hand me downs", correctAnswer: true },
              { title: "b. second wind" },
            ],
            userAnswer: "",
          },
          {
            id: 5,
            title:
              "Many marathon runners get a _____________ at about the 18km mark.",
            possibleAnswers: [
              { title: "a. backfire" },
              { title: "b. second wind", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </Container>
  );
}
