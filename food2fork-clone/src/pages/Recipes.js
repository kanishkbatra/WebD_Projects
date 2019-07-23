import React, { Component, Fragment } from 'react'
import Recipelist from '../components/Recipelist';
import Search from '../components/Search';
import {recipeData} from '../data/tempList';

export default class Recipes extends Component {
    constructor(props){
        super(props)
    }

    state={
        recipes:recipeData,
        search:""
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Search search={this.state.search} handleChange={this.handleChange}  handleSubmit={this.handleSubmit}/>
                <Recipelist recipes={this.state.recipes}/>
            </Fragment>
        )
    }
}