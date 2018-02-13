import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchText: ''
    }
    
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  onChangeText(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  
  render() {
    return (
      <header className="d-flex justify-content-between" id="header">
        <div className="header__left">
          <h3 className="header__brand mb-0">star</h3>
        </div>
        <div className="header__right d-flex">
          <div className="input-group">
            <input type="text" className="form-control border-right-none" aria-label="Recipient's username" aria-describedby="basic-addon2" 
              value={this.state.searchText}
      	      onChange={this.onChangeText}
            />
            <div className="input-group-append">
              <span className="input-group-text bg-white" id="basic-addon2">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
