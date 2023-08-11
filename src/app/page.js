//https://www.hostinger.com/

"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { FaTreeCity } from "react-icons/fa6";
import { FaRunning, FaAngry } from "react-icons/fa";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Container,
  Button,
} from "@mui/material";

import styles from "./page.module.css";
import { useEffect } from "react";
export default function Home() {
  // const getInvoices = async function (id) {
  //   const response = await api.get(`/cards`);

  // };

  // useEffect(() => {
  //   getInvoices();
  // }, []);

  return (
    <>
      <Head>
        <title>Home | Dietrich Land Care</title>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <meta
          name="description"
          content="Dietrich Land Care is a landscaping company specializing in brush / lot clearing & stump grinding, excavation & grading services, seeding & sod services, general maintenance services, garden bed installations & maintenance, landscape renovations & features, patios, retainings walls, turf, fence installation, stump removal, snow removal, regrades, mulch installation"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Dietrich Land Care is a landscaping company specializing in brush / lot clearing & stump grinding, excavation & grading services, seeding & sod services, general maintenance services, garden bed installations & maintenance, landscape renovations & features, patios, retainings walls, turf, fence installation, stump removal, snow removal, regrades, mulch installation"
        />
        <meta
          property="og:image"
          content="https://dietrichlandcare.com/images/logo.jpg"
        />

        {/* <link rel="icon" href="/favicon.ico" />
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
        /> */}
      </Head>
      <main className={styles.home} styles={{ marginTop: "300px" }}>
        <div className={styles.banner}>
          <div
            style={{
              backgroundImage: 'url("./images/flag.jpg")',
              // opacity: "60%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className={styles.banner_inner}>
              <h1>
                Welcome to{" "}
                <span className="tagline">English in Eight Minutes</span>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.intro_content}>
          {" "}
          <p>
            This website offers English lessons you can complete in less than 8
            minutes.
          </p>
          <p>
            Pick a topic, study a few minutes, and then do the corresponding
            exercise.
          </p>
          <p>
            The focus is on English phrasal verbs, grammar, and idiomatic
            expressions specific to <b> the United States. </b>
          </p>
        </div>
        <section className={styles.content_container}>
          <Container>
            <Grid container spacing={4} my={4}>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>Nouns</h3>
                      <h4 className={styles.content_definition}>
                        People, Places, Things
                      </h4>
                      <p>Woman, City, Car</p>
                      <div className={styles.react_icon_container}>
                        <FaTreeCity size="5em" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>Verbs</h3>
                      <h4 className={styles.content_definition}>
                        Action words
                      </h4>
                      <p>Run, Fight, Sing</p>
                      <div className={styles.react_icon_container}>
                        <FaRunning size="5em" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>
                        Adjectives
                      </h3>
                      <h4 className={styles.content_definition}>
                        Describe Nouns
                      </h4>
                      <p>Strong, Angry, Funny</p>
                      <div className={styles.react_icon_container}>
                        <FaAngry size="5em" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={4} my={4}>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>
                        Idiomatic Expressions
                      </h3>
                      <h4 className={styles.content_definition}>
                        Informal Expressions
                      </h4>
                      <p>Time is money, Second wind</p>
                      <div className={styles.react_icon_container}>
                        <Image
                          alt=""
                          width={200}
                          height={100}
                          src="/time-is-money.jpeg"
                        />
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>
                        Phrasal Verbs
                      </h3>
                      <h4 className={styles.content_definition}>
                        Verb/Preposition Combinations
                      </h4>
                      <p>Get up, Break down, Speak out</p>
                      <div className={styles.react_icon_container}>
                        {/* <FaTreeCity size="2em" /> */}
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.link_cards}>
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>
                        Versus
                      </h3>
                      <h4 className={styles.content_definition}>
                        Similar But Different Verbs
                      </h4>
                      <p>Speak versus Talk</p>
                      <div className={styles.react_icon_container}>
                        {/* <FaTreeCity size="2em" /> */}
                      </div>
                    </Link>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
}
