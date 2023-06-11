import React from "react"
import MainBtn from "../../buttons/MainBtn"

const AuthModalButtons: React.FC = () => {
    return (
        <div className="auth-modal__buttons">
            <MainBtn text="Войти" />
            <MainBtn text="Перейти к регистрации" />
        </div>
    )
}

export default AuthModalButtons