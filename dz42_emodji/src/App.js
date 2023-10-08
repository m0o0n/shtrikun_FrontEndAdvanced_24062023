import './App.css';
import win from './win.gif'
import { Component } from 'react'
class App extends Component {
  state = {
    symbols: [
      {
        symbol: '😂',
        count: 0,
        id: 1
      },
      {
        symbol: '😭',
        count: 0,
        id: 2
      },
      {
        symbol: '😊',
        count: 0,
        id: 3
      },
      {
        symbol: '🥶',
        count: 0,
        id: 4
      },
    ],
    top: null,
    isShowTop: false
  }
  findWiner() {
    let arr = []
    let max = this.state.symbols[0]
    this.state.symbols.forEach((e) => {
      if (e.count > max.count) {
        max = e
        arr = [e]
      } else if (e.count === max.count) {
        arr = [...arr, e]
      }
    })
    return arr
  }
  handleVote = (id) => {
    this.setState(({ symbols }) => ({ symbols: symbols.map(e => e.id === id ? { ...e, count: e.count + 1 } : e) }))
  }
  handleShowWinner = () => {
    const winner = this.findWiner()
    this.setState({ top: winner, isShowTop: true })
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className='smiles'>
            {
              this.state.symbols.map(e => {
                return (
                  <div key={e.id}>
                    <span onClick={() => this.handleVote(e.id)}>{e.symbol}</span>
                    <span>{e.count}</span>
                  </div>
                )
              })
            }

          </div>
          <button onClick={() => this.handleShowWinner()}>Show winner</button>
        </div>
        {
          this.state.isShowTop
            ? <div className='winers'>
              <img src={win} alt="" />
              <span>
                {
                  this.state.top.length > 1
                    ? 'Here are several winners: '
                    : 'Totaly winner is :'
                }
              </span>
              {
              this.state.top.map(e => (
                <span key={e.id}>{e.symbol}</span>
              ))
              }
              
            </div>
            : null
        }


      </div>
    );
  }

}

export default App;
