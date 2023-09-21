import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ERD from "./Challenge1.ERD";
import SystemFlowchart from "./Challenge1.SystemFlowchart";
import SolutionGraph from "./Challenge1.SolutionGraph";

const requirements = `
## Scenario

The organisation **LogiTech Limited** is a logistics New Zealand based organisation leader in the industry, as such, they have come to you as they want to innovate and disrupt their market with a brand new offering: **Logistics as a service**.

After several years in the market, they have spotted the top 5 pain points customers have to deal with when organising or booking the delivery of a package regardless of its destination (local or international), which are:

1. Customers have to queue on the phone for long period of times in order to reach an agent that could provide them with a quote for the package they’re wishing to deliver.
2. Customers have to fill long and detailed paper forms in order to request a courier to pick up a package.
3. Lack of visibility and understanding of where their package is through the delivery journey and whether it was delivered or not.
4. Phone call payments, customers often don’t like to give their credit card details over the phone.
5. Recurrent customers complain the service is expensive and there’s not loyalty program.

For this scenario, you have been asked to provide a digital solution that could solve all the issues explained above as well a mechanism to automatically deliver new features to customers.

At a bare minimum an infrastructure and database diagrams are needed, however the organisation would truly value as much details as possible in order to better understand how a digital solution would satisfy their customer’s needs.

Please spend no more than 2-3hrs on this exercise, you’re welcome to make your own assumptions proving you have provided them as part of your submission.
`;

const problems = `
## Problem Analysis

1. **Long phone queues:** Customers spend a considerable amount of time in phone queues to get a quote for their delivery.
2. **Paper forms:** The process involves filling out detailed paper forms to request courier pickup.
3. **Lack of transparency:** Customers have little visibility of their package's progress throughout the delivery journey.
4. **Phone call payments:** Customers are uncomfortable providing their credit card details over the phone.
5. **Lack of loyalty program:** Recurring customers have expressed dissatisfaction due to high service costs and the absence of a loyalty program.
`;

const solution = `
To address the current challenges and provide a seamless user experience, we propose a digital platform that incorporates the following features:

1. **Online Quotation System:** Customers can get an instant quote for their delivery online, eliminating the need for phone queues.
2. **Digital Form Submission:** Replace paper forms with a simplified digital form that customers can fill out to request courier pickup.
3. **Real-Time Tracking:** Provide customers with real-time updates about their package's location and delivery status.
4. **Secure Online Payments:** Integrate a secure online payment gateway to facilitate safe and easy payments.
5. **Loyalty Program:** Implement a loyalty program for recurring customers to incentivize them and enhance customer retention.
`;

const erd = `
## Entity Relationship Diagram

The Entity Relationship Diagram (ERD) of this system includes only the most basic functionalities necessary for the resolution of this task. The elements related to security, such as user authentication, sessions, and logs, have been omitted from this diagram.

This ERD, composed of tables for Users, Packages, Quotes, Delivery, Payments, and the LoyaltyProgram, organizes the important entities and their relationships within the system.
`;

const tableSchemes = `
## Database Table Schemes

1. **User** table: This table stores information about the users of the service, both senders and receivers. This would include details like user ID, name, email, phone number, and addresses.

    ~~~sql
    CREATE TABLE User (
        UserID INT PRIMARY KEY,
        Name VARCHAR(100),
        Email VARCHAR(100),
        PhoneNumber VARCHAR(15),
        Address VARCHAR(255)
    );
    ~~~

2. **Package** table: This table stores information about packages that need to be delivered. This would include details like package ID, sender ID, receiver ID, package weight, package dimensions, and package type.

    ~~~sql
    CREATE TABLE Package (
        PackageID INT PRIMARY KEY,
        SenderID INT,
        ReceiverID INT,
        Weight FLOAT,
        Dimensions VARCHAR(100),
        PackageType VARCHAR(100),
        FOREIGN KEY (SenderID) REFERENCES User(UserID),
        FOREIGN KEY (ReceiverID) REFERENCES User(UserID)
    );
    ~~~

3. **Quotes** table: This table will hold information about the quotes provided to users. This would include details like quote ID, user ID, package ID, and quote amount.

    ~~~sql
    CREATE TABLE Quotes (
      QuoteID INT Primary Key,
      UserID INT,
      PackageID INT,
      QuoteAmount,
      FOREIGN KEY (UserID) REFERENCES User(UserID),
      FOREIGN KEY (PackageID) REFERENCES Package(PackageID)
    ~~~

4. **Delivery** table: This table stores information about the delivery of each package. This would include details like delivery ID, package ID, pickup time, delivery time, delivery status, and tracking number.

    ~~~sql
    CREATE TABLE Delivery (
        DeliveryID INT PRIMARY KEY,
        PackageID INT,
        PickupTime DATETIME,
        DeliveryTime DATETIME,
        Status VARCHAR(50),
        TrackingNumber VARCHAR(50),
        FOREIGN KEY (PackageID) REFERENCES Package(PackageID)
    );
    ~~~

5. **Payment** table: This table stores information about payments made by users. This would include details like payment ID, user ID, payment method, payment amount, and payment date.

    ~~~sql
    CREATE TABLE Payment (
        PaymentID INT PRIMARY KEY,
        UserID INT,
        Method VARCHAR(50),
        Amount FLOAT,
        PaymentDate DATETIME,
        FOREIGN KEY (UserID) REFERENCES User(UserID)
    );
    ~~~

6. **LoyaltyProgram** table: This table stores information about the loyalty program and the points earned by each user. This would include details like user ID, points earned, and points redeemed.

    ~~~sql
    CREATE TABLE LoyaltyProgram (
        UserID INT PRIMARY KEY,
        PointsEarned INT,
        PointsRedeemed INT,
        FOREIGN KEY (UserID) REFERENCES User(UserID)
    );
    ~~~
`;

const systemArch = `
## System Architecture

The proposed system architecture is as follows:

1. **User:** The user interacts with the system through a web or mobile application.
2. **Mobile App/Web Platform:** The mobile app or web platform is the interface through which the user interacts with the system.
3. **API Gateway:** The API gateway is the entry point for all requests from the user. It routes requests to the appropriate microservice.
4. **Microservices:** The microservices are responsible for handling the business logic of the application. They communicate with the database to retrieve and store data.
5. **Database:** The database stores all the data required by the application.
`;

const otherArch = `
## Other Architectural Approaches 

When building microservices using Node.js, there are various methods for communication between the API Gateway and the microservices. The commonly used methods include HTTP/HTTPS, gRPC, and asynchronous message passing using Message Queues (MQ).

- **HTTP/HTTPS**: This is the most basic and widely used method. It exchanges data via RESTful APIs. Data is transmitted in the form of JSON, and each microservice possesses independent endpoints.

- **gRPC**: gRPC is a high-performance, open-source general RPC (Remote Procedure Call) framework developed by Google. It uses Protocol Buffers for data serialization in communication, which is faster and more efficient than transmitting data in JSON format.

- **Message Queues (MQ)**: This method communicates between microservices through asynchronous message passing. Message queues act as an intermediary that allows services to send and receive messages from each other. This method is useful for maintaining services independently and controlling service loads.
`;

export default function Challenge1() {
  return (
    <div>
      <h1>Challenge 1</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements} />
      </details>
      <ReactMarkdown children={problems} />
      <h2>Proposed Digital Solution</h2>
      <SolutionGraph />
      <ReactMarkdown children={solution} />
      <ReactMarkdown children={erd} />
      <ERD />
      <ReactMarkdown
        children={tableSchemes}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language="sql">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <ReactMarkdown children={systemArch} />
      <SystemFlowchart />
      <ReactMarkdown children={otherArch} />
    </div>
  );
}
