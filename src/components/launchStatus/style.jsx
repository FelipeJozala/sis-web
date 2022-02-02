import styled from "styled-components"

export const ConfirmationStatus = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background:${props => props.status === 'Go' ? 'green' : '#0D406E'};
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;

    @media only screen and (min-width: 768px) {
        top: unset;
        bottom: 0;
    }

`