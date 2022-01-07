import styled from "styled-components";

export const ApodFieldSet = styled.fieldset`
    border-color: ${({theme})=> theme.text};
    border-radius: 8px;
    padding: 1rem;
`

export const PageTittle = styled.legend`
    color: ${({theme})=> theme.secondary};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 5px;
    
`

export const ApodTittle = styled.h4`
    color: ${({theme})=> theme.text};
    margin-bottom: 5px;
`

export const StyledList = styled.ul`

    li {
    margin-bottom: 3px;

    }
`

export const NasaImage= styled.img`
    max-height: 100vh;
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
`
