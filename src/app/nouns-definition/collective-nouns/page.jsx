"use client";

import { useState } from "react";
import Quiz from "../../../components/Quiz";
import Head from "next/head";
//DONE))

import styles from "../../styles/content-page.module.css";

export default function Collective() {
  const [shouldShowNewQuestionsBtn, setShouldShowNewQuestionsBtn] =
    useState(true);
  const [quiz, setQuiz] = useState([
    {
      title: "The students __________ fighting in the cafeteria.",
      possibleAnswersAndExplanation: [
        { title: " are", correctAnswer: true },
        { title: " is" },
      ],
      explanation:
        "Students are considered individuals, not a collective group",
      userAnswer: "",
    },
    {
      title: "The group __________ decided together to file the petition.",
      possibleAnswersAndExplanation: [
        { title: "has", correctAnswer: true },
        { title: "have" },
      ],
      userAnswer: "",
    },
    {
      title:
        "The United States army _____________ a budget much larger than any other countries.",
      possibleAnswersAndExplanation: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "My sisters ____________ to go to the beach this weekend.",
      possibleAnswersAndExplanation: [
        { title: "want", correctAnswer: true },
        { title: "wants" },
      ],
      userAnswer: "",
    },
    {
      title: "___________ the parents' committee made a decision.",
      possibleAnswersAndExplanation: [
        { title: "Has", correctAnswer: true },
        { title: "Have" },
      ],
      userAnswer: "",
    },
    {
      title: "___________ any of the soldiers hurt?",
      possibleAnswersAndExplanation: [
        { title: "Was" },
        { title: "Were", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "That team __________ every game.",
      possibleAnswersAndExplanation: [
        { title: "wins", correctAnswer: true },
        { title: "win" },
      ],
      userAnswer: "",
    },
    {
      title:
        "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
      possibleAnswersAndExplanation: [
        { title: "was" },
        { title: "were", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title: "The school choir ______________ won many competitions.",
      possibleAnswersAndExplanation: [
        { title: "have" },
        { title: "has", correctAnswer: true },
      ],
      userAnswer: "",
    },
    {
      title:
        "His family ______________ very big. He has 10 uncles and 11 aunts.",
      possibleAnswersAndExplanation: [
        { title: "are" },
        { title: "is", correctAnswer: true },
      ],
      userAnswer: "",
    },
  ]);

  const handleRandomQuestions = () => {
    setQuiz([
      {
        title: "The team __________ celebrating their victory.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The committee __________ discussing the new proposal.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The jury __________ reached a unanimous decision.",
        possibleAnswersAndExplanation: [
          { title: "has", correctAnswer: true },
          { title: "have" },
        ],
        userAnswer: "",
      },
      {
        title: "The swarm of bees __________ buzzing around the flowers.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The orchestra __________ performing at the concert.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "His family __________ planning a reunion.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "Her staff __________ working hard this week.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The audience __________ clapping.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
      {
        title: "The school of fish __________ swimming in the ocean.",
        possibleAnswersAndExplanation: [
          { title: "is", correctAnswer: true },
          { title: "are" },
        ],
        userAnswer: "",
      },
    ]);
    setShouldShowNewQuestionsBtn(false);
  };

  return (
    <>
 

      <div className={styles.page_title}>
        <h1>Collective Nouns</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          Collective nouns are nouns which represent a group or collection of
          people or things. They include words such as <b>audience</b>,{" "}
          <b>family</b>, <b>government</b>, <b>group</b>, and <b>team</b>. Most
          collective nouns are treated as a singular entity, using the singular
          verb form. Because collective nouns include multiple "members" inside
          of it you may think you would use the "they" form of the verb, but you
          don't. For example, you don't say the group are happy, you say the
          group is happy.
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            The U.S. <b>government</b> is made up of 3 branches.
          </li>
          <li>
            This hockey <b>team</b> includes three players from Canada.
          </li>

          <li>
            Our <b>class</b> takes a field trip to the natural history museum
            every year.
          </li>
          <li>
            My <b>family</b> is important to me.
          </li>

          <li>
            The city <b>council</b> is rejecting the proposal.
          </li>
        </ul>
      </div>
      <Quiz
        // explanation={explanation}
        title="Take a Quiz!"
        questions={quiz}
        callback={handleRandomQuestions}
        shouldShowNewQuestionsBtn={shouldShowNewQuestionsBtn}
      ></Quiz>
    </>
  );
}
