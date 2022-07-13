import styled from 'styled-components';

export const Binit = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    //background-color: blue;

    h1{
        margin-bottom: 30px;
        font-size: 2.5rem;
    }
    @media (max-width: 700px) {
        h1{
            font-size: 1.8rem;
        }
    }
    @media (max-width: 600px) {
        h1{
            font-size: 1.5rem;
        }
    }
    
`;
export const Bsecond = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

`;

export const Bthird = styled.div`

    display: flex;
    flex-direction: column;
    width: 70%;
    //background-color: blueviolet;
    @media (max-width: 600px) {
        width: 100%;
    }

`;
export const Bfor = styled.div`

    display: flex;
    justify-content: center;
    background-color: #ECDBBA;
    padding: 5px;
    border-radius: 20px;
    align-items: center;

    .form {
        padding: 3px 15px 3px 15px;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 1.2rem;
        border-radius: 20px;
    }

    @media (max-width: 1060px) {
        .form {
            padding: 2px 10px 2px 10px;
            margin-left: 5px;
            margin-right: 5px;
            font-size: 1rem;
            border-radius: 15px;
        }
    }
    @media (max-width: 800px) {
        .form {
            padding: 2px 5px 2px 5px;
            margin-left: 2px;
            margin-right: 2px;
            font-size: 1rem;
            border-radius: 15px;
        }
    }
    @media (max-width: 600px) {
        .form{
            padding: 9px;
            margin: 10px;
            font-size: 1.2rem;
        }
    }

`;

//---------------------------------------

export const Bheader = styled.header`

    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 30%;
    //background-color: aqua;

    h3{
        font-size: 1.1rem;
    }
    @media (max-width: 600px) {
        width: 60%;
    }

`;

//-------------------------------------

export const Dgeral = styled.div`

    display: flex;
    flex-direction: column;
    padding: 10px;

`;
export const Doone = styled.div`

    display: flex;
    justify-content: space-around;

    h1{
        font-size: 2.5rem;
        font-family: 'Times New Roman', Times, serif;
    }

    @media (max-width: 1060px) {
        h1{
            font-size: 1.9rem;
        }
    }
    @media (max-width: 800px) {
        h1{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 600px) {
        justify-content: space-between;
        h1{
            font-size: 1rem;
        }
    }

`;
export const DoTwo = styled.div`

    height: 500px;

    @media (max-width: 1060px) {
        height: 400px;
    }
    @media (max-width: 800px) {
        height: 250px;
    }

`;