import React from 'react';

class SearchBar extends React.Component{

    //state for the input that is entered
state = { term: ''};

onFormSubmit = (event) => {
    event.preventDefault();
    //calling the function that was passed
    this.props.onSubmit(this.state.term)
}
    render(){
        return(
            //form and input 
            <div className= "ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type='text'  value ={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;