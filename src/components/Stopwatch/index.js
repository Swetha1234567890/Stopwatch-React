// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerInSeconds: 0,
    isTimer: false,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimer: false, timerInSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimer: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimer: true})
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimer} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="background">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer"
              alt="stopwatch"
            />
            <p className="sub-heading">Timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="buttons-container">
            <button
              className="btn1"
              type="button"
              onClick={this.onStart}
              disabled={isTimer}
            >
              Start
            </button>
            <button className="btn2" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="btn3" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
