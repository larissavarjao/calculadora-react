
import * as React from "react";
import { withRouter, Route, Redirect, Link } from "react-router-dom";
import { observer } from "mobx-react";
import Options from '../../containers/Options/index'

const back = require("../../assets/back-icon.png");
const beer = require("../../assets/beer-icon.png");
const meat = require("../../assets/meat-icon.png");
const pizza = require("../../assets/pizza-icon.png");
const s = require("./style.scss");

interface ICalculadoraProps {
    type: string;
}

export default class Navigator extends React.Component<ICalculadoraProps, {}> {
    render() {
        return (
            <div className={s.cover}>
                <div className={s.optionsIcons}>
                    <Link to='/'>
                        <img src={back}  />
                    </Link>
                    <Link to='/calculadora/churrasco'>
                        <img src={meat} className={this.props.type ==="churrasco" && s.active}/>
                    </Link>
                    <Link to='/calculadora/bebidas'>
                        <img src={beer} className={this.props.type ==="bebidas" && s.active}/>
                    </Link>
                    <Link to='/calculadora/pizza'>
                        <img src={pizza} className={this.props.type ==="pizza" && s.active}/>
                    </Link>
                    </div>
            </div>
        );
    }
}