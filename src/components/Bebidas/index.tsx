import * as React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import Calculadora from '../../containers/Calculadora/index'

const s = require("./style.scss");

export default class Bebidas extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Calculadora title='Bebidas'
                titleCarne='Quantidade de refrigerante:'
                gramas1='XXX L'
                gramas2='XXX L'
                titleFrango='Quantidade de cerveja:'
                />
            </div>
        );
    }
}