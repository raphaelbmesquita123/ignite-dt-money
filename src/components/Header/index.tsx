import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}

export function Header({onOpenNewTransactionsModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}


