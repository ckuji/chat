import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import MainBtn from "../../buttons/MainBtn"

type AuthModalProps = {
    isModalOpen: boolean,
    handleCancel: () => void,
}

const AuthModal: React.FC<AuthModalProps> = ({isModalOpen, handleCancel}) => {
    const [isLoginModal, setIsLoginModal] = useState(true)
    const [modalValues, setModalValues] = useState({
        login: '', email: '', password: ''
    })

    const setIsLoginModalHandler = (value: boolean, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(modalValues.login || modalValues.email || modalValues.password) {
            setModalValues({login: '', email: '', password: ''})
        }
        setIsLoginModal(value)
    }

    const onChangeModalValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalValues({...modalValues, [event.target.name]: event.target.value})
    }

    const requestModalFields = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <Modal className="header-modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
            <form className="header-modal__content">
                <div className="header-modal__content-start">
                    <div className="header-modal__title">
                        {isLoginModal ? "Вход": "Регистрация"}
                    </div>
                    <input
                        type="text"
                        placeholder="Введите ваш логин"
                        className="header-modal__input"
                        name="login"
                        value={modalValues.login}
                        onChange={onChangeModalValues}
                    />
                    {!isLoginModal ?
                        <input
                            type="text"
                            placeholder="Email"
                            className="header-modal__input"
                            name="email"
                            value={modalValues.email}
                            onChange={onChangeModalValues}
                        /> : ""
                    }
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="header-modal__input"
                        name="password"
                        value={modalValues.password}
                        onChange={onChangeModalValues}
                    />
                </div>
                <div className="header-modal__content-finish">
                    <div className="header-modal__buttons">
                        <MainBtn
                            text="Отправить"
                            onClick={requestModalFields}
                        />
                        <MainBtn
                            text={isLoginModal ? "Перейти к регистрации" : "Перейти ко входу в систему"}
                            onClick={(event) => setIsLoginModalHandler(!isLoginModal, event)}
                            type="framed"
                        />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default AuthModal