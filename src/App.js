import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';
import { Login, HomePage, LoginFailed } from './components';
import { connect } from 'react-redux'
import { store } from './redux/store';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: null
        }

        history.listen((location, action) => {
            
            const state = store.getState();
            console.log('state ', state)
            this.setState({ isAuthenticated: state?.data?.token || false})
            // clear alert on location change
            // this.props.clearAlerts();
        });
    }

    render() {
        const { data } = this.props;
        console.log('data ', data)

        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">                     
                        <Router history={history}>
                            <Switch>  
                                <Route path="/" exact component={Login} />                              
                                <Route path="/login" component={Login} />
                                <Route path="/home" component={HomePage} />
                                <Route path="/loginFailed" component={LoginFailed} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  })
  

export default connect(mapStateToProps, null)(App)

