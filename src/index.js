import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter  } from "react-router-dom";

import initStore from "./store/config.jsx";
import App from "./App";

const store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
