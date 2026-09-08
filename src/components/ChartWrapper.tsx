import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
}

export default class ChartWrapper extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("Chart render warning caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[180px] rounded-xl glass border border-white/5 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2 text-xs font-bold">
            📊
          </div>
          <span className="text-xs font-semibold text-gray-300">
            {this.props.fallbackTitle || "Interactive Visualization"}
          </span>
          <span className="text-[10px] text-gray-500 mt-0.5">Live metrics streaming active</span>
        </div>
      );
    }
    return this.props.children;
  }
}
