import React from 'react';
import { Route } from 'react-router-dom'
import BookmarkContext from '../context/bookmark-context';

class DisplayBookInfo extends React.Component {
  
  // identBook() {
  //   const {id, bookId} = this.props;
  //   if (id === bookId) {
  //     return (
  //       <>
  //         <h1>sdfsdfsdf</h1>
  //         <h1>sdfsdfsdf</h1>
  //       </>
  //       )
  //   }
  // }

  identBook(context) {
    const findBookInfo = context.data.find(book => book.id === context.bookId)

    if (context.bookId === this.props.id)  {
      return (
        <>
          <p>{findBookInfo.kind}</p>
        </>
      )
    }
  }

  render() {
    return (
      <BookmarkContext.Consumer>
        {(context) => {
          return (
            <>
              {/* {this.identBook()} */}
              {this.identBook(context)}
            </>
          )
        }}

      </BookmarkContext.Consumer>
    )
  }
}

export default DisplayBookInfo;