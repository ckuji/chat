import React from "react"

type MainBtnProps = {
    text: string
}

const MainBtn: React.FC<MainBtnProps> = ({text}) => {
    return (
        <button>{text}</button>
    )
}

export default MainBtn