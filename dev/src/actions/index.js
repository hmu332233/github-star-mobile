import GithubApi from 'api/GithubApi';

export const SEARCH = 'SEARCH';
export const LOAD_STARRED_SUCCESS = 'LOAD_STARRED_SUCCESS';

export function search(filter) {
  return {
    type: SEARCH,
  	filter: filter
  };
}

export function loadStarredSuccess(starredData) {
  return {
    type: LOAD_STARRED_SUCCESS,
    starredData: starredData
  }
}

export function loadStarred() {  
  return function(dispatch) {
    return GithubApi.getAllStarred('hmu332233').then(res => {
      dispatch(loadStarredSuccess(res));
    }).catch(error => {
      throw(error);
    });
  };
}