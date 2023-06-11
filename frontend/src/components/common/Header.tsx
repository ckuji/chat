import React, { useEffect, useState } from "react"
import AuthModal from "./modals/AuthModal";

const Header: React.FC = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setDomLoaded(true);
      }, []);

    if(!domLoaded) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className="header">
            <div className="header-logo">Logo</div>
            <div className="header-personal">
                <div className="header-personal__login" onClick={showModal}>Войти &rarr;</div>
                {/* <div>Выйти &larr;</div> */}
            </div>

            <AuthModal isModalOpen={isModalOpen} handleCancel={handleCancel}  />

        </div>
    )
}

export default Header