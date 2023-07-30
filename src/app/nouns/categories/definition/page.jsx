import Grid from "@mui/material/Grid";
import Image from "next/image";

import styles from "../../../styles/parts-of-speech.module.css";

export default function NounDefinition() {
  return (
    <>
      <main>
        <div className={styles.page_title}>
          <h2>Noun Definition</h2>
        </div>
        <div className="page-body">
          <p
            style={{ textAlign: "center" }}
            className={styles.grammar_explanation_paragraph}
          >
            A noun is a word that describes an object or set of objects, such as
            people, places or things{" "}
          </p>
        </div>
        <Grid container>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div>
              <Image
                src="/person-nouns-definition.jpg"
                alt="Picture of actor Terry Crews"
                width={200}
                height={200}
              />
            </div>
            <p className="picture-subtitle">Person</p>
            <p aria-hidden="true" className="picture-subtitle">
              (Terry Crews)
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/place-nouns-definition.jpg"
                alt="Picture of the Taj Mahal"
                width={200}
                height={200}
              />
            </div>
            <p className="picture-subtitle">Place</p>
            <p aria-hidden="true" className="picture-subtitle">
              (Taj Mahal)
            </p>
          </Grid>
          <Grid item xs={12} lg={4} className={styles.image_container}>
            <div className="picture-wrapper">
              <Image
                src="/thing-nouns-definition.jpg"
                alt="Picture of IPhone"
                width={200}
                height={200}
              />
            </div>
            <p className="picture-subtitle">Thing</p>
            <p aria-hidden="true" className="picture-subtitle">
              (IPhone)
            </p>
          </Grid>
        </Grid>
      </main>
    </>
  );
}