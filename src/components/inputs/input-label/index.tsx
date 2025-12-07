import { Input } from "../input";
import { Container, Label, StyledInput } from "./styles";

type InputLabelProps = React.ComponentProps<typeof Input> & {
    label: string;
}

export function InputLabel({ label, ...props }: InputLabelProps){
    return (
        <Container>
            <Label htmlFor={props.name}>{label}</Label>
            <StyledInput as={Input} id={props.name} {...props}/>
        </Container>
    )
}