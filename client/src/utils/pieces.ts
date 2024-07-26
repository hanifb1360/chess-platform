import React from "react";
import wP from "../assets/images/wP.png";
import wR from "../assets/images/wR.png";
import wN from "../assets/images/wN.png";
import wB from "../assets/images/wB.png";
import wQ from "../assets/images/wQ.png";
import wK from "../assets/images/wK.png";
import bP from "../assets/images/bP.png";
import bR from "../assets/images/bR.png";
import bN from "../assets/images/bN.png";
import bB from "../assets/images/bB.png";
import bQ from "../assets/images/bQ.png";
import bK from "../assets/images/bK.png";

const pieceToImage: Record<string, string> = {
  wP,
  wR,
  wN,
  wB,
  wQ,
  wK,
  bP,
  bR,
  bN,
  bB,
  bQ,
  bK,
};

const customPieces: Record<
  string,
  (props: { squareWidth: number }) => JSX.Element
> = {
  wP: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wP,
      alt: "wP",
      width: squareWidth,
      height: squareWidth,
    }),
  wR: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wR,
      alt: "wR",
      width: squareWidth,
      height: squareWidth,
    }),
  wN: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wN,
      alt: "wN",
      width: squareWidth,
      height: squareWidth,
    }),
  wB: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wB,
      alt: "wB",
      width: squareWidth,
      height: squareWidth,
    }),
  wQ: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wQ,
      alt: "wQ",
      width: squareWidth,
      height: squareWidth,
    }),
  wK: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.wK,
      alt: "wK",
      width: squareWidth,
      height: squareWidth,
    }),
  bP: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bP,
      alt: "bP",
      width: squareWidth,
      height: squareWidth,
    }),
  bR: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bR,
      alt: "bR",
      width: squareWidth,
      height: squareWidth,
    }),
  bN: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bN,
      alt: "bN",
      width: squareWidth,
      height: squareWidth,
    }),
  bB: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bB,
      alt: "bB",
      width: squareWidth,
      height: squareWidth,
    }),
  bQ: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bQ,
      alt: "bQ",
      width: squareWidth,
      height: squareWidth,
    }),
  bK: ({ squareWidth }) =>
    React.createElement("img", {
      src: pieceToImage.bK,
      alt: "bK",
      width: squareWidth,
      height: squareWidth,
    }),
};

export default customPieces;
