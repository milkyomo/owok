import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Info from "./Info";
import MapleAdministrator from "../images/MapleAdministrator";

function InfoModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="InfoButton">
      <img
        src={MapleAdministrator}
        alt="Maple Administrator"
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Info onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default InfoModal;
