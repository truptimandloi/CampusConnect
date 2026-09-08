import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen mesh-bg flex items-center justify-center p-6 text-white">
          <div className="glass-strong rounded-3xl p-8 max-w-lg w-full border border-red-500/30 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 text-red-400 mx-auto flex items-center justify-center text-2xl font-bold">
              ⚠️
            </div>
            <h2 className="text-xl font-bold">Application Notice</h2>
            <p className="text-xs text-gray-400 font-mono bg-black/40 p-3 rounded-xl text-left overflow-auto max-h-40">
              {this.state.error?.message || "Render issue encountered"}
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="gradient-bg px-5 py-2 rounded-xl text-xs font-semibold text-white hover:opacity-90"
              >
                Reload Page
              </button>
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.href = "/";
                }}
                className="glass px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10"
              >
                Go to Landing
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
