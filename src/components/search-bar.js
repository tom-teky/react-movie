import React,{Component} from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {searchText:"", placeHolder: 'Type a movie...'}
    }
    
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} placeholder={this.placeHolder} />
            </div>
        )
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;