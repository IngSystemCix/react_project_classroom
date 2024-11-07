import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, Input, schemaForm } from "..";
import './Form.css';

export const From = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schemaForm),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            question: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" control={control} label="Email" error={errors.email} />
            <Input name="question" control={control} label="Question" error={errors.question} />
            <button type="submit">Submit</button>
        </form>
    );
}