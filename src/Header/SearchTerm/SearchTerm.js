import React from 'react';

class SearchTerm extends React.Component {
  render () {
    return (
      <>
        <legend>Search:</legend>
        <input required='required' type='text' onChange={(e) => this.props.handleSearchTerm(e.target.value)}></input>
        <button type='submit'>Search</button>
      </>
    )
  }
}

export default SearchTerm;