import { Control, Controller, FieldError } from "react-hook-form";
import './Input.css';
import { FormValues } from "../../..";

interface InputProps {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: string;
    placeholder?: string;
    error?: FieldError;
}

export const Input = ({
    name, control, label, type = 'text', placeholder, error
}: InputProps) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <input {...field} type={type} placeholder={placeholder} className={`form-control ${error ? "is-invalid" : ""}`} />
                }
            />
            {error && <div className="error">{error.message}</div>}
        </div>
    );
}

export default Input;