import React from "react";
import Mermaid from "../../../lib/Mermaid";

export default function CompDiagram() {
  const script = `
    ---
    title: Components Diagram
    ---
    graph TB
      A[CollaborationTool] -->B[LeftPanel]
      A -->C[TopPanel]
      A -->D[CentralPanel]
      B -->E[AddNewTaskButton]
      B -->F[Plan]
      B -->G[TaskList]
      B -->H[Projects]
      B -->I[Tags]
      C -->J[Backlog]
      C -->K[PriorityChart]
      C -->L[KanbanWorkflow]
      C -->M[SearchBar]
      C -->N[Share]
      D -->O[TaskStage]
      O -->P[TaskCard]
    `;

  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>
    <Mermaid chart={script} />
    // </div>
  );
}
