import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

import Cover from '../Cover/index'

const s = require("./style.scss");

interface IMainProps extends Partial<RouteComponentProps<IMainProps>> {
    history?: any;
    location?: any;
}

interface IMainState { }

@(withRouter as any)
@observer
@autobind
export default class Main extends React.Component<IMainProps, IMainState> {

    goTo(path: string) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className={s.main}>
                <main>
                    {
                        <Route path="/" render={() => <Cover />} />
                        /*<Route path="/reservas" render={() => <Reservations />} />
                        <Route path="/historico" render={() => <History />} />
                        <Route exact path="/" render={() => <Redirect to="/esperas" />} />
                    */}
                </main>
            </div>
        );
    }
}
