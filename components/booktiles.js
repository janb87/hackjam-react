import React from 'react';

const BookTiles = (props) => {
  
  let className = 'gallery';

  if (props.isFilterVisible) {
    className += ' filter-is-visible';
  }

  return (
    <section className={ className }>
      { props.books.map(book => <li key={ book.title }><img src={ book.cover }/></li>) }
    </section>
  );
}

export default BookTiles
