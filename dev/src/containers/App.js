import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import GithubCard from 'components/GithubCard';
import { search, loadStarred } from '../actions';

class App extends Component {
    constructor(props) {
      super(props);
      this.props.loadStarred(this.props.userName);
    }
    render() {
      var githubCards = this.props.cards.map(function (card) {
        return (
          <GithubCard starredItem={card} key={card.name}/>
        );
      });
      return (
        <div>
          <Header onSearch={this.props.onSearch}/>
          <div id="cards">
            {githubCards}
          </div>
        </div>
      );
    }
}


let mapStateToProps = (state, ownProps) => {
  return {
    userName: ownProps.match.params.userName,
    cards: state.cards.data
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (filter) => dispatch(search(filter)),
    loadStarred: (userName) => dispatch(loadStarred(userName))
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
