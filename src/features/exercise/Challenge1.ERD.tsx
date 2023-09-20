import React from "react";
import Mermaid from "../../lib/Mermaid";

export default function ERD() {
  const script = `
    ---
    title: Entity Relationship Diagram
    ---
    erDiagram
        USER ||--o{ PACKAGE : "has"
        USER ||--o{ QUOTES : "has"
        USER ||--o{ PAYMENT : "has"
        USER ||--o{ LOYALTYPROGRAM : "has"
        PACKAGE ||--o{ DELIVERY : "has"
        PACKAGE ||--o{ QUOTES : "has"
        
        USER {
            int UserID
            string Name
            string Email
            string PhoneNumber
            string Address
        }
        
        PACKAGE {
            int PackageID
            int SenderID
            int ReceiverID
            float Weight
            string Dimensions
            string PackageType
        }
        
        QUOTES {
            int QuoteID
            int UserID
            int PackageID
            float QuoteAmount
        }
        
        DELIVERY {
            int DeliveryID
            int PackageID
            datetime PickupTime
            datetime DeliveryTime
            string Status
            string TrackingNumber
        }
        
        PAYMENT {
            int PaymentID
            int UserID
            string Method
            float Amount
            datetime PaymentDate
        }
        
        LOYALTYPROGRAM {
            int UserID
            int PointsEarned
            int PointsRedeemed
        }
    `;

  return <Mermaid chart={script} />;
}
