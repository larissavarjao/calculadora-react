import * as React from "react";
import { render } from "react-dom";
import * as moment from "moment";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import App from "./containers/App";

import "./style.scss";

moment.locale("pt-br");

render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"),
);
