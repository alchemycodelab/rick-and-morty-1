import React, { Component } from 'react'

export default class CharacterItem extends Component {
    render() {
        return (
           
               <li className='characterItem'>
                   <h2 className='characterName'>{this.props.obj.character}</h2>
                   <img className='characterImage' src={this.props.obj.image} alt={this.props.obj.character}/>
                   <p className='species'>{this.props.obj.species}</p>
                   <p className='status'>{this.props.obj.status}</p>
               </li>
           
        )
    }
}
