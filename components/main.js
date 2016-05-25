import React, { Component } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';
import Menu from './menu';
import SidePanel from './sidepanel';
import BookTiles from './booktiles';

class Main extends Component {
  constructor() {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      books,
      filters,
      selectedCategory: 'All',
      searchQuery: ''
    };
  }

  closeSideBar() {
    this.setState({
      navClosed: false
    });
  }

  openSideBar() {
    this.setState({
      navClosed: true
    });
  }

  selectCategory(category) {
    this.updateFilter(category, this.state.searchQuery);
  }

  search(filter) {
    this.updateFilter(this.state.selectedCategory, filter);
  }

  updateFilter(selectedCategory, searchQuery) {
    this.setState({
      selectedCategory: selectedCategory,
      searchQuery: searchQuery,
      filters: filters.map(filter => {
        if (filter.category === selectedCategory) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
      books: this.filterBooks(selectedCategory === 'All' ? books : books.filter(book => {
        return book.category === selectedCategory;
      }), searchQuery),
    });
  }

  filterBooks(books, searchQuery) {
    let regex = new RegExp(`.*${searchQuery.toLowerCase().trim()}.*`, 'gi');
    
    return books.filter(book => {
      return book.title.match(regex);
    });
  }

  render() {
    const { books, filters, navClosed } = this.state;

    return (
      <main className="main-content">

        <Menu filters={filters} onTabSelected={this.selectCategory} />

        <BookTiles isFilterVisible={navClosed} books={books} />

        <SidePanel isFilterVisible={navClosed} onClose={this.closeSideBar} onSearch={this.search} />

        <a href="#0" className="filter-trigger" onClick={this.openSideBar}>Filters</a>
      </main>
    );
  }
}

export default Main;
