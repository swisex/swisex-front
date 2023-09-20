import React from "react";
import ReactMarkdown from "react-markdown";

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

export default function Challenge4() {
  return (
    <>
      <h1>Challenge 4</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements1} />
        <img
          style={{ width: "100%", height: "auto", maxWidth: "1024px" }}
          src="https://github.com/swisex/swisex-front/blob/9e8b3e827acf9f5dddf68fb7ad35aa84c56da68a/src/features/exercise/challenge3.png?raw=true"
          alt="challenge 4"
        />
        <ReactMarkdown children={requirements2} />
      </details>
    </>
  );
}
