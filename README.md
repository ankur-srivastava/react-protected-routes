# react-protected-routes

Example code on how to use protected routes in React.

Packages used - react, react-router-dom

Here one of the links (/account) is protected. Once the user logs in then the page is visible.

A custom hook has been added to store the auth state and it also has the login and logout functions.

Steps to implement Protected Route

1. Use <Link> to add links to all the pages.
2. Use <Switch> to route the requests to different components.
3. To identify if user is logged in you need a variable like isAuth. Use the useState React hook to store value of this variable.
4. When user logs in the isAuth variable is set to true. This allows access to protected routes.
5. If the value of isAuth is false then redirect the user to login or home page. Use <Redirect> tag for the same.
