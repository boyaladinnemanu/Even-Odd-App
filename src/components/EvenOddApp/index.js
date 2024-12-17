// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, even: 'Count is Even'}
  randomnum = () => Math.floor(Math.random() * 100)
  Increase = () => {
    this.setState(prevState => ({count: prevState.count + this.randomnum()}))
  }

  render() {
    const {count} = this.state
    const even = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="main-bg">
        <h1 className="heading">Count {count}</h1>
        <p className="para">{even}</p>
        <button className="cust-btn" type="button" onClick={this.Increase}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
