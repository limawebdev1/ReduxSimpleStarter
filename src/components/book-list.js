import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick = {() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
//this state is referring to application state
//books in props gets mapped to appliation state.books from the reducer
function mapStateToProps(state){
  return {
    books: state.books
  }
}
//whatever is returned gets mapped to props as well
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
