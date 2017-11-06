import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Navigator from '../../components/Navigator'

const s = require("./style.scss");

interface ICalculadoraProps extends Partial<RouteComponentProps<ICalculadoraProps>> {
    type: string;
}

@(withRouter as any)
@observer
@autobind
export default class Calculadora extends React.Component<ICalculadoraProps> {
    
    @observable title: string = "";
    @observable valueAdults: number = 0;
    @observable valueChildren: number = 0;
    @observable meat: number = 0;
    @observable chicken: number = 0;
    @observable aperetivo: number = 0;
    @observable beer: number = 0;
    @observable soda: number = 0;
    @observable pizza: number = 0;

    calculate() {
        const numberOfPeople = this.valueAdults + (this.valueChildren/2);
        if(this.props.type === "churrasco"){
            this.meat = Math.round(numberOfPeople * 0.4);
            this.chicken = Math.round(numberOfPeople * 0.05);
            this.aperetivo = numberOfPeople * 1;
        } else if(this.props.type === "bebidas"){
            this.soda = numberOfPeople * 1.5;
            this.beer = numberOfPeople * 4;
        } else if(this.props.type === "pizza"){
            this.pizza = Math.ceil(numberOfPeople * 0.5);
        }
    }
    
    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className={s.options}>
                <div className={s.calculadora}>
                   <Navigator type={this.props.type}/>
                    <div>
                        <h1>{this.props.type}</h1>
                    </div>
                    <div className={s.optionsOptions}>
                        <div className={s.optionsInput}>
                            <p>Quantidade de adultos</p>
                            <input type="number" value={this.valueAdults} onChange={(e) => {
                                this.valueAdults = +e.target.value;
                            }} />
                            <p>Quantidade de crianças</p>
                            <input type="number" value={this.valueChildren} onChange={(e) => {
                                this.valueChildren = +e.target.value;
                            }} />       
                            <button className={s.calculate} onClick={() => this.calculate()}>Calcular!</button>
                        </div>
                        {this.props.type === "churrasco" && 
                            <div className={s.optionsAnswer}>
                                <p>Quantidade de carne:</p>
                                <p>{this.meat} kg</p>
                                <p>Quantidade de frango:</p>
                                <p>{this.chicken} kg</p>
                                <p>Quantidade de aperitivo:</p>
                                <p>{this.aperetivo} pães de alho</p>
                            </div>
                        }
                        {
                            this.props.type === "bebidas" &&
                            <div className={s.optionsAnswer}>
                                <p>Quantidade de refrigerante:</p>
                                <p>{this.soda} L</p>
                                <p>Quantidade de cerveja:</p>
                                <p>{this.beer} latas de 300ml</p>
                            </div>
                        }
                        {
                            this.props.type === "pizza" &&
                            <div className={s.optionsAnswer}>
                                <p>Quantidade de pizza:</p>
                                <p>{this.pizza} pizzas</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}