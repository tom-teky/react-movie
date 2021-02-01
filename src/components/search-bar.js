import React,{Component} from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {searchText:"", placeHolder: 'Type a movie...'}
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-md-8 input-group">
                    <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.placeHolder} />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Search</button>
                    </span>
                </div>
            </div>
        )
    }

    handleOnClick(event){
        this.props.callback(this.state.searchText)
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;