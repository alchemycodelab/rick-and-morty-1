import React, { Component } from 'react'
import request from 'superagent'
import CharacterItem from './CharacterItem'

export default class DetailPage extends Component {
    state = {
        character: {},
    }

    async componentDidMount() {
        const fetchedData = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.props.match.params.name}`)
        console.log(fetchedData);
        this.setState({ character: fetchedData.body.results[0] })
    }
    render() {
        
        return (
            <div>
              <CharacterItem obj={this.state.character} />
            </div>
        )
    }
}
