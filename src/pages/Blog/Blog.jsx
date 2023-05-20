import React from 'react';

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card mb-4">
            <div className="card-header">
              Tell us the differences between uncontrolled and controlled components.
            </div>
            <div className="card-body">
              <p className="card-text">
                Uncontrolled components:
                <ul>
                  <li>Manage their own state and behavior internally</li>
                  <li>Are self-contained and have no dependencies on other parts of the application</li>
                  <li>Can be used in various contexts without modification</li>
                  <li>Useful for simple, standalone functionality</li>
                </ul>
                Controlled components:
                <ul>
                  <li>Rely on external state management and behavior control</li>
                  <li>Receive their state and behavior as props from a parent component</li>
                  <li>Communicate changes back to the parent component through callbacks</li>
                  <li>More flexible and customizable than uncontrolled components</li>
                  <li>Suitable for complex forms, data grids, and interactive visualizations</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              What is a custom hook, and why will you create a custom hook?
            </div>
            <div className="card-body">
              <p className="card-text">
                A custom hook is a reusable JavaScript function in a React application that allows you to share logic across multiple components. You might create a custom hook to avoid code duplication, abstract complex logic, or encapsulate stateful logic that needs to be shared between multiple components.
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              How to validate React props using PropTypes?
            </div>
            <div className="card-body">
              <p className="card-text">
                To validate React props using PropTypes, import PropTypes from the 'prop-types' package, add a 'propTypes' object to your component's definition that specifies the expected types and shapes of the props, use your component and pass in the props, and React will validate that the props match the expected types and shapes. If a prop is missing or has an unexpected type or shape, React will log a warning in the console. Make sure to remove or disable PropTypes checks in production builds.
              </p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              Tell us the difference between Node.js and Express.js.
            </div>
            <div className="card-body">
              <p className="card-text">
                Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a framework for building web applications in Node.js.
                <br /><br />
                Node.js provides the foundation for building server-side applications in JavaScript, while Express.js builds on top of Node.js by providing an easy-to-use set of features for building web applications.
                <br /><br />
                Node.js provides core modules for handling low-level tasks such as file system access and network communication, while Express.js provides higher-level abstractions for tasks such as routing, middleware, and template rendering.
                <br /><br />
                Node.js can be used with other web frameworks besides Express.js, while Express.js is specifically designed for building web applications in Node.js.
                <br /><br />
                Node.js is more general-purpose and can be used for a variety of applications, while Express.js is focused on building web applications and provides a streamlined set of features for that purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
