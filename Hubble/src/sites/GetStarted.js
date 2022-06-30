import Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'
import TextFormFieldContainer from '../components/TextFormFieldContainer';
import { StyledForm } from '../components/styles/Form.styled';
import SelectFormFieldContainer from '../components/SelectFormFieldContainer';
import { SubmitInput } from '../components/styles/SubmitInput';

const industries = ["Rail", "Retail", "Utility", "Transport", "Healthcare", "Energy", "Automotive"];

export default function GetStarted() {
    return (
        <>
            <Header />
            <Container>
                <StyledForm>
                    <TextFormFieldContainer label="First Name" required={true} />
                    <TextFormFieldContainer label="Last Name" required={true} />
                    <TextFormFieldContainer label="Business email" required={true} />
                    <TextFormFieldContainer label="Phone" required={true} />
                    <TextFormFieldContainer label="Company" required={true} />
                    <TextFormFieldContainer label="Country" required={true} />
                    <SelectFormFieldContainer
                        label="Industry"
                        required={true}
                        selectOptions={industries}
                    />
                    <SubmitInput type="submit" value="Request A Demo" bg="#FD6810" color="#fff" />
                </StyledForm>

            </Container>
        </>
    )
}