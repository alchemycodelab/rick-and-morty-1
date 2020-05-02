import React, { Component } from 'react';
import request from 'superagent';
import CharacterItem from './CharacterItem.js';


export default class ListPage extends Component {
    state = {
      characters: [],
      searchQuery: '',
      page: 1,
      info: {}
    }


    async componentDidMount(){
      const searchParams = new URLSearchParams(window.location.search);
      const query = searchParams.get('search');

      this.setState( {searchQuery: query});
      
      if (query){
        let page = 1;
        if (searchParams.get('page')){
          page = searchParams.get('page');
        }
      const response = await request.get(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`)
      const results = response.body.results;
      const info = response.body.info;
      this.setState({ characters: results, info: info })  
    }
    }

    handleChange = (e) => {
      const value = e.target.value
      this.setState({searchQuery: value})
    }

    handleClick = async () => {
      const response = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`)
      const results = response.body.results;
      const info = response.body.info;
      this.setState({ characters: results, info: info })
    }

    routeToNextPage = async () => {
      const nextPageNumber = this.state.page + 1;  
      this.setState({ page: nextPageNumber }) 
    
     const response = await request.get(this.state.info.next);
     const results = response.body.results;
     const info = response.body.info;
     this.setState({ characters: results, info: info })

    }

    routeToPreviousPage = async () => {
      const previousPageNumber = this.state.page - 1;  
      this.setState({ page: previousPageNumber }) 
    
     const response = await request.get(this.state.info.prev);
     const results = response.body.results;
     const info = response.body.info;
     this.setState({ characters: results, info: info })

    }

    render() {
      console.log('hey', this.props)

        return (
            <div>
              <input value= {this.state.searchQuery}className='listPageInput' onChange={this.handleChange} placeholder='Search for a Character'/>
              <button onClick={this.handleClick}>Search</button>
              <ul>
                {
                  this.state.characters.map((door) => {
                    return <CharacterItem obj={door}/>
                  })  
                }
              </ul>
              {this.state.info.prev && <button onClick={this.routeToPreviousPage}>Previous</button>}
              
              {this.state.info.next && <button onClick={this.routeToNextPage}>Next</button>}
             

            </div>
        )
    }
}
