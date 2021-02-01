import React,{Component} from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {searchText:"", placeHolder: 'Type a movie...'}
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.placeHolder} />
                </div>
            </div>
        )
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;