import React from "react"

type MainBtnProps = {
    text: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string,
    type?: string
}

const MainBtn: React.FC<MainBtnProps> = ({text, onClick, className, type}) => {
    return (
        <button
            className={`main-btn ${className || ""} ${type && type === "framed" ? "framed" : ""}`}
            onClick={onClick}
        >{text}</button>
    )
}

export default MainBtn