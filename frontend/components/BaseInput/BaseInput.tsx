import './baseInput.css'

interface BaseInputProps {
    type: string
    placeholder?: string
    name?: string
    id?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function BaseInput({type, placeholder = '', name, id, onChange}: BaseInputProps){
    
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className="input"
                onChange={onChange}
            />
        </>
    )
}