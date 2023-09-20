import React from "react";
import Mermaid from "../../lib/Mermaid";

export default function TechGraph() {
  const script = `
    ---
    title: Tech Stack Graph
    ---
    graph LR
      Customer[Customer] -->|Interacts With| React[React/Redux\\nFront-end]
      React -->|Calls API with| Axios[Axios]
      Axios -->|Routes to| Express[Express/Node.js\\nBack-end]
      Express -->|CRUD Operations| Database[fa:fa-database Database]
      Docker[Docker] -->|Packages| Express
    `;

  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>
    <Mermaid chart={script} />
    // </div>
  );
}
