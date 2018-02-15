import { SEARCH } from '../actions';
import { combineReducers } from 'redux';

const cardsInitialState = {
    cards: [
      {
        title: 'reactstrap',
        description: 'Simple React Bootstrap 4 component',
        link: '#',
        updated_at: '2018-02-14T16:48:18Z'
      }
    ]
};

const cards = (state = cardsInitialState, action) => {
  switch(action.type) {
    case SEARCH:
      // TODO:: state를 걸러내기
      return state;
    default:
      return state;
  }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const App = combineReducers({
    cards,
    extra
});

export default App;
