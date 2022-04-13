import React from "react";
import style from './Button.module.scss';


class Button extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                {/* indica que esse component espera um dom children */}
                {this.props.children}
            </button>
        )
    }
}

export default Button;