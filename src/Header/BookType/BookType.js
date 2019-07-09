import React from 'react';

class BookType extends React.Component {
  render () {
    return (
      <>
        <fieldset>
          Print Type:
        <select onChange={(e) => this.props.handleFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="books">books</option>
          <option value="magazines">magazines</option>
        </select>
        </fieldset>
      </>
    )
  }
}

export default BookType;