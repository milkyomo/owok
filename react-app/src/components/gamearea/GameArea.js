import React from "react";
// import { useSelector } from "react-redux";
import Board from "./Board";
import InfoModal from "../info/InfoModal";
// import Chat from "./Chat";

import "./GameArea.css";

// import { io } from 'socket.io-client';
// let socket;

const GameArea = () => {
  // const currentGame =
  // const sessionUser = useSelector((state) => state.session.user);
  // const sessionUserId = sessionUser.id;
  return (
    <div className="GameAreaContainer">
      <h1>MATCH START!</h1>
      <Board />
      <InfoModal />
    </div>
  );
};

export default GameArea;
