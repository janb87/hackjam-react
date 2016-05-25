import React, { Component } from 'react';


class Menu extends Component {

    constructor() {
        super();
        this.selectTab = this.selectTab.bind(this);
    }

    getFilterItems(filters) {
        return filters.map(filter => {
            return (<li key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) } style={{ display: 'inline-style' }}>
                <a className={filter.selected ? 'selected' : ''} href="#0">{filter.category}</a>
            </li>);
        });
    }

    render() {
        return (
            <div className="tab-filter-wrapper">
                <div className="tab-filter">
                    <ul>
                        <li className="placeholder">
                            <a data-type="all" href="#0">All</a>
                        </li>
                        {this.getFilterItems(this.props.filters) }
                    </ul>
                </div>
            </div>
        );
    }


    selectTab(category) {
        this.props.onTabSelected(category);
    }

}

export default Menu
