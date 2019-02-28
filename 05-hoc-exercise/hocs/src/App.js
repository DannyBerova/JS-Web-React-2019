import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Article from './Components/Article/Article';
import withWarning from './Components/hocs/withWarning';
import ErrorBoundary from './Components/hocs/ErrorBoundary';
import BindingForm from './Components/BindingForm/BindingForm';

const ArticleWithWarning = withWarning(Article);
const FormWithWarning = withWarning(RegisterForm);
const NavWithWarning = withWarning(Navigation);

// const ArticleWithWarningAndError = withWarning(WithErrorHandling(Article));
// const FormWithWarningAndError = withWarning(WithErrorHandling(RegisterForm));
// const NavWithWarningAndError = withWarning(WithErrorHandling(Navigation));

class App extends Component {
  constructor(props) {
    super(props) 
    this.state= {
      hasWarn: true,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(data);

  }

  handleClick() {
    let hasWarn = this.state.hasWarn;
    this.setState({
      hasWarn: !hasWarn
    })
  }

  render() {
    let dependsOnClickRender = this.state.hasWarn ? (
      <Fragment>
        <ArticleWithWarning/>
        <FormWithWarning/>
        <NavWithWarning/>
      </Fragment>
    ) : (
      <Fragment>
        <Article/>
        <RegisterForm/>
        <Navigation/>
      </Fragment>
    )
    return (
      <section className="App">
        <ErrorBoundary>
        <h2>1.Toggle button to see diferent mode "normal/warning"!</h2>
          <button style={{color:"white", height:60+"px", width:200+"px", background:"red"}} onClick={this.handleClick}>Toggle Warn Test</button>
        <h2>2. Test with wellow buttons to throw error - won't throw in production:</h2>
        <h2>Run in production to test error view!</h2>
          {dependsOnClickRender}
          <h2>3. Two sets of Binding Form below (onSubmit() only logs state on console):</h2>
          <BindingForm onSubmit={this.onSubmit}>
              <input type="text" name="username" placeholder="Enter username here..."/>
              <input type="password" name="password" placeholder="Enter password here..."/>
              <input type="submit" value="Login"/>
          </BindingForm>
          <BindingForm onSubmit={this.onSubmit}>
              <input type="text" name="username" placeholder="Enter username here..."/>
              <input type="email" name="email" placeholder="Enter email here..."/>
              <input type="password" name="password" placeholder="Enter password here..."/>
              <input type="password" name="repeatPassword" placeholder="Repeat password here..."/>
              <input type="submit" value="Register"/>
          </BindingForm>
        </ErrorBoundary>
      </section>
    );
  }
}

export default App;
