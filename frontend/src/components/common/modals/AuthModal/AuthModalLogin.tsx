import React from "react"
import TextField from "../../TextField"
import AuthModalButtons from "./AuthModalButtons"

const AuthModalLogin: React.FC = () => {
    return (
        <>
            <div className="header-modal__title">Войти</div>
            <TextField placeholder="Введите ваш логин" type="text" />
            <TextField placeholder="Email" type="text" />
            <TextField placeholder="Пароль" type="password" />
            <AuthModalButtons />
        </>
    )
}

export default AuthModalLogin