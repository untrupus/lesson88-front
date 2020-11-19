import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Posts from "./containers/Posts/Posts";
import PostForm from "./containers/PostForm/PostForm";

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Posts}/>
          {/*<Route path="/artist/:id" exact component={Artist}/>*/}
          {/*<Route path="/album/:id" component={Album}/>*/}
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/post" exact component={PostForm}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </div>
  );
}

export default App;
