import React from "react";

interface FunctionalTimerProps {
  timerStartValue: number;
}

interface FunctionalTimerState {
  countdownValue: number;
}

class FunctionalTimer extends React.Component<
  FunctionalTimerProps,
  FunctionalTimerState
> {
  intervalId: NodeJS.Timeout | null = null;

  constructor(props: FunctionalTimerProps) {
    super(props);
    this.state = {
      countdownValue: this.props.timerStartValue,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdownValue <= 0) {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
          return { countdownValue: 0 };
        }
        return { countdownValue: prevState.countdownValue - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return <p>Countdown from: {this.state.countdownValue}</p>;
  }
}

export default FunctionalTimer;
