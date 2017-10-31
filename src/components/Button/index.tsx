import * as React from "react";
import { Link } from "react-router";

/**
 * Style
 */

const s = require("./style.scss");

interface IGeneralProps {
    className?: string;
}

interface IClickProps {
    onClick: () => void;
}

interface ILinkProps {
    to: string;
}

interface IFormProps {
    type: "reset" | "submit";
}

type IButtonProps = IClickProps | ILinkProps | IFormProps | IGeneralProps;

interface IButtonState {}

class Button extends React.Component<IButtonProps, IButtonState> {
    public render(): JSX.Element {
        const props: IGeneralProps & IClickProps & ILinkProps & IFormProps & React.Props<any> = this.props as any;

        let className = s.link;
        if (props.className) {
            className += " " + s[props.className];
        }

        if (props.to) {
            return (
                <Link to={props.to} className={className}>{props.children}</Link>
            );
        }

        return (
            <button onClick={props.onClick} type={props.type || "button"} className={className}>{props.children}</button>
        );
    }
}

export default Button;
