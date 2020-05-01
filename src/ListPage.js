import React, { Component } from 'react'
import data from './data.js'

export default class ListPage extends Component {
    state = {
      data: data.results 
    }

    render() {
        return (
            <div>
                {
                  this.state.data.map((character) => {
                    return <div>
                        {character.name} happens to be {character.status}
                        <img src={character.image} />
                        </div>
                  })  
                }
            </div>
        )
    }
}
