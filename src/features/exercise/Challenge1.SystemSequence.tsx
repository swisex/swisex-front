import React from "react";
import Mermaid from "../../lib/Mermaid";

export default function SystemSequence() {
  const script = `
    ---
    title: System Architecture Sequence Diagram
    ---
    sequenceDiagram
      participant Customer as Customer
      participant MobileApp as Mobile App/Web Platform
      participant APIGateway as API Gateway
      participant Microservices as Microservices
      participant Database as Database
      Customer->>MobileApp: Sends Request
      MobileApp->>APIGateway: API Calls
      APIGateway->>Microservices: Routes
      Microservices->>Database: CRUD Operations
      Database-->>Microservices: Returns Data
      Microservices-->>APIGateway: Returns Data
      APIGateway-->>MobileApp: Returns Data
      MobileApp-->>Customer: Response
    `;

  return <Mermaid chart={script} />;
}
