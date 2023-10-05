import QuizForm from "@/src/components/QuizForm";
import styles from "../../../styles/content-page.module.css";

export const metadata = {
  title: "Present Continuous | English in Eight Minutes",
  description:
    "The website, titled English in Eight Minutes is designed to provide quick and concise English language lessons. The content focuses on English phrasal verbs, grammar, and idiomatic expressions specific to the United States. The homepage features an engaging banner and offers links to various topics, including Nouns, Verbs, Adjectives, Idiomatic Expressions, Phrasal Verbs, and Versus (similar but different verbs). ",
  keywords:
    "English, language lessons, phrasal verbs, grammar, idiomatic expressions, United States",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Home | English in Eight Minutes",
    description:
      "The website, titled English in Eight Minutes is designed to provide quick and concise English language lessons. The content focuses on English phrasal verbs, grammar, and idiomatic expressions specific to the United States. The homepage features an engaging banner and offers links to various topics, including Nouns, Verbs, Adjectives, Idiomatic Expressions, Phrasal Verbs, and Versus (similar but different verbs). ",
    images: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
    ],
  },
};

export default function PresentPerfectContinuous() {
  const questionsArray = [
    {
      id: 1,
      title: "He ________ (love) tea.",
      possibleAnswersAndExplanation: [
        { title: "a. loves", correctAnswer: true },
        { title: "b. love" },
      ],
      userAnswer: "",
      explanation: "Loves is the correct positive form for she, he, it.",
    },
    {
      id: 2,
      title: "I _________ (like) dancing.",
      possibleAnswersAndExplanation: [
        { title: "a. don't like", correctAnswer: true },
        { title: "b. doesn't like" },
      ],
      userAnswer: "",
      explanation: "Like is the correct form for I.",
    },
    {
      id: 3,
      title: "She ____________ (play) badminton.",
      possibleAnswersAndExplanation: [
        { title: "a. plays", correctAnswer: true },
        { title: "b. play" },
      ],
      userAnswer: "",
      explanation: "Plays is the correct positive form for she, he, it.",
    },
    {
      id: 4,
      title: "The class (it) __________ (begin) at 11am.",
      possibleAnswersAndExplanation: [
        { title: "a. begin" },
        { title: "b. begins", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Begins is the correct positive form for she, he, it.",
    },
    {
      id: 5,
      title: "He ________ (cry) when he watches sad movies.",
      possibleAnswersAndExplanation: [
        { title: "a. cry" },
        { title: "b. cries", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Cries the correct positive form for she, he, it.",
    },
    {
      id: 6,
      title: "They ________ (wash) the dishes.",
      possibleAnswersAndExplanation: [
        { title: "a. washes" },
        { title: "b. wash", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Wash is the correct positive form for they.",
    },

    {
      id: 7,
      title: "I ________ (study) Arabic.",
      possibleAnswersAndExplanation: [
        { title: "a. study", correctAnswer: true },
        { title: "b. studies" },
      ],
      userAnswer: "",
      explanation: "Study is the correct positive form for I.",
    },
    {
      id: 8,
      title: "They _________ (live) in Tunisia.",
      possibleAnswersAndExplanation: [
        { title: "a. live", correctAnswer: true },
        { title: "b. lives" },
      ],
      userAnswer: "",
      explanation: "Live is the correct positive form for They.",
    },
    {
      id: 9,
      title: "She _______ (work) at a mall.",
      possibleAnswersAndExplanation: [
        { title: "a. works", correctAnswer: true },
        { title: "b. work" },
      ],
      userAnswer: "",
      explanation: "Works is the correct positive form for she, he, it.",
    },
    {
      id: 10,
      title: "Nia _______ (play) the piano very well.",
      possibleAnswersAndExplanation: [
        { title: "a. don't play" },
        { title: "b. doesn't play", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Plays is the correct positive form for she, he, it.",
    },
    {
      id: 11,
      title: "He ________________ (enjoy) hiking.",
      possibleAnswersAndExplanation: [
        { title: "a. enjoys", correctAnswer: true },
        { title: "b. enjoy" },
      ],
      userAnswer: "",
      explanation: "Enjoys is the correct positive form for he.",
    },

    {
      id: 12,
      title: "They ________________ (play) chess every weekend.",
      possibleAnswersAndExplanation: [
        { title: "a. play", correctAnswer: true },
        { title: "b. plays" },
      ],
      userAnswer: "",
      explanation: "Play is the correct positive form for they.",
    },

    {
      id: 13,
      title: "She ________________ (read) a book every night before bed.",
      possibleAnswersAndExplanation: [
        { title: "a. reads", correctAnswer: true },
        { title: "b. read" },
      ],
      userAnswer: "",
      explanation: "Reads is the correct positive form for she.",
    },

    {
      id: 14,
      title: "The cat ________________ (sleep) in the sun every afternoon.",
      possibleAnswersAndExplanation: [
        { title: "a. sleeps", correctAnswer: true },
        { title: "b. sleep" },
      ],
      userAnswer: "",
      explanation: "Sleeps is the correct positive form for she, he, it.",
    },

    {
      id: 15,
      title: "I ________________ (write) a lot of emails every day.",
      possibleAnswersAndExplanation: [
        { title: "a. write", correctAnswer: true },
        { title: "b. writes" },
      ],
      userAnswer: "",
      explanation: "Write is the correct positive form for I.",
    },

    {
      id: 16,
      title: "We ________________ (watch) a movie every Friday night.",
      possibleAnswersAndExplanation: [
        { title: "a. watch", correctAnswer: true },
        { title: "b. watches" },
      ],
      userAnswer: "",
      explanation: "Watch is the correct positive form for we.",
    },

    {
      id: 17,
      title: "He ________________ (paint) in his studio.",
      possibleAnswersAndExplanation: [
        { title: "a. paints", correctAnswer: true },
        { title: "b. paint" },
      ],
      userAnswer: "",
      explanation: "Paints is the correct positive form for he.",
    },

    {
      id: 18,
      title: "They ________________ (dance) professionally.",
      possibleAnswersAndExplanation: [
        { title: "a. dance", correctAnswer: true },
        { title: "b. dances" },
      ],
      userAnswer: "",
      explanation: "Dance is the correct positive form for they.",
    },

    {
      id: 19,
      title: "He ________________ (cook) delicious meals for her family.",
      possibleAnswersAndExplanation: [
        { title: "a. cooks", correctAnswer: true },
        { title: "b. cook" },
      ],
      userAnswer: "",
      explanation: "Cooks is the correct positive form for she, he, it.",
    },

    {
      id: 20,
      title: "I ________________ (play) the guitar in a band.",
      possibleAnswersAndExplanation: [
        { title: "a. play", correctAnswer: true },
        { title: "b. plays" },
      ],
      userAnswer: "",
      explanation: "Play is the correct positive form for I.",
    },
  ];

  return (
    <>
      <div className="page-body">
        <div className={styles.page_title}>
          <h1>Present Simple</h1>
        </div>
        <p className={styles.grammar_explanation_paragraph}>
          The simple present is used to describe actions, events, or states that
          are habitual, repeated, or generally true. It is used when the action
          is happening in the present time or when something is a permanent
          fact. The positive form for regular verbs is really easy. It's just
          the verb with an extra 's' if the subject is 'he', 'she', or 'it'.
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
            <tr>
              <td>I eat</td>
              <td>I do not eat</td>
              <td>I don't eat</td>
            </tr>
            <tr>
              <td>You walk</td>
              <td>You do not walk</td>
              <td>You don't walk</td>
            </tr>
            <tr>
              <td>She, he, it works</td>
              <td>She, he, it does not work</td>
              <td>She, he, it, doesn't work</td>
            </tr>
            <tr>
              <td>We fight</td>
              <td>We do not fight</td>
              <td>We don't fight </td>
            </tr>
            <tr>
              <td>They laugh</td>
              <td>They do not laugh</td>
              <td>They don't laugh</td>
            </tr>{" "}
          </tbody>
        </table>{" "}
        {/* {data.map((verb) => {
//           return (
//             <tr>
//               <td>{verb.positive}</td>
//               <td>{verb.negative}</td>
//               <td>{verb.negativeShortForm}</td>
//             </tr>
//           );
//         })} */}{" "}
        <div className="page-body">
          <h4>Present simple tense with irregular verbs</h4>
          <p>Some verbs have spelling changes with 'he', 'she' or 'it':</p>{" "}
          <p>
            Verbs that end in 's', 'sh', 'ch' or 'x' usually add <b>'e'</b>{" "}
            before <b>'s'</b>:{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>watch becomes watches</li>
            <li>pass becomes passes</li>
            <li>crash becomes crashes</li>{" "}
          </ul>
          <p>Example: She boxes on Friday nights.</p>{" "}
          <p>
            Verbs that end in <b>'y'</b> often change to <b>'ie'</b> before 's':{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>cry becomes cries</li>
            <li>study becomes studies</li>
            <li>fry becomes fries</li>
            <li>marry becomes marries</li>
            <li>fly becomes flies</li>{" "}
          </ul>
          <p>Example: He cries a lot.</p>{" "}
          <p>
            Be careful! <b>'y'</b> doesn't change to <b>'ie'</b> if the ending
            is 'ay', 'ey', 'oy', 'uy'.{" "}
          </p>{" "}
          <ul className="page-examples">
            <li>display becomes displays</li>
            <li>say becomes says</li>
            <li>buy becomes buys</li>
            <li>enjoy becomes enjoys</li>{" "}
          </ul>
          <p>Example: He buys a lot of clothes.</p>{" "}
        </div>
      </div>
      <QuizForm questionsArray={questionsArray} />

      <iframe
        className={styles.iframe_wrapper}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/47LEelX7nhg?si=8-fSboWd7KD3Fawh"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
