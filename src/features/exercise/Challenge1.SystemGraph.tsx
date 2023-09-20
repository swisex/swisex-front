import React from "react";
import Mermaid from "../../lib/Mermaid";

export default function SystemGraph() {
  const script = `
    ---
    title: System Architecture Graph
    ---
    graph LR
        Customer[Customer] -->|Requests| MobileApp[Mobile App/Web Platform]
        MobileApp -->|API Calls| APIGateway[API Gateway]
        APIGateway -->|Routes| Microservices[Microservices]
        Microservices -->|CRUD Operations| Database[Database]
        Database -->|Returns Data| Microservices
        Microservices -->|Returns Data| APIGateway
        APIGateway -->|Returns Data| MobileApp
        MobileApp -->|Response| Customer
    `;

  return <Mermaid chart={script} />;
}
