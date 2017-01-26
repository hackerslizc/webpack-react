var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');



// 声明对象
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var RouteHandler = ReactRouter.RouteHandler;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// 定义整个页面的路由结构

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" name="" component={}>
        	<IndexRoute name="" component={} />
        </Route>
    </Router>
),document.getElementById('newPathBox'));