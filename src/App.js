import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from "./components/home";
import Post from "./components/post";
import Profile from "./components/profile";
import PostItem from "./components/postitem";

const App = () => {
    return (
        <BrowserRouter> {/* <HashRouter> : Adds # before every route || <MemoryRouter> : Saves all the routes to memory but not visible changes shown in uri */}
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <NavLink
                            className="p-2"
                            to="/"
                            activeStyle={{color: 'red'}}
                            activeClassName={'active'}
                            exact
                        >Home</NavLink>
                        <NavLink
                            className="p-2"
                            to="/posts"
                            activeStyle={{color: 'red'}}
                            activeClassName={'active'}
                            exact
                        >Posts</NavLink>
                        <NavLink
                            className="p-2"
                            to={{
                                pathname: '/profile',
                                hash: '#francis',
                                search: '?true=enabled'
                            }}
                            activeStyle={{color: 'red'}}
                            activeClassName={'active'}
                            exact
                        >Profile</NavLink>
                    </nav>
                </div>
            </header>
            <div className="container">
                <Route path="/" exact component={Home}/>
                <Route path="/posts" exact component={Post}/>
                <Route path="/posts/:id" exact component={PostItem}/>
                <Route path="/profile" exact component={Profile}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
