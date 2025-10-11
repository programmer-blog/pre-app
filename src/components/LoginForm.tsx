import { useState, type SyntheticEvent } from "react";
// import { Button } from "./Button";
import { StyledInput } from "./StyledComponents/StyledInput";
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitForm = (e: SyntheticEvent) => { 
        e.preventDefault();
        const target = e.target as HTMLFormElement
        console.log(target, { email, password });
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <StyledInput
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" />
            <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" />
            {/* <Button text="Submit" /> */}
            <button type="submit" className="h-10 px-6 font-semibold bg-red">Submit</button>
        <Button variant="outlined">Submit</Button>

        </form>
    );
 }