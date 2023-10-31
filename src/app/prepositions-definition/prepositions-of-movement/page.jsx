import QuizForm from "@/src/components/QuizForm";
import styles from "../../styles/content-page.module.css";

export default function PrepositionsOfMovement() {
  const questionsArray = [
    {
      id: 1,
      title: "She walked _______ the store.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 2,
      title: "He walked ________ the door.",
      possibleAnswers: [
        { title: "through", correctAnswer: true },
        { title: "at" },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 3,
      title: "They ran _________ the street.",
      possibleAnswers: [
        { title: "through" },
        { title: "across", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 4,
      title: "They walked ______ a trap.",
      possibleAnswers: [
        { title: "across" },
        { title: "into", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 5,
      title: "We drove ______ the mall.",
      possibleAnswers: [
        { title: "through" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 6,
      title: "He is going ______ the store.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 7,
      title: "The cat walked ______ the table.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 8,
      title: "If I walk ______ that door I'm not coming back.",
      possibleAnswers: [
        { title: "into" },
        { title: "through", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 9,
      title: "We are travelling ______ China.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 10,
      title: "He walked _________ the bar.",
      possibleAnswers: [
        { title: "into", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 11,
      title: "Don't go ______ that bridge. It's dangerous",
      possibleAnswers: [
        { title: "into" },
        { title: "across", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 12,
      title: "They are biking ______ the park.",
      possibleAnswers: [
        { title: "to", correctAnswer: true },
        { title: "into" },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 13,
      title: "We flew ________ the clouds.",
      possibleAnswers: [
        { title: "across" },
        { title: "through", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "Through demonstrates movement directly inside something and out the other end.",
    },
    {
      id: 14,
      title: "She sat down ________ the desk from me",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "in" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 15,
      title: "The baby crawled _______ his mother.",
      possibleAnswers: [
        { title: "to", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination.",
    },
    {
      id: 16,
      title: "The dog ran ______ the car.",
      possibleAnswers: [
        { title: "across" },
        { title: "to", correctAnswer: true },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination. ",
    },
    {
      id: 17,
      title: "She ran _______ the cave.",
      possibleAnswers: [
        { title: "into", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
    {
      id: 18,
      title: "He walked _________ the room confidently.",
      possibleAnswers: [
        { title: "across", correctAnswer: true },
        { title: "to" },
      ],
      userAnswer: "",
      explanation: "Across demonstrates movement from one side to another.",
    },
    {
      id: 19,
      title: "We swam ______ the deep part of the pool.",
      possibleAnswers: [
        { title: "to", correctAnswer: true },
        { title: "through" },
      ],
      userAnswer: "",
      explanation:
        "To demonstrates that there is movement towards a specific destination..",
    },
    {
      id: 20,
      title: "The dog ran __________ the house.",
      possibleAnswers: [
        { title: "across" },
        { title: "into", correctAnswer: true },
      ],
      userAnswer: "",
      explanation: "Into demonstrates entering or looking inside something.",
    },
  ];

  return (
    <main>
      <div className={styles.page_title}>
        <h1>Prepositions of Movement</h1>
      </div>
      <div className="page-body">
        <p className="{styles.grammar_explanation_paragraph}">
          Prepositions of movement describe how something or someone moves from
          one space to another. The most commonly used preposition of movement
          is <b>to</b>, which demonstrates that there is movement towards a
          specific destination.
        </p>
      </div>
      <div className="page-examples">
        <ul>
          <li>
            You went <b>to</b> bed early.
          </li>
          <li>
            She has gone on vacation <b>to</b> Nairobi.
          </li>
          <li>
            I went <b>to</b> the library every Friday last summer.
          </li>
        </ul>

        <p className="{styles.grammar_explanation_paragraph}">
          Other prepositions of movement include: through, across, and into.
        </p>
        <p className="{styles.grammar_explanation_paragraph}">
          <b>Across</b> demonstrates movement from one side to another.
        </p>
        <ul>
          <li>Demetrius travelled across America on his motorcycle.</li>
          <li>Rebecca and Nia are swimming across the lake.</li>
        </ul>
        <p className="{styles.grammar_explanation_paragraph}">
          <b>Through</b> demonstrates movement directly inside something and out
          the other end.
        </p>
        <ul>
          <li>Come in through the front door.</li>
          <li>The bullet train passed through the tunnel.</li>
        </ul>
        <p className="{styles.grammar_explanation_paragraph}">
          <b>Into</b> demonstrates entering or looking inside something.
        </p>
        <ul>
          <li>She went into the house.</li>
          <li>They looked into the darkness.</li>
        </ul>
      </div>

      <QuizForm questionsArray={questionsArray} />
      <iframe
        className="{styles.iframe_wrapper}"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qpNRmbi-L9E?si=lqGnh3B6O1eMfg3b"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </main>
  );
}
