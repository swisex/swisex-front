import React from "react";
import ReactMarkdown from "react-markdown";

const requirements = `
`;

export default function Challenge3() {
  return (
    <>
      <h1>Challenge 3</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements} />
      </details>
    </>
  );
}