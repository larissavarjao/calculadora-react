import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

const back = require("../../assets/back-icon.png");
const beer = require("../../assets/beer-icon.png");
const meat = require("../../assets/meat-icon.png");
const pizza = require("../../assets/pizza-icon.png");
const s = require("./style.scss");

interface ICalculadoraProps extends Partial<RouteComponentProps<ICalculadoraProps>> {
    history?: any;
    title?: string;
    optionCarne?: boolean;
    titleCarne?: string;
    optionFrango?: boolean;
    titleFrango?: string;
    optionPao?: boolean;
    titlePao?: string;
    gramas1?: string;
    gramas2?: string;
    gramas3?: string;
    value?: any;
}

@(withRouter as any)
@observer
@autobind
export default class Calculadora extends React.Component<ICalculadoraProps> {

    goTo(path: string) {
        this.props.history.push(path);
    }

    constructor(props: any) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event: any) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
            <div className={s.options}>
                <div className={s.calculadora}>
                    <div className={s.optionsIcons}>
                        <Link to='/'>
                            <img src={back} />
                        </Link>
                        <Link to='churrasco'>
                            <img src={meat} />
                        </Link>
                        <Link to='bebidas'>
                            <img src={beer} />
                        </Link>
                        <Link to='pizza'>
                            <img src={pizza} />
                        </Link>
                    </div>
                    <div>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className={s.optionsOptions}>
                        <div className={s.optionsInput}>
                            <p>Quantidade de adultos</p>
                            <input type="number" value={this.state.value} id="value-adult" />
                            <p>Quantidade de crianças</p>
                            <input type="number" value="0" id="value-child" />       
                            <button className={s.calculate}>Calcular!</button>
                        </div>
                        <div className={s.optionsAnswer}>
                            <p>{this.props.titleCarne}</p>
                            <p>{this.props.gramas1}</p>
                            <p>{this.props.titleFrango}</p>
                            <p>{this.props.gramas2}</p>
                            <p>{this.props.titlePao}</p>
                            <p>{this.props.gramas3}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
