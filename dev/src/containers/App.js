import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hello from 'components/Hello';
import ButtonGroup from 'components/ButtonGroup';
import Header from 'components/Header';
import GithubCard from 'components/GithubCard';

import GithubApi from 'api/GithubApi';

var fakeData = {
  title: 'reactstrap',
  description: 'Simple React Bootstrap 4 component',
  link: '#',
  updated_at: '2018-02-14T16:48:18Z'
}

class App extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        const increment = () => {
            this.setState({
                number: this.state.number + 1
            });
            setTimeout(increment, 1000);
        }
        increment();
      
      GithubApi.getAllStarred('hmu332233').then(function (res){
        console.log(res);
      });
    }
    
    render() {
      return (
        <div>
          <Header/>
          <div id="cards">
            <GithubCard starredItem={fakeData}/>
          </div>

        </div>
      );
    }
}


let mapStateToProps = (state) => {
    return {
        value: state.cards
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
