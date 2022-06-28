import './form.css';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'normal',
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onFocusHandler(event) {
    if (this.state.value === 'normal') {
      const name = event.target.name;
      if (name === 'name') {
        this.setState(() => ({
          selected1: true,
          selected2: false,
          selected3: false,
          selected4: false,
        }));
      } else if (name === 'email') {
        this.setState(() => ({
          selected1: false,
          selected2: true,
          selected3: false,
          selected4: false,
        }));
      } else if (name === 'address') {
        this.setState(() => ({
          selected1: false,
          selected2: false,
          selected3: true,
          selected4: false,
        }));
      } else if (name === 'phone') {
        this.setState(() => ({
          selected1: false,
          selected2: false,
          selected3: false,
          selected4: true,
        }));
      }
    } else if (this.state.value === 'except') {
      const name = event.target.name;
      if (name === 'name') {
        this.setState(() => ({
          selected1: false,
          selected2: true,
          selected3: true,
          selected4: true,
        }));
      } else if (name === 'email') {
        this.setState(() => ({
          selected1: true,
          selected2: false,
          selected3: true,
          selected4: true,
        }));
      } else if (name === 'address') {
        this.setState(() => ({
          selected1: true,
          selected2: true,
          selected3: false,
          selected4: true,
        }));
      } else if (name === 'phone') {
        this.setState(() => ({
          selected1: true,
          selected2: true,
          selected3: true,
          selected4: false,
        }));
      }
    } else if (this.state.value === 'random') {
      const r = Math.random() * 10;
      if (r < 1) {
        this.setState(() => ({
          selected1: true,
          selected2: false,
          selected3: false,
          selected4: false,
        }));
      } else if (r < 2) {
        this.setState(() => ({
          selected1: false,
          selected2: true,
          selected3: false,
          selected4: false,
        }));
      } else if (r < 3) {
        this.setState(() => ({
          selected1: false,
          selected2: false,
          selected3: true,
          selected4: false,
        }));
      } else if (r < 4) {
        this.setState(() => ({
          selected1: false,
          selected2: false,
          selected3: false,
          selected4: true,
        }));
      } else if (r < 5) {
        this.setState(() => ({
          selected1: true,
          selected2: true,
          selected3: false,
          selected4: false,
        }));
      } else if (r < 6) {
        this.setState(() => ({
          selected1: true,
          selected2: false,
          selected3: true,
          selected4: false,
        }));
      } else if (r < 7) {
        this.setState(() => ({
          selected1: true,
          selected2: false,
          selected3: false,
          selected4: true,
        }));
      } else if (r < 8) {
        this.setState(() => ({
          selected1: false,
          selected2: true,
          selected3: false,
          selected4: true,
        }));
      } else if (r < 9) {
        this.setState(() => ({
          selected1: false,
          selected2: false,
          selected3: true,
          selected4: true,
        }));
      } else if (r < 10) {
        this.setState(() => ({
          selected1: false,
          selected2: true,
          selected3: true,
          selected4: false,
        }));
      }
    }
  }

  onBlurHandler(event) {
    this.setState(() => ({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    }));
  }

  handleSubmit(event) {
    alert('Are you focused?');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="header">
          <p>Favorite Focus</p>
          <label className="formSelect">
            Pick your favorite algorithm:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="normal">Normal</option>
              <option value="except">Except your choice</option>
              <option value="random">Random</option>
            </select>
          </label>
        </div>
        <form onSubmit={this.handleSubmit} className="form">
          <div
            className={'inputForm ' + (this.state.selected1 ? 'focused' : '')}
          >
            <p>お名前</p>
            <input
              type="text"
              name="name"
              className="inputText"
              onFocus={this.onFocusHandler}
              onBlur={this.onBlurHandler}
            />
          </div>
          <div
            className={'inputForm ' + (this.state.selected2 ? 'focused' : '')}
          >
            <p>メールアドレス</p>
            <input
              type="text"
              name="email"
              className="inputText"
              onFocus={this.onFocusHandler}
              onBlur={this.onBlurHandler}
            />
          </div>
          <div
            className={'inputForm ' + (this.state.selected3 ? 'focused' : '')}
          >
            <p>住所</p>
            <input
              type="text"
              name="address"
              className="inputText"
              onFocus={this.onFocusHandler}
              onBlur={this.onBlurHandler}
            />
          </div>
          <div
            className={'inputForm ' + (this.state.selected4 ? 'focused' : '')}
          >
            <p>電話番号</p>
            <input
              type="text"
              name="phone"
              className="inputText"
              onFocus={this.onFocusHandler}
              onBlur={this.onBlurHandler}
            />
          </div>
          <div className="inputButton">
            送信
            <input type="submit" value="Submit" hidden />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
