import { TextField } from '@material-ui/core';
import { useFormContext, Controller } from "react-hook-form";


const RegisterInput = () => {
    const { control } = useFormContext();

    return (
        <>
            <div>
                <Controller 
                    name="name"
                    defaultValue=""
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field} 
                            placeholder="Name" 
                            type="text"
                            variant="outlined"
                            color="primary"
                        />
                    )}
                />
            </div>
            <div>
                <Controller 
                    name="email"
                    defaultValue=""
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field} 
                            placeholder="Email" 
                            type="email"
                            variant="outlined" 
                            color="primary"
                        />
                    )}
                />
            </div>
            <div>
                <Controller 
                    name="password"
                    defaultValue=""
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field} 
                            placeholder="Password" 
                            type="password"
                            variant="outlined" 
                            color="primary"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default RegisterInput;