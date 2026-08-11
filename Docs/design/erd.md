# Entity Relationship Diagram — Event Management System

```mermaid
erDiagram
    USERS ||--o{ BOOKINGS : "makes"
    EVENTS ||--o{ BOOKINGS : "has"
    VENUES ||--o{ EVENTS : "hosts"
    VENDORS ||--o{ EVENTS : "provides"
    EVENTS ||--o{ TICKETS : "offers"
    BOOKINGS ||--o| PAYMENTS : "has"
    USERS ||--o{ NOTIFICATIONS : "receives"

    USERS {
        ObjectId _id
        string name
        string email
        string passwordHash
        string role
        string phone
        date createdAt
    }

    EVENTS {
        ObjectId _id
        ObjectId venueId
        ObjectId vendorId
        string eventName
        string category
        date date
        string time
        string description
        int capacity
        string status
        date createdAt
    }

    VENUES {
        ObjectId _id
        string venueName
        string location
        int capacity
        number price
        string contact
        date createdAt
    }

    BOOKINGS {
        ObjectId _id
        ObjectId userId
        ObjectId eventId
        date bookingDate
        int quantity
        string status
        date createdAt
    }

    TICKETS {
        ObjectId _id
        ObjectId eventId
        string ticketType
        number price
        int quantity
        int availableTickets
        date createdAt
    }

    PAYMENTS {
        ObjectId _id
        ObjectId bookingId
        number amount
        date paymentDate
        string paymentMethod
        string status
        date createdAt
    }

    VENDORS {
        ObjectId _id
        string vendorName
        string serviceType
        string contact
        string email
        string address
        date createdAt
    }

    NOTIFICATIONS {
        ObjectId _id
        ObjectId userId
        string message
        string notificationType
        date date
        string status
        date createdAt
    }
```

## Relationship Summary

| **Relationship**     | **Cardinality** |
| -------------------- | --------------: |
| User → Bookings      |           1 : N |
| Event → Bookings     |           1 : N |
| Venue → Events       |           1 : N |
| Vendor → Events      |           1 : N |
| Event → Tickets      |           1 : N |
| Booking → Payment    |           1 : 1 |
| User → Notifications |           1 : N |
