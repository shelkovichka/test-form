import { FormValues } from '../features/models/CreateProfile/RegisterInput.types'
import { SubmitHandler } from "react-hook-form";

export const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));