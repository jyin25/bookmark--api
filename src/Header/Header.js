import React from 'react';
import BookType from './BookType/BookType';
import PrintType from './PrintType/PrintType';
import SearchTerm from './SearchTerm/SearchTerm';


class Header extends React.Component {
  
  submitApi = (e) => {
    e.preventDefault();
    this.props.handleApi(e);
  }


  render() {
    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <form onSubmit={(e) => this.submitApi(e)}>
          <SearchTerm handleSearchTerm={this.props.handleSearchTerm}/>
          <div>
            <PrintType handlePrintType={this.props.handlePrintType}/>
            <BookType handleFilter={this.props.handleFilter}/>
          </div>
        </form>
      </>
    )
  }
}

export default Header;