import styled from "styled-components";

export const StyledDashboard = styled.div`
    display: flex;
    margin-left:20vw;
    color:black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 0.5rem;
    background: #fff;
    font-family: 'Inter', sans-serif;
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        padding: 1.5rem;
        text-align: center;
    }
    .footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer img {
        margin-left: 0.5rem;
    }
    `;