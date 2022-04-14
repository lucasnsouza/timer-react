import React from "react";
import style from './Button.module.scss';

//informar o type do botão é possível, mas não obrigatório
class Button extends React.Component<{type?: "button" | "reset" | "submit" | undefined}> {
    render() {
        //receber as props, inclusive o type do button
        //caso não recebamos um type, vamos usar por padrão o type button
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {/* indica que esse component espera um dom children */}
                {this.props.children}
            </button>
        )
    }
}

export default Button;