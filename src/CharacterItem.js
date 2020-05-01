import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterItem extends Component {
    render() {
        return (
           
           <li className='characterItem'>
                   <h2 className='characterName'>{this.props.obj.character}</h2>
                   <Link to={`/character/${this.props.obj.name}`}>
                   <img className='characterImage' src={this.props.obj.image} alt={this.props.obj.character}/>
                   </Link>
                   <p className='species'>{this.props.obj.species}</p>
                   <p className='status'>{this.props.obj.status}</p>
               </li>
           
               
        )
    }
}
