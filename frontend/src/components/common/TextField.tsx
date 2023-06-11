import React from "react"

type TextField = {
    placeholder: string,
    type: string
}

const TextField: React.FC<TextField> = ({placeholder, type}) => {
    return (
        <input className="text-field" type={type} placeholder={placeholder} />
    )
}

export default TextField