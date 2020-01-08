import React, { Component } from 'react';
import Contact from './Contact'

export class OrderOne extends Component {
    constructor(){
        super();

        this.state = {
          monsters : [
              { name: 'frank', id:1},
              { name: 'drack', id:2},
              { name: 'zom', id:3}
          ]
        }
    }

    render() {
        return (
            <div className='order'> 
            
                {this.state.monsters.map(monster =>(
                    <h1 key={monster.id}> {monster.name} </h1>
                    
                ))}
          
            
            </div>
        )
    }
}

export default OrderOne
