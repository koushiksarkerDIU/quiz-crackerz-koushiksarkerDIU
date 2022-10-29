import React from "react";

const Blog = () => {
  return (
    <div className="container w-9/12 mx-auto">
      <div className="my-8">
        <h2 className="uppercase font-bold text-2xl my-3">
          What is the purpose of react router?
        </h2>
        <p>
          React Router is used to define multiple routes in the application.
          When a user types a specific URL into the browser, and if this URL
          path matches any 'route' inside the router file, the user will be
          redirected to that particular route.React Router plays an important
          role to display multiple views in a single page application. Without
          React Router, it is not possible to display multiple views in React
          applications. Most of the social media websites like Facebook,
          Instagram uses React Router for rendering multiple views
        </p>
      </div>
      <div className="my-8">
        <h2 className="uppercase font-bold text-2xl my-3">
          How does context api work in react
        </h2>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux. React.createContext() is all you need.
          It returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state. More information can be found on React's documentation
          page
        </p>
      </div>
      <div className="my-8">
        <h2 className="uppercase font-bold text-2xl my-3">
          What is useRef hook in react?
        </h2>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly. useRef
          returns a mutable ref object whose .current property is initialized to
          the passed argument (initialValue). The returned object will persist
          for the full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
