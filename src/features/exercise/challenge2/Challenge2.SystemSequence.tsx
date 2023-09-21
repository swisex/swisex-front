import React from "react";
import Mermaid from "../../../lib/Mermaid";

export default function SystemSequence() {
  const script = `
    ---
    title: System Sequence Diagram
    ---
    sequenceDiagram
      participant User as User
      participant Front as Swisex-Front (React Web)
      participant APIGateway as Swisex-Back (API Gateway)
      participant Microservices as Swisex-Micro (Microservices)
      participant Database as Database
      User->>Front: Sends Request (ping)
      Front->>APIGateway: API Calls
      APIGateway->>Microservices: Routes
      Microservices->>Database: CRUD Operations
      Database-->>Microservices: Returns Data
      Microservices-->>APIGateway: Returns Data (pong)
      APIGateway-->>Front: Returns Data (pong)
      Front-->>User: Response (pong)
    `;

  return <Mermaid chart={script} />;
}
