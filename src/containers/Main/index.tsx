import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

import Cover from '../Cover/index'
import Calculadora from '../Calculadora/index'

const background = require("../Main/background-cover.png");
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
                <div className={s.coverBackground}>
                    <img src={background} />
                </div>
                <main>
                    {
                    <Switch>
                        <Route path="/calculadora/:type" render={({match}) => <Calculadora type={match.params.type} />} />
                        <Route path="/" render={() => <Cover />} />
                    </Switch> 
                    }
                </main>
            </div>
        );
    }
}
