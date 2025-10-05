import type { FC } from "react";
import { StyledButton } from "./StyledComponents/StyledInput";
// import styles from './Button.module.css';

    
type ButtonProps = {
    text: string;
}

export const Button: FC<ButtonProps> = ({text}) => {
    return <StyledButton>
    {text}</StyledButton>
}
// export const Button: FC<ButtonProps> = ({text}) => {
//     return <button className={styles.myButton}>
//     {text}</button>
// }

// export const Button: FC<ButtonProps> = ({text}) => {
//     return <button style={{
//         padding: '10px', 
//         backgroundColor: 'tomato', 
//         color: 'white', 
//         border: 'none', 
//         borderRadius: '5px'
//         }}>
//     {text}</button>
// }