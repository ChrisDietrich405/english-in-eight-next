"use client";

import Image from "next/image";
import Link from "next/link";

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
  //   console.log("hi");
  // };

  // useEffect(() => {
  //   getInvoices();
  // }, []);

  return (
    <main className={styles.home} styles={{ marginTop: "300px" }}>
      <div className={styles.banner}>
        <div
          style={{
            backgroundImage: 'url("./images/banner.jpg")',
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
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
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
