import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    // log caught error
    console.error('Boundary error caught', error, info);
  };

  render = () => {
    return this.state.hasError ? (
      <div>
        &#9888; An error has occured&nbsp;
        <button onClick={() => this.setState({ hasError: false })}>
          Return
        </button>
      </div>
    ) : (
      this.props.children
    );
  };
}

export default ErrorBoundary;
