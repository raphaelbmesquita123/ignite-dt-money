import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem ;

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;   
        border: none;
        
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`