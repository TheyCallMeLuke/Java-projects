import { StyledFormFieldContainer } from "./styles/TextFormField.styled";
import { StyledLabel } from "./styles/Label.styled";
import { StyledRequiredText } from "./styles/RequiredText.styled";
import { StyledSelectInput } from "./styles/SelectInput.styled";

export default function SelectFormFieldContainer({ label, required, selectOptions }) {
    const inputName = label.replace(/ /g, "_") + "_name";
    const requiredText = required ? 'required' : 'optional';
    selectOptions.map(option => console.log(option));
    return (
        <StyledFormFieldContainer>
            <StyledLabel for={inputName}>
                {label} <StyledRequiredText>({requiredText})</StyledRequiredText>
            </StyledLabel>
            <StyledSelectInput>
                <option disabled selected> -- select an option -- </option>
                {selectOptions.map(option => {
                    return <option>{option}</option>
                })}
            </StyledSelectInput>
            {/* <StyledTextInput id={inputName} type='text' /> */}
        </StyledFormFieldContainer>
    )
}