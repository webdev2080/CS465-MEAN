# Travlr

Travlr is a RESTful web application for vacation bookings and reviews. Travlr Getaways, has two userbases involving administrators and customers. The customer side was designed to be content-focused, needing a fast initial load time. The administrator side needed to be feature-focused as well as having a fast and responsive UE instead of a fast initial load time desired.

## The Project

The concept of this project was to design a working prototype of a full-stack web application using the MEAN stack and the MVC architectural pattern.

### Backend

Travlr uses Node.js and the Express framework for its web server, a NoSQL database called MongoDB and an object data modeling library called Mongoose.

### Frontend

The frontend that customers interact with uses a templating engine and Express.js so the server can dynamically generate HTML for requests. The administrators frontend is an Single-Page-Application delivered via Angular.

### Security

The API endpoints are secured using authentication and authorization schemes that utilize JSON web tokens. When the user's credentials are authenticated, a JWT is issued to their browser's local storage. On the backend, user passwords are stored using one-way encryption and are never stored in plaintext.

## The MEAN Stack

- **MongoDB** - NoSQL databases are known for their speed and flexibility over the more structured SQL relational databases. BSON and JSON are used to develop MongoDB code, which makes it a great candidate for a MEAN stack application which primarily uses JSON and JavaScript.
- **Express** - this is a Node.js framework that makes developing Node applications much easier. Express is used in combination with Handlebars to template and dynamically render HTML pages.
- **Angular** - this is the frontend framework that allows usage of SPAs. With this architecture, clients are sent JavaScript files with the first request and can then generate all the webpages without additional server requests. Angular SPA's put less work on the server and allow for a faster, more responsive user experience after the first web page initializes. One fault to this approach is that it will be hard for search engines to crawl the website, as well as the SPA approach requiring a slower initial page load, impacting the user's experience.
- **Node.js** - The backend framework that many modern developers use to create their web server. It is considered a solid foundation for building web applications on. JavaScript is the primary programming language used within Node and Express, making the MEAN stack easy to manipulate with only the knowledge of Javascript.

## Screenshots 

![Trips page](Screenshots/Postman_login.jpg)
![Add trip page](Screenshots/Postman_createTripWithJWT.jpg)


## CS-465 Course Specifics

JSON is considered a data transmission format while JavaScript is a programming language. JSON is used within both the frontend and backend development of the application by passing HTTP requests containing JSON bodies.

One of the most essential concepts in the development of this application was being able to secure the API endpoints. By doing so, users without authentication would not be able to access the applications database contents and desirable information. 

Full stack development is considered a valued and important skill to have within the technology industry. This project has influenced my understanding of client & server development, REST APIs, and how to secure web applications from unwanted guests.
