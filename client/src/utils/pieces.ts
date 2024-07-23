import React from "react";

const pieceToImage: Record<string, string> = {
  wP: "/src/images/wP.svg",
  wR: "/src/images/wR.svg",
  wN: "/src/images/wN.svg",
  wB: "/src/images/wB.svg",
  wQ: "/src/images/wQ.svg",
  wK: "/src/images/wK.svg",
  bP: "/src/images/bP.svg",
  bR: "/src/images/bR.svg",
  bN: "/src/images/bN.svg",
  bB: "/src/images/bB.svg",
  bQ: "/src/images/bQ.svg",
  bK: "/src/images/bK.svg",
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
