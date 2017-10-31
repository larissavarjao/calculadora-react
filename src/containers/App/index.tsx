import * as React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import Main from "../Main";

const s = require("./style.scss");

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className={s.container}>
                <Route path="/" render={() => <Main />} />
            </div>
        );
    }
}
