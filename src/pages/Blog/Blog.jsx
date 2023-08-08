import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle("Blog")
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card mb-4">
            <div className="card-header">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="card-body">
              <p className="card-text">
                An access token is a credential used to authenticate and authorize a user in a system. It is typically a JSON web token (JWT) that contains encoded information about the user and their permissions. Access tokens have a limited lifespan and are used to access protected resources or perform certain actions on behalf of the user.
                A refresh token is a long-lived token that is used to obtain a new access token when the current one expires. It is used to maintain user sessions and allows the user to stay logged in without needing to provide their credentials again.
                Access tokens should be stored on the client-side, typically in the browser's memory or local storage. They should be sent with each request to authenticate the user. Refresh tokens, on the other hand, should be securely stored on the server-side, as they have longer lifespans and need to be protected.
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              Compare SQL and NoSQL databases?
            </div>
            <div className="card-body">
              <p className="card-text">
                SQL (Structured Query Language) databases are relational databases that use tables and predefined schemas to store and organize data. They provide strong consistency, ACID (Atomicity, Consistency, Isolation, Durability) transactions, and support complex queries using SQL.
                NoSQL (Not only SQL) databases, on the other hand, are non-relational databases that store data in flexible, schema-less formats like key-value pairs, documents, graphs, or wide-column stores. They provide high scalability, flexible schemas, and eventual consistency. NoSQL databases are often used for handling large amounts of unstructured or semi-structured data.
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              What is Express.js? What is Nest.js?
            </div>
            <div className="card-body">
              <p className="card-text">

                Express.js is a minimal and flexible web application framework for Node.js. It provides a simple, yet powerful set of features for building web applications and APIs. Express.js is known for its lightweight nature and its ability to handle middleware, routing, and HTTP request/response handling efficiently.

                Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of decorators, dependency injection, and modular architecture. Nest.js is heavily inspired by Angular and provides a structured and opinionated approach to building back-end applications, making it suitable for large-scale projects.
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              What is MongoDB aggregate and how does it work?
            </div>
            <div className="card-body">
              <p className="card-text">
                MongoDB's aggregate is a powerful aggregation framework that allows for advanced data analysis and transformation operations on collections of documents. It provides a way to perform complex queries, grouping, filtering, and data transformations within the database.
                The aggregate pipeline in MongoDB consists of multiple stages, where each stage performs a specific operation on the data. Stages can include operations like $match for filtering documents, $group for grouping data, $project for shaping the output, and many more.
                By combining these stages in a pipeline, developers can define complex data processing logic and perform computations within the database, reducing the amount of data transferred over the network and improving performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
