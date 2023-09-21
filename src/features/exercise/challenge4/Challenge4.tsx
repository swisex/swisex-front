import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import MadalView from "./Challenge4.ModalView";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
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
      <button onClick={openModal}>Open Modal</button>
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
            width: "80%", // set the width
            height: "60%", // set the height
            overflow: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <MadalView />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default function Challenge4() {
  return (
    <>
      <h1>Challenge 4</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements1} />
        <img
          style={{ width: "100%", height: "auto", maxWidth: "768px" }}
          src="https://github.com/swisex/swisex-front/blob/master/src/features/exercise/challenge4.png?raw=true"
          alt="challenge 4"
        />
        <ReactMarkdown children={requirements2} />
      </details>
      <ModalButton />
    </>
  );
}
