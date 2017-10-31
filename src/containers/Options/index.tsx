import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

const s = require("./style.scss");

interface IOptionsProps extends Partial<RouteComponentProps<IOptionsProps>> {
    img?: string;
    subtitle?: string;
}

export default class Options extends React.Component<IOptionsProps, any> {
    
    render() {
        return (
            <div className={s.coverItem}>
                <img src={this.props.img} />
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}
