import { MouseEventHandler } from 'react'
import './baseButton.css'

interface BaseButtonProps{
    text: string 
    color?: "green" | "blue"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function BaseButton({
    text,
    color = 'green',
    onClick
}: BaseButtonProps) {
    const colorClass = 'button--' + color

    return (
        <>
            <button
                onClick={onClick}
                className={"button" + " " + colorClass}
            >
                {text}
            </button>
        </>
    )
}