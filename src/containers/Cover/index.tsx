import * as React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import Options from '../Options/index'

const s = require("./style.scss");

export default class Cover extends React.Component<any, any> {
    render() {
        return (
            <div className={s.cover}>
                <div className={s.coverText}>
                    <h1 className={s.coverTitle}>Calculadora de Churrasco</h1>
                    <h3 className='coverSubtitle'>Escolha a opção abaixo desejada: </h3>
                    <Options />
                </div>
            </div>
        );
    }
}