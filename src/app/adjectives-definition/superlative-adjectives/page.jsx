"use client";
import { useState } from "react";
import Head from "next/head";
import Quiz from "../../../components/Quiz";

import styles from "../../styles/content-page.module.css";

export default function PossessiveAdjectives() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "Nia is the ___________________ (old) daughter.",
      possibleAnswersAndExplanation: [
        { title: "oldest", correctAnswer: true },
        { title: "most old" },
      ],
      userAnswer: "",
      explanation:
        "Old has one syllable so you can add est for the superlative form.",
    },
    {
      title:
        "His car is the _______________ (comfortable) car I’ve ever driven.",
      possibleAnswersAndExplanation: [
        { title: "most comfortable", correctAnswer: true },
        { title: "comfortableist" },
      ],
      userAnswer: "",
      explanation:
        "Comfortable has three syllables so you can't add est for the superlative form.",
    },
    {
      title: "Bia is the _______________ (quiet) person I've ever met.",
      possibleAnswersAndExplanation: [
        { title: "quietest", correctAnswer: true },
        { title: "quitest" },
      ],
      userAnswer: "",
      explanation:
        "Quiet is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      title: "This restaurant has the ________________ food",
      possibleAnswersAndExplanation: [
        { title: "deliciouser" },
        { title: "most delicious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Delicious has three syllables so you can't add est for the superlative form.",
    },
    {
      title: "My math class is my ______________ (hard) class. ",
      possibleAnswersAndExplanation: [
        { title: "hardest", correctAnswer: true },
        { title: "most hardest" },
      ],
      userAnswer: "",
      explanation:
        "Hard has one syllable so you can add est for the superlative form.",
    },
    {
      title:
        "The roads in this neighborhood are the _______________ (narrow) in the city.",
      possibleAnswersAndExplanation: [
        { title: "narroest" },
        { title: "narrowest", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Narrow is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      title: "Malcolm is the _______________ (busy) man in his office.",
      possibleAnswersAndExplanation: [
        { title: "busiest", correctAnswer: true },
        { title: "busyest" },
      ],
      userAnswer: "",
      explanation:
        "Busy is a two syllable adjective so you can add est for the superlative form and it doesn't have a spelling change.",
    },
    {
      title: "Pigs are the ________________________(intelligent) farm animals.",
      possibleAnswersAndExplanation: [
        { title: "most intelligent", correctAnswer: true },
        { title: "intelligentest" },
      ],
      userAnswer: "",
      explanation:
        "Intelligent has three syllables so you can't add est for the superlative form.",
    },
    {
      title:
        "Demetrius is the ________________ (ambitious) director at his production company.",
      possibleAnswersAndExplanation: [
        { title: "ambitiousest" },
        { title: "most ambitious", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Ambitious has three syllables so you can't add est for the superlative form.",
    },
    {
      title: "My dog is the  ________________  (cute) in my neighborhood.",
      possibleAnswersAndExplanation: [
        { title: "most cutest" },
        { title: "cutest", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Cute has one syllable so you can add est for the superlative form.",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "She shares (they) ________________ passion for cooking.",
        possibleAnswersAndExplanation: [
          { title: "my" },
          { title: "their", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Their is the possessive adjective for they.",
      },
      {
        title: "(We) _______________ cat is very playful.",
        possibleAnswersAndExplanation: [
          { title: "His" },
          { title: "Our", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Our is the possessive adjective for we.",
      },
      {
        title: "Lisa and Mark enjoy (she) _____________ company.",
        possibleAnswersAndExplanation: [
          { title: "our" },
          { title: "her", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Her is the possessive adjective for she.",
      },
      {
        title: "The children found (he) _____________ lost toy.",
        possibleAnswersAndExplanation: [
          { title: "my" },
          { title: "his", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "His is the possessive adjective for he.",
      },
      {
        title: "(You) _______________ friends are very kind.",
        possibleAnswersAndExplanation: [
          { title: "Their", correctAnswer: true },
          { title: "My" },
        ],
        userAnswer: "",
        explanation: "Their is the possessive adjective for you.",
      },
      {
        title: "We often visit (I) _______________ grandparents.",
        possibleAnswersAndExplanation: [
          { title: "our", correctAnswer: true },
          { title: "her" },
        ],
        userAnswer: "",
        explanation: "Our is the possessive adjective for we.",
      },
      {
        title: "(She) _______________ sister is a talented musician.",
        possibleAnswersAndExplanation: [
          { title: "My" },
          { title: "Her", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Her is the possessive adjective for she.",
      },
      {
        title:
          "The students admired (he) _____________ dedication to their education.",
        possibleAnswersAndExplanation: [
          { title: "their" },
          { title: "his", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "His is the possessive adjective for he.",
      },
      {
        title: "(You) _______________ book is on the table.",
        possibleAnswersAndExplanation: [
          { title: "Her" },
          { title: "Your", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Your is the possessive adjective for you.",
      },
      {
        title: "David mentioned (we) _____________ favorite movie.",
        possibleAnswersAndExplanation: [
          { title: "his" },
          { title: "our", correctAnswer: true },
        ],
        userAnswer: "",
        explanation: "Our is the possessive adjective for we.",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
      <Head>
        <title>Superlative Adjectives | English in Eight Minutes</title>
        <meta
          content="Learn about superlative adjectives in English grammar. Understand how they compare three or more nouns and indicate the highest degree of a quality with examples."
          name="description"
        />
        <meta
          content="English, Grammar, Superlative Adjectives, Comparison, Examples"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://example.com/superlative-adjectives"
        />
        <meta
          property="og:title"
          content="Superlative Adjectives | English in Eight Minutes"
        />
        <meta
          property="og:description"
          content="Learn about superlative adjectives in English grammar. Understand how they compare three or more nouns and indicate the highest degree of a quality with examples."
        />
        <meta
          property="og:image"
          content="https://example.com/images/superlative-adjectives.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <div className="superlative-adjectives">
        <div className={styles.page_title}>
          <h1>Superlative Adjectives</h1>
        </div>
        <div className={styles.page_body}>
          <p className={styles.grammar_explanation_paragraph}>
            Superlative adjectives are used to compare three or more nouns,
            indicating the highest or most extreme degree of a particular
            quality. They are used when you want to highlight the greatest level
            of a certain characteristic within a group of items or individuals.
            Superlative adjectives typically end in "-est" for one-syllable
            adjectives or use "most" before the adjective for longer adjectives.
          </p>
        </div>
        <div className={styles.page_body}>
          <h4>Adjectives with one syllable</h4>
          <p>
            If an adjective has one syllable, we usually add 'est' to make the
            superlative form.
          </p>
          <ul className="page-examples">
            <li>smart → smartest</li>
            <li>fast → fastest</li>
            <li>tall → tallest</li>
            <li>old → oldest</li>
          </ul>
          <p>
            There are some spelling changes. If the adjective ends in 'e', we
            don't add another 'e', just 'r'.
          </p>
          <ul className="page-examples">
            <li>brave → bravest</li>
            <li>safe → safest</li>
          </ul>
          <p>
            If there is one vowel followed by one consonant at the end of the
            adjective, we often double the consonant.
          </p>
          <ul className="page-examples">
            <li>sad → sadder</li>
            <li>hot → hotter</li>
            <li>big → bigger</li>
          </ul>

          <p>
            If the adjective ends in 'e', we don't add another 'e', just 'r'.
          </p>
          <ul className="page-examples">
            <li>brave → bravest</li>
            <li>safe → safest</li>
          </ul>
          <p>
            There are some adjectives that we need to use 'more' with, even
            though they only have one syllable. Adding -er is incorrect for
            these verbs.
          </p>
          <ul className="page-examples">
            <li>real → more real (NOT realer)</li>
            <li>fun → more fun (NOT funner)</li>
          </ul>
          <h5>Adjectives with two syllables</h5>
          <p>Some adjectives with two syllables use 'more'.</p>
          <ul className="page-examples">
            <li>thoughtful → more thoughtful</li>
            <li>peaceful → more peaceful</li>
          </ul>
          <p>However, some two syllable adjectives can use 'est'.</p>
          <ul className="page-examples">
            <li>quiet → quietest</li>
            <li>cruel → cruelest</li>
            <li>simple → simplest</li>
            <li>quiet → quietest</li>
          </ul>
          <p>
            For adjectives with two syllables that end in 'y' we normally add
            'er' (y generally changes to i).
          </p>
          <ul className="page-examples">
            <li>funny → funniest</li>
            <li>happy → happiest</li>
            <li>ugly → ugliest</li>
            <li>silly → silliest</li>
          </ul>
          <h5>Adjectives with more than two syllables</h5>
          <p>
            Adjectives that have more than two syllables need to use 'most' to
            form their superlative.
          </p>
          <ul className="page-examples">
            <li>delicious → most delicious</li>
            <li>interesting → most interesting</li>
            <li>exotic → most exotic</li>
            <li>intelligent → most intelligent</li>
          </ul>
          <p>Irregular adjectives</p>
          <p>
            There are also some irregular adjectives. We simply need to memorize
            them.
          </p>
          <ul className="page-examples">
            <li>good → best</li>
            <li>bad → worst</li>
            <li>far → furthest</li>
            <li>little → least</li>
            <li>much → most</li>
          </ul>
        </div>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={quiz}
        callback={handleRandomQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
