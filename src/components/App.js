import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar'


class App extends React.Component{
    onSearchSubmit(term){
axios.get('https://api.unsplash.com/search/photos', {
params: {query: term},
headers: {
    Authorization: 
    'Client-ID d9126a95fc8e9c68c34d79693f8dab439d91bb08f38acc53a8067f14829605e3 '
}
})
    };
    render() {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        )
    }
}


export default App;

