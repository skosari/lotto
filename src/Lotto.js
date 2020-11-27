import React, {Component} from 'react';
import Ball from './Ball'
import './Lotto.css'

class Lotto extends Component {
  
  static defaultProps = {
    title: 'ballSpin',
    numBalls: 6,
    odds: 40
  }
  
  constructor(props){
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    }
  }

  generate(){
    this.setState(x => ({
      nums: x.nums.map(
        n => Math.floor(Math.random()*this.props.odds) + 1
      )
    }))      
  }

  handleClick = () => {
    this.generate()          
  }

  render(){
    return(
      <div className='Lotto'>
        <h3>{this.props.title}</h3>
        <div className='BallRow'>
        
        {this.state.nums.map(x => <Ball num={x} />)}

        </div>
        <button onClick={this.handleClick}>Play</button>
      </div>  
      )
  }
}

export default Lotto