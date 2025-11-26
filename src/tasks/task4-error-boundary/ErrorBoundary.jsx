import { Component } from 'react';
import { Button } from '@components';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.error(error.message);
    return { hasError: true };
  }
  resetHandler = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className='mt-10 p-6 border border-indigo-700 rounded-lg text-center'>
          <p className='mb-2'>Something went wrong</p>
          <Button onClick={this.resetHandler}>Try again</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
