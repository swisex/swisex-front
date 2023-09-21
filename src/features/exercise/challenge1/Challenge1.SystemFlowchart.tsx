import React from "react";
import Mermaid from "../../../lib/Mermaid";

export default function SystemFlowchart() {
  const script = `
    ---
    title: System Flowchart
    ---
    flowchart TD
      A[fa:fa-computer User] -->|Send Request| B(Web/Mobile App)
      B -->|API Call| C{API Gateway\\n1..n}
      C -->|Route| D[Auth\\nMicroservice]
      C -->|Route| E[Order\\nMicroservice]
      C -->|Route| F[Tracking\\nMicroservice]
      C -->|Route| G[Payment\\nMicroservice]
      C -->|Route| H[Layalty Program\\nMicroservice]
      D -->|CRUD Operations| I[fa:fa-database Database 1..n]
      E -->|CRUD Operations| I
      F -->|CRUD Operations| I
      G -->|CRUD Operations| I
      H -->|CRUD Operations| I
    `;

  return <Mermaid chart={script} />;
}
