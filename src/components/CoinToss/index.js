import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClick = () => {
    this.setState(prev => ({total: prev.total + 1}))
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prev => ({
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prev.heads + 1,
      }))
    } else {
      this.setState(prev => ({
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prev.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, url} = this.state

    return (
      <div className="bg_container">
        <div className="small_container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p> Heads (or) Tails </p>
          <img src={url} className="image" alt="toss result" />
          <button type="button" onClick={this.onClick}>
            {' '}
            Toss Coin{' '}
          </button>
          <div className="result">
            <p> Total: {total}</p>
            <p> Heads: {heads}</p>
            <p> Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
