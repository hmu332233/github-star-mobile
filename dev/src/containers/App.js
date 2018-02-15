import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hello from 'components/Hello';
import ButtonGroup from 'components/ButtonGroup';
import Header from 'components/Header';
import GithubCard from 'components/GithubCard';

class App extends Component {
    
    render() {
      var githubCards = this.props.cards.map(function (card) {
        return (
          <GithubCard starredItem={card} key={card.name}/>
        );
      });
      return (
        <div>
          <Header/>
          <div id="cards">
            {githubCards}
          </div>
        </div>
      );
    }
}


let mapStateToProps = (state) => {
  return {
    cards: state.cards.data
  };
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
