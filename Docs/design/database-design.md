# Database Design — Event Management System

MongoDB collections and their key fields.

## Users

| Field          | Type     | Description                           |
| -------------- | -------- | ------------------------------------- |
| `_id`          | ObjectId | Unique identifier                     |
| `name`         | String   | Full name of the user                 |
| `email`        | String   | Login email (unique)                  |
| `passwordHash` | String   | Bcrypt-hashed password                |
| `role`         | String   | `admin` | `organizer` | `participant` |
| `phone`        | String   | User phone number                     |
| `createdAt`    | Date     | Account creation timestamp            |

## Events

| Field         | Type     | Description                                        |
| ------------- | -------- | -------------------------------------------------- |
| `_id`         | ObjectId | Unique identifier                                  |
| `venueId`     | ObjectId | Reference to `Venues`                              |
| `vendorId`    | ObjectId | Reference to `Vendors`                             |
| `eventName`   | String   | Name of the event                                  |
| `category`    | String   | Event category                                     |
| `date`        | Date     | Event date                                         |
| `time`        | String   | Event time                                         |
| `description` | String   | Event description                                  |
| `capacity`    | Number   | Maximum number of participants                     |
| `status`      | String   | `upcoming` | `ongoing` | `completed` | `cancelled` |
| `createdAt`   | Date     | Event creation timestamp                           |

## Venues

| Field       | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `_id`       | ObjectId | Unique identifier        |
| `venueName` | String   | Name of the venue        |
| `location`  | String   | Venue location/address   |
| `capacity`  | Number   | Maximum venue capacity   |
| `price`     | Number   | Venue booking price      |
| `contact`   | String   | Venue contact number     |
| `createdAt` | Date     | Venue creation timestamp |

## Bookings

| Field         | Type     | Description                           |
| ------------- | -------- | ------------------------------------- |
| `_id`         | ObjectId | Unique identifier                     |
| `userId`      | ObjectId | Reference to `Users`                  |
| `eventId`     | ObjectId | Reference to `Events`                 |
| `bookingDate` | Date     | Date of booking                       |
| `quantity`    | Number   | Number of tickets booked              |
| `status`      | String   | `pending` | `confirmed` | `cancelled` |
| `createdAt`   | Date     | Booking creation timestamp            |

## Tickets

| Field              | Type     | Description                           |
| ------------------ | -------- | ------------------------------------- |
| `_id`              | ObjectId | Unique identifier                     |
| `eventId`          | ObjectId | Reference to `Events`                 |
| `ticketType`       | String   | Type of ticket                        |
| `price`            | Number   | Ticket price                          |
| `quantity`         | Number   | Total tickets                         |
| `availableTickets` | Number   | Number of tickets currently available |
| `createdAt`        | Date     | Ticket creation timestamp             |

## Payments

| Field           | Type     | Description                       |
| --------------- | -------- | --------------------------------- |
| `_id`           | ObjectId | Unique identifier                 |
| `bookingId`     | ObjectId | Reference to `Bookings`           |
| `amount`        | Number   | Total payment amount              |
| `paymentDate`   | Date     | Payment date                      |
| `paymentMethod` | String   | Payment method used               |
| `status`        | String   | `pending` | `paid` | `failed`     |
| `createdAt`     | Date     | Payment record creation timestamp |

## Vendors

| Field         | Type     | Description               |
| ------------- | -------- | ------------------------- |
| `_id`         | ObjectId | Unique identifier         |
| `vendorName`  | String   | Name of the vendor        |
| `serviceType` | String   | Type of event service     |
| `contact`     | String   | Vendor contact number     |
| `email`       | String   | Vendor email              |
| `address`     | String   | Vendor address            |
| `createdAt`   | Date     | Vendor creation timestamp |

## Notifications

| Field              | Type     | Description                     |
| ------------------ | -------- | ------------------------------- |
| `_id`              | ObjectId | Unique identifier               |
| `userId`           | ObjectId | Reference to `Users`            |
| `message`          | String   | Notification message            |
| `notificationType` | String   | Type of notification            |
| `date`             | Date     | Notification date               |
| `status`           | String   | `read` | `unread`               |
| `createdAt`        | Date     | Notification creation timestamp |
