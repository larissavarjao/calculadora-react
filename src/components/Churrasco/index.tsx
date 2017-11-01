import * as React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import Calculadora from '../../containers/Calculadora/index'

const s = require("./style.scss");

export default class Churrasco extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Calculadora title='Churrasco' 
                titleCarne='Quantidade de carne:'
                gramas1='XXX g'
                gramas2='XXX g'
                gramas3='XXX g'
                titleFrango='Quantidade de frango:'
                titlePao='Quantidade de aperitivo:'
                />
            </div>
        );
    }
}