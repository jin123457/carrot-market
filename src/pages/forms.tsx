import { FieldErrors, useForm } from "react-hook-form";

interface ILoginForm {
    username: string;
    email: string;
    password: string;
}

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        mode: "onBlur",
    });
    const onValid = (data: ILoginForm) => {};
    const onInValid = (errors: FieldErrors) => {
        console.log(errors);
    };
    return (
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input
                {...register("username", {
                    required: "username is required",
                    minLength: {
                        message: "The username should be longer than 5 chars",
                        value: 5,
                    },
                })}
                type="text"
                placeholder="Username"
            />
            <input
                {...register("email", {
                    required: "email is required",
                    validate: {
                        notGmail: (value) => !value.includes("@gmail.com") || "Gmail isn't allowed",
                    },
                })}
                type="email"
                placeholder="Email"
            />
            {errors.email?.message}
            <input {...register("password", { required: "password is required" })} type="password" placeholder="password" />
            <input type="submit" value="login" />
        </form>
    );
}
