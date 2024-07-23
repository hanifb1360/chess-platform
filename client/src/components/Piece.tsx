import React from "react";
import { ChessPiece } from "../types/chess";

interface PieceProps {
  piece: ChessPiece;
  position: string;
  onMove: (source: string, target: string) => void;
}

const Piece: React.FC<PieceProps> = ({ piece, position, onMove }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", position);
  };

  const handleDrop = (e: React.DragEvent) => {
    const source = e.dataTransfer.getData("text/plain");
    onMove(source, position);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(/path/to/${piece.color}-${piece.type}.svg)`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Piece;
