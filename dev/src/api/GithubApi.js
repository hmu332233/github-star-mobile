class GithubApi {  
  static getAllStarred(userID) {
    return fetch(`https://api.github.com/users/${userID}/starred?per_page=100`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default GithubApi;