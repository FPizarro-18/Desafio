import React from 'react';
import LoginContainer from '../src/containers/login/LoginContainer'
import Registro from './components/registro/Registro';
import HomeContainer from '../src/containers/home/HomeContainer'
import PrivateHomeContainer from '../src/containers/private-home/PrivateHomeContainer'
import { PrivateRoute } from './components/private-route/PrivateRoute';
import NotFound from './containers/not-found/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './containers/users-list/UserList';
import UserDetail from './containers/user-detail/UserDetail';
import { createHashHistory } from 'history';
import NewPost from '../src/containers/new-post/NewPost'
import PostDetail from '../src/containers/post-detail/PostDetail'
import SwitchColor from  '../src/components/switch/Switch'
import { ThemeContext } from './context/ThemeContext';


function App() {
  const history = createHashHistory();
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        
      
        <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginContainer}/>
            <Route path="/Registro" component={Registro}/>
            <PrivateRoute exact path="/private/home" component={PrivateHomeContainer} />
            <PrivateRoute exact path="/private/users" component={UserList} />
            <PrivateRoute path="/private/users/view/:id" exact component={UserDetail} />
            <PrivateRoute exact path="/private/newPost" component={NewPost} />
            <PrivateRoute exact path="/private/post/view/:id" component={PostDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
      </header>
    </div>
  );
}

export default App;
