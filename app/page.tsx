"use client";

import React, { useState } from "react";

import Card from "../src/componets/card";
// import styles from "./page.module.css";
import { cardTypes } from "../src/types/cardTypes";

export default function HomePage() {
  let [projects, setProjects] = useState(new Array<cardTypes.HomeCard>());

  function initalizeProjects() {
    let all: Array<cardTypes.HomeCard> = [
      {
        imageURKIDs: 0,
        imageAlt: "Song Comparison app Images",
        cardTitle: "Song Comparison",
        cardDescription:
          "This application was made in python and it compare the lyrics of two different songs. When searching for a song, the user can either search for an artist, song, or partial lyrics, and the top ten results will be returned to the user. Once both songs are selected a graph is made for the most common words used by either songs. Those lyrics are filter through a most common words in the English language(i.e. at, the, was). Finally, a summary of both lyrics are made, which is determined to be the most important part of the lyrics.",
        buttonTitle: "View Project",
        buttonLink: "https://github.com/vallen97/song_comparison",
        externalLink: true,
      },
      {
        imageURKIDs: 1,
        imageAlt: "Local Online Game images",
        cardTitle: "Local Online Game",
        cardDescription:
          "This project is a game made with the Unity engine. The core mechanics are simple each player has three lives and can move either, up, left, or right. The purpose of this game is to have local online multiplayer, which up to four players can play together. There is a host which each user needs to connect to, each player is color coated with a different color. Once there is only one player left, they would be the winner, and everyone is sent back to the main menu.",
        buttonTitle: "View Project",
        buttonLink: "https://github.com/vallen97/local_online_game",
        externalLink: true,
      },
      {
        imageURKIDs: 2,
        imageAlt: "Snake AI images",
        cardTitle: "Snake AI",
        cardDescription:
          "This application is a snake game that uses machine learning to play the game.",
        buttonTitle: "View Snake AI",
        buttonLink: "/SnakeAI",
        externalLink: false,
      },
      {
        imageURKIDs: 3,
        imageAlt: "Sorting Algorithms Images",
        cardTitle: "Visualizing Sorting Algorithms",
        cardDescription:
          "This application is used to visualize different sorting algorithms",
        buttonTitle: "Start Visualizing",
        buttonLink: "/SortAlgorithm",
        externalLink: false,
      },
      {
        imageURKIDs: 4,
        imageAlt: "Bird AI images",
        cardTitle: "Flappy Birds AI",
        cardDescription:
          "This application is the flappy birds game that uses machine learning to play",
        buttonTitle: "View Flappy Birds AI",
        buttonLink: "/FlappyBirds",
        externalLink: false,
      },
    ];

    setProjects(all);
  }

  React.useMemo(() => initalizeProjects(), []);

  return (
    <div className="px-8  " style={{ height: "100%" }}>
      <main className="justify-center place-content-center  flex-col">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 sm:place-items-center ">
          {projects.map((data: any, index: number) => (
            <React.Fragment key={index.toString()}>
              <Card
                carouselImages={data.imageURKIDs}
                imageAlt={data.imageAlt + index.toString()}
                cardTitle={data.cardTitle}
                cardDescription={data.cardDescription}
                buttonTitle={data.buttonTitle}
                buttonLink={data.buttonLink}
                externalLink={data.externalLink}
              />
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
