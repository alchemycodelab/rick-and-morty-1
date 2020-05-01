import React, { Component } from 'react';
import request from 'superagent';
import CharacterItem from './CharacterItem.js';


export default class ListPage extends Component {
    state = {
      characters: [],
      searchQuery: '',
    }

    handleChange = (e) => {
      const value = e.target.value
      this.setState({searchQuery: value})
    }

    handleClick = async () => {
      const { 
        body: { 
            results
          } 
      } = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`)

      this.setState({ characters: results})
    }

    render() {
      
        return (
            <div>
              <input className='listPageInput' onChange={this.handleChange} placeholder='Search for a Character'/>
              <button onClick={this.handleClick}>Search</button>
              <ul>
                {
                  this.state.characters.map((door) => {
                    return <CharacterItem obj={door}/>
                  })  
                }
              </ul>
            </div>
        )
    }
}
