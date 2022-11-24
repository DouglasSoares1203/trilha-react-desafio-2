import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`
export const ButtonsContainer = styled.div`
    a.visitar{
        color: #41487C;
    }
    a.remover {
        color: #FF0000;
        margin-top:20px;
    }
`

export const ImgContainer = styled.div`
    width: 10%;
    display: inline-block;
    img {
        width: 50px;
        heigth: 50px;
    }
`

export const HeadContainer = styled.div`
    width: auto;
    display: inline-block;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    p {
        font-size:16px;
        color: #FAFAFA70;
        margin-bottom:20px;
    }
`