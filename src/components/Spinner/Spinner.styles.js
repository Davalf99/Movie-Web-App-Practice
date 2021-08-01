import styled from "styled-components";

export const Spinner = styled.div`
    border: 7px solid var(--lightGrey);
    border-top: 7px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.9s linear infinite;
    margin: 20px auto;

    @keyframes spin{
        0%{
            transfrom: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`