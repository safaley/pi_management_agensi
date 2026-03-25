import React, { Component } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Something went wrong
          </h2>
          <p className="mb-6 text-gray-500">
            Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue-hover transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
