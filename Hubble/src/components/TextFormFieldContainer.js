import { StyledFormFieldContainer } from "./styles/TextFormField.styled";
import { StyledTextInput } from "./styles/TextInput.styled";
import { StyledLabel } from "./styles/Label.styled";
import { StyledRequiredText } from "./styles/RequiredText.styled";

export default function TextFormFieldContainer({ label, required }) {
    const inputName = label.replace(/ /g, "_") + "_name";
    const requiredText = required ? 'required' : 'optional';
    return (
        <StyledFormFieldContainer>
            <StyledLabel for={inputName}>
                {label} <StyledRequiredText>({requiredText})</StyledRequiredText>
            </StyledLabel>
            <StyledTextInput id={inputName} type='text' />
        </StyledFormFieldContainer>
    )
}