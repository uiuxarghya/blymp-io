import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./register-worker";

// Make sure we are on the index page
window.location.hash = "#";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
