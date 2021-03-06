import React, { Component } from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import daysToGo from '../lib/daysToGo';

import Candidates from './candidates';
import Candidate from './candidates/Candidate';
import About from './about';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }

    render() {
        return (
          <div>
            <Helmet title="Boulder Vote" />
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <Link
                  to="/"
                  className="navbar-brand mr-3"
                  onClick={() => this.setState({ toggled: false })}
                >Boulder Vote</Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => this.setState({
                    toggled: this.state.toggled ? false : true
                  })}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className={`navbar-collapse collapse${this.state.toggled ? ' show' : ''}`}>
                  <span className="navbar-text mr-auto d-none d-sm-block">
                    {`${daysToGo()} days until election!`}
                  </span>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        exact
                        to="/"
                        onClick={() => this.setState({ toggled: false })}
                      >Candidates</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/about"
                        onClick={() => this.setState({ toggled: false })}
                      >About</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="container">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/candidate/:id" component={Candidate} />
                <Route component={Candidates} />
              </Switch>
              <div className="footer">
                &copy; 2017 <a href="https://twitter.com/nick_p">Nick Poulden</a>
                <span>&bull;</span>
                Source on <a href="https://github.com/nick/boulder-vote">GitHub</a>
              </div>
            </div>
          </div>
        )
    }
}

export default App
