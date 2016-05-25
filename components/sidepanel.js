import React, { Component } from 'react';


class SidePanel extends Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className={ this.props.isFilterVisible ? 'filter filter-is-visible' : 'filter' }>
                <form>
                    <div className="filter-block">
                        <h4>Search</h4>

                        <div className="filter-content">
                            <input type="search" placeholder="title, price..." onChange={ this.onChange }/>
                        </div>
                    </div>

                </form>
                <a href="#0" className="close" onClick={ this.props.onClose }>Close</a>
            </div>
        );
    }
    
    onChange(e) {
        this.search(e.target.value);
    }
    
    search(filter) {
        this.props.onSearch(filter);
    }
    
    

}

export default SidePanel
