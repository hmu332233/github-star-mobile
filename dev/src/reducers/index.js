import { types } from '../actions';
import { combineReducers } from 'redux';

const cardsInitialState = {
    data: [
      {
        name: 'reactstrap',
        description: 'Simple React Bootstrap 4 component',
        html_url: '#',
        updated_at: '2018-02-14T16:48:18Z'
      }
    ],
  	originalData: [
      {
        name: 'reactstrap',
        description: 'Simple React Bootstrap 4 component',
        html_url: '#',
        updated_at: '2018-02-14T16:48:18Z'
      }
    ]
};

const cards = (state = cardsInitialState, action) => {
  switch(action.type) {
    case types.LOAD_STARRED_SUCCESS:
      return Object.assign({}, state, {
        originalData: action.starredData,
        data: action.starredData
      });
    case types.SEARCH:
      var filteredData = state.originalData.filter(action.filter);
      return Object.assign({}, state, {
        data: filteredData
      });
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
