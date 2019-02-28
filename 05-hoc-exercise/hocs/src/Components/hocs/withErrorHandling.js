import React from 'react';

// This function takes a component...
function WithErrorHandling(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }

      }

      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
        return <h1>Something went wrong.</h1>;
      }

  
      render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
        return  this.props.children;
      }
    };
  }

  export default WithErrorHandling;