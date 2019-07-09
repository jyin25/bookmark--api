import React from 'react';
import './App.css';
import Header from './Header/Header'
import DisplayList from './DisplayList/DisplayList';
import { Link ,Route} from 'react-router-dom';
import DisplayBookInfo from './DisplayList/DisplayBookInfo';
import bookmarkContext from './context/bookmark-context';

class App extends React.Component {
  state = {
    filterType: 'all',
    printType: 'null',
    searchTerm: '',
    items: []
  }

  handleSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  handleFilter = (filter) => {
    this.setState({
      filterType: filter
    })
  }

  handlePrintType = (type) => {
    this.setState({
      printType: type
    })
  }

  handleApi = (e) => {
    const searchTerm = this.state.searchTerm;
    const printType = this.state.printType;
    const filterType = this.state.filterType;
    const key = 'AIzaSyAXEVvbBokUsydiqDT0FdsVqqUqDF6p0fY'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${printType}&printType=${filterType}&key=${key}`;
    const urlNoFilter = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${filterType}&key=${key}`;
    console.log(url)

    if (this.state.printType === 'null') {
      fetch(urlNoFilter)
      .then(response => {
        if(!response.ok) {
          alert('something is wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => this.setState({
        items: data.items || [],
        data}));
    } else {
      fetch(url)
      .then(response => {
        if(!response.ok) {
          alert('something is wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => 
          this.setState({
            items: data.items || [], //if no result then print empty array
            data
          }));
    }

  }

  bookId = (id) => {
    this.setState({
      bookId: id
    });
  }

  render() {
    
    console.log(this.state.data)
    return (
      <bookmarkContext.Provider value={{
        data: this.state.items,
        bookId: this.state.bookId,
        handleBookId: this.bookId
      }}>
        <div className="App">
          <Header 
            handleSearchTerm={(term) => this.handleSearchTerm(term)}
            handleFilter={(filter) => this.handleFilter(filter)}
            handlePrintType={(type) => this.handlePrintType(type)}
            handleApi = {(e) => this.handleApi(e)}/>
          {this.state.items.map(data => 
            <DisplayList 
              listData={data}
            />
          )}
        </div>
      </bookmarkContext.Provider>
    );
  }
}

export default App;
