import GithubApi from 'api/GithubApi';

// export const SEARCH = 'SEARCH';
// export const LOAD_STARRED_SUCCESS = 'LOAD_STARRED_SUCCESS';

export const types = {
  SEARCH: 'SEARCH',
  LOAD_STARRED_SUCCESS: 'LOAD_STARRED_SUCCESS'
}

export function search(filter) {
  return {
    type: types.SEARCH,
  	filter: filter
  };
}

export function loadStarredSuccess(starredData) {
  return {
    type: types.LOAD_STARRED_SUCCESS,
    starredData: starredData
  }
}

export function loadStarred(userName) {  
  return function(dispatch) {
    return GithubApi.getAllStarred(userName).then(res => {
      dispatch(loadStarredSuccess(res));
    }).catch(error => {
      throw(error);
    });
  };
}