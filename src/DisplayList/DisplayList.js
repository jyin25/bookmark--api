import React from 'react';
import './DisplayList.css'
import { Link,Route} from 'react-router-dom'
import DisplayBookInfo from './DisplayBookInfo';
import BookmarkContext from '../context/bookmark-context';

class DisplayList extends React.Component {

  saleInfo() {
    if (this.props.listData.saleInfo.saleability === 'FOR_SALE') {
      return <p>{this.props.listData.saleInfo.listPrice.amount} USD</p>
    } else {
      return <p></p>
    }
  }

  render() {
    const {volumeInfo, saleInfo, id} = this.props.listData

    
    return (
      <BookmarkContext.Consumer>
        {(context) => {
          return (
            <>
              <li>
                <Link to={`/bookInfo`}><img src={volumeInfo.imageLinks.smallThumbnail} onClick={() => context.handleBookId(id)}/></Link>
                <p>{volumeInfo.title}</p>
                <p>{volumeInfo.description || 'no description'}</p>
                {this.saleInfo()}
                {context.bookId && <DisplayBookInfo id={id}/>}
              </li>
            </>
          )
        }}

      </BookmarkContext.Consumer>
    )
  }
}

export default DisplayList;