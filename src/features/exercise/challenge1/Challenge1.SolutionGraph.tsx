import React from "react";
import Mermaid from "../../../lib/Mermaid";

export default function SolutionGraph() {
  const script = `
    graph TB
      subgraph Problem Analysis
          A[Long Phone Queues]
          B[Paper Forms]
          C[Lack of Transparency]
          D[Phone Call Payments]
          E[Lack of Loyalty Program]
      end

      subgraph Proposed Digital Solution
          A1[Online Quotation System]
          B1[Digital Form Submission]
          C1[Real-Time Tracking]
          D1[Secure Online Payments]
          E1[Loyalty Program]
      end

      A -->|Addressed By| A1
      B -->|Addressed By| B1
      C -->|Addressed By| C1
      D -->|Addressed By| D1
      E -->|Addressed By| E1
    `;

  return <Mermaid chart={script} />;
}
