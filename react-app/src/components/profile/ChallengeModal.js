import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Challenge from "./Challenge";
import { createGame } from "../../store/game";

function ChallengeModal({ sessionUser, user }) {
  const [showModal, setShowModal] = useState(false);

  // const handleClick = () => {
  //   const game = {};
  // };
  return (
    <div className="ProfileChallengeButton">
      <button onClick={() => setShowModal(true)}>Challenge</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Challenge
            onClose={() => setShowModal(false)}
            sessionUser={sessionUser}
            user={user}
          />
        </Modal>
      )}
    </div>
  );
}

export default ChallengeModal;
