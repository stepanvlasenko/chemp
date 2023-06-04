import './baseInput.css'

interface BaseInputProps {
    placeholder: string 
    onChange?: (input:string) => void
}

export default function BaseInput({placeholder, onChange}: BaseInputProps){
    
    return (
        <>
            <input
                type="text"
                className="input"
                placeholder={placeholder}
                onChange={ function (event) {
                    const value: string = event.target.value

                    if (onChange) {
                        onChange(value)
                    }
                }}
            />
        </>
    )
}