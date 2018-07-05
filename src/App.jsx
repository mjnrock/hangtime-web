import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Hangtime from "./components/package";

import Routes from "./routes/package";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>					
					<Switch>
						<Route exact path="/" component={ Routes.Feed } />
						<Route path="/feed/:id" component={ Routes.Feed } />
			 			{/* <Route path="/host/" component={ Routes.Game.Host } />
			 			<Route path="/search/nearby/:code?" component={ Routes.Game.Search } /> */}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
// export default connect(
// 	(state) => {
// 		return {
// 			FeedMessages: state.FeedMessages
// 		};
// 	},
// 	(dispatch) => {
// 		return {
// 			GetFeedMessagesRequest: (feed) => dispatch(Feed.GetFeedMessagesRequest(feed))
// 		};
// 	}
// )(App);