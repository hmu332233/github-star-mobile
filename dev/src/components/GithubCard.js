import React, {Component} from 'react';
import 'styles/components/GithubCard.css';

class GithubCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="github-card">
        <div className="github-card__body">
          <div className="github-card__body-contents">
            <h5 className="contents-title">
              <a href={this.props.starredItem.html_url} target="_blank">{this.props.starredItem.name}</a>
            </h5>
            <p>{this.props.starredItem.description}</p>
          </div>
        </div>
        <div className="github-card__footer">
          updated at: {this.props.starredItem.updated_at}
        </div>
      </div>
    );
  }
}
export default GithubCard;
