import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="email" 
                ref={register({ 
                    required: "Required",
                    minLength: {
                        value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: "Must be email" 
                    }
                })} 
                name="email" />
                {errors.email && <p>{errors.email.message}</p>}
            <input 
                type="password" 
                placeholder="password" 
                ref={register({ 
                    required: "Required", 
                    minLength: {
                        value: 8, 
                        message: "Too Short" 
                    }
                })} 
                name="password"
            />
             {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" />
        </form>
    );
}

