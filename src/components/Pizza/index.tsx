import * as React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import Calculadora from '../../containers/Calculadora/index'

const s = require("./style.scss");

export default class Pizza extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Calculadora title='Pizza'
                titleCarne='Quantidade de pizza:'
                gramas1='XXX pizzas'
                />
            </div>
        );
    }
}