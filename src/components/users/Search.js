import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: '',
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
    }

    onSubmit = (e) =>  {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({text: ''});
        }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });
    

    render() {
        return (
            <div>
                <form  className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value='Search' placeholder="Serach Users..." className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search

