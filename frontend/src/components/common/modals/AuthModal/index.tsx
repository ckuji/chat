import React from "react"
import { Modal } from "antd"
import AuthModalLogin from "./AuthModalLogin"

type AuthModalProps = {
    isModalOpen: boolean,
    handleCancel: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({isModalOpen, handleCancel}) => {

    return (
        <Modal className="header-modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
            <AuthModalLogin />
        </Modal>
    )
}

export default AuthModal