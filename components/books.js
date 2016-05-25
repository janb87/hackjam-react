import React, { Component } from 'react';
import books from '../mocks/books';
import filters from '../mocks/filters';

let Books = Books => class extends Component {

    constructor() {
        super();
        this.search = this.search.bind(this);
        this.state = {
            books,
            filters,
        };
    }

    search(input) {
        console.log(input.target.value);
    }
    
    render() {
        return <Books/>;
    }

}

export default Books;
