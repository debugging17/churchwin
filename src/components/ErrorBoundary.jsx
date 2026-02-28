import { Component } from "react";

/**
 * ErrorBoundary
 *
 * Catches render errors from any slide or component in the tree.
 * Prevents a single slide crash from blanking the entire deck.
 */
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // In production, feed to a logging service here (e.g. Sentry)
        if (import.meta.env.DEV) {
            console.error("[ErrorBoundary]", error, info.componentStack);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        minHeight: "100vh",
                        background: "linear-gradient(135deg, #012787 0%, #010f3d 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Montserrat', 'Inter', sans-serif",
                        color: "#ffffff",
                        textAlign: "center",
                        padding: "2rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "clamp(3rem, 10vw, 6rem)",
                            fontWeight: 800,
                            marginBottom: "1rem",
                            background: "linear-gradient(135deg, #ffffff 40%, #ff6a00 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Oops
                    </div>
                    <p
                        style={{
                            fontSize: "1rem",
                            opacity: 0.6,
                            maxWidth: "400px",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                        }}
                    >
                        Something went wrong rendering this slide.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        style={{
                            padding: "0.75rem 2rem",
                            background: "linear-gradient(135deg, #ff6a00, #ff8c40)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            letterSpacing: "0.05em",
                        }}
                    >
                        TRY AGAIN
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
