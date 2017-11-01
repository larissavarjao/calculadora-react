import { autobind } from "core-decorators";
import * as React from "react";
import { observable } from "mobx";
import { RouteComponentProps, withRouter, Route, NavLink, Link, Switch, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

const s = require("./style.scss");

interface IOptionsProps extends Partial<RouteComponentProps<IOptionsProps>> {
    img?: string;
    subtitle?: string;
    tipo?: string;
    toGo?: string;
    history?: any;
    location?: any;
}

interface ICalculadoraState { }

@(withRouter as any)
@observer
@autobind

export default class Options extends React.Component<IOptionsProps, ICalculadoraState> {

    @observable pathname: string;
    
        goTo(path: string) {
            this.props.history.push(path);
        }
    
        componentWillMount() {
            this.pathname = this.props.location.pathname;
        }
        componentDidUpdate() {
            this.pathname = this.props.location.pathname;
        }

    render() {
        return (
            <div className={s.coverOptions}>
                <div className={s.coverItem}>
                    <Link to='churrasco'>
                        <img src={require("../../assets/meat-icon.png")} />
                        <h3>Churrasco</h3>
                    </Link>
                </div>
                <div className={s.coverItem}>
                    <Link to='bebidas'>
                        <img src={require("../../assets/beer-icon.png")} />
                        <h3>Bebidas</h3>
                    </Link>
                </div>
                <div className={s.coverItem}>
                    <Link to='pizza'>
                        <img src={require("../../assets/pizza-icon.png")} />
                        <h3>Pizza</h3>
                    </Link>
                </div>
            </div>
        );
    }
}
