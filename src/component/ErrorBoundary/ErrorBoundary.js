import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <Alert variant="danger">
                    <Alert.Heading>Something went wrong.</Alert.Heading>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </Alert>
            )
        } else {
            return this.props.children;
        }
    }
}
