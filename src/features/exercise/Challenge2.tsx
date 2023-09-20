import React from "react";
import ReactMarkdown from "react-markdown";
import TechGraph from "./Challenge2.TechGraph";
import SystemSequence from "./Challenge2.SystemSequence";

const senario = `
Design and construct a high-level digital solution(Frontend & Backend) that could be used to satisfy the requirements for LogiTech Limited, the code should be hosted in a public online repository.

Note: Working code is NOT expected, however, we do ask you to use the following stack:

*	NodeJS
*	Express
*	Typescript
*	Docker
*	React
*	Redux
*	axios
*	any other technology you consider necessary to deliver a high-quality solution.
`;

// const techComponents = `
// ## Technology Components

// The following technology components have been used to develop this solution:

// * **NodeJS:** Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
// * **Express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// * **Typescript:** TypeScript is an open-source language that builds on JavaScript by adding static type definitions.
// * **Docker:** Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
// * **React:** React is an open-source, front end, JavaScript library for building user interfaces or UI components.
// * **Redux:** Redux is an open-source JavaScript library for managing application state.
// * **Axios:** Axios is a promise-based HTTP client for the browser and Node.js.

// The component relationship flow chart is as follows:
// `;

const header = `
## Source Codes

All the source code for this project can be found in the Github repository linked below. The repository contains code for the front-end, built with React, and the back-end, which handles site rendering and functions as an API gateway, and microservices responding to the API calls. Additionally, it includes code for the microservice server, which interconnects with other components.

Please note that this source code was created specifically for demonstration purposes. As such, elements such as authentication, session management, and database integration have been intentionally excluded.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?style=for-the-badge&logo=github)](https://github.com/orgs/swisex/repositories)
`;

const techComponents = `
## Technology Stack

1. ### Web Application (Front-end)
- **React**: A JavaScript library for building user interfaces, providing a component-based architecture and efficient rendering.
- **Redux-Toolkit**: A predictable state container for JavaScript apps, enabling centralized state management and efficient data flow.
- **axios**: A popular HTTP client for making asynchronous requests to the server, allowing easy communication with the back-end.

2. ### API Gateway (Back-end)
- **NodeJS**: A runtime environment for executing JavaScript code on the server-side, providing a non-blocking and event-driven architecture.
- **Express**: A web application framework for NodeJS, simplifying the process of building robust and scalable web applications.
- **Static Sites Serving**: A feature provided by Express to serve static files, such as HTML, CSS, and JavaScript files, directly to the client.
- **axios**: Also used in the back-end to make HTTP requests to external services or microservices.

3. ### Microservices (Back-end)
- **Docker**: A platform for building, packaging, and distributing applications as lightweight, portable containers, ensuring consistency and reproducibility across different environments.
- **NodeJS**: Used for implementing microservices, providing a lightweight and efficient runtime environment for running server-side JavaScript code.
- **Express**: Used in the microservices for building RESTful APIs and handling HTTP requests and responses.

By utilizing these technology components, the system is designed to achieve a scalable, modular, and efficient architecture, allowing seamless communication between the customer, mobile app/web platform, API gateway, microservices, and the database.

It also leverages **Typescript** along with other technologies in the stack to improve code stability and maintainability.
`;

export default function Challenge1() {
  return (
    <>
      <h1>Challenge 2</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={senario} />
      </details>
      <ReactMarkdown children={header} />
      <h2> System Workflow </h2>
      <SystemSequence />
      <ReactMarkdown children={techComponents} />
      <TechGraph />
    </>
  );
}
