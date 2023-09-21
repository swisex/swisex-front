import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import MadalView from "./Challenge4.ModalView";
import CloseIcon from "@material-ui/icons/Close";
import challenge4img from "./challenge4.png";
import "./challenge4.css";
// import CodeViewer from "./Challenge4.CoreViewer";

Modal.setAppElement("#root");

const requirements1 = `
Using an online tool like:
*	https://stackblitz.com/
*	https://codepen.io/
*	etc…
 
to design the following react component:
`;

const requirements2 = `
Notes:
*	it needs to load inside a modal view
*	filters & pagination are desired but not needed.
*	the submission does not need to match the UI styles, however, the closer it gets the better.
*	create and load mock data from a json file.
`;

const answer = `
_**Modal source will be posted on Stackblitz soon.**_
`;

function ModalButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button id="modalButton" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Challenge4 Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "50%",
            overflow: "auto",
            position: "relative",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <MadalView />
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </button>
      </Modal>
    </div>
  );
}

export default function Challenge4() {
  return (
    <>
      <h1>Challenge 4</h1>
      <details open>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements1} />
        <img
          style={{ width: "100%", height: "auto", maxWidth: "768px" }}
          src={challenge4img}
          alt="challenge 4"
        />
        <ReactMarkdown children={requirements2} />
      </details>
      <ReactMarkdown children={answer} />
      <ModalButton />
      {/* <CodeViewer
        repo={"swisex/swisex-front"}
        path={"/src/features/exercise/challenge4/Challenge4.ModalView.tsx"}
      /> */}
    </>
  );
}
