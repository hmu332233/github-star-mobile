import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchText: ''
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState({
        searchText: ''
      });
      
      this.props.onSearch(function (data) {
        return data.name.toLowerCase().includes('');
      });
    }
  }
  
  onChangeText(e) {
    this.setState({
      searchText: e.target.value
    });

    this.props.onSearch(function (data) {
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
  }
  
  render() {
    return (
      <header className="d-flex justify-content-between" id="header">
        <div className="header__left">
          <h3 className="header__brand mb-0">search</h3>
        </div>
        <div className="header__right d-flex">
          <div className="input-group">
            <input type="text" className="form-control border-right-none" aria-label="Recipient's username" aria-describedby="basic-addon2" 
              value={this.state.searchText}
      	      onChange={this.onChangeText}
      	      onKeyDown={this.handleKeyDown}
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
