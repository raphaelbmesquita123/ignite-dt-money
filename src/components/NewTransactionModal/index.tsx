import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState, FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import Modal from 'react-modal';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps ) {
    const { createTransaction } = useTransactions()
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')


    async function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('Deposit')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            
            <button type="button" onClick={onRequestClose} className="react-modal-close"> 
                <img src={closeImg}alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register Transactions</h2>

                <input 
                type="text"
                placeholder="Title" 
                value={title}
                onChange={event => setTitle(event.target.value)}/>

                <input 
                type="number"
                placeholder="Value" 
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}/>

               <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => setType('Deposit')}
                    isActive={type === 'Deposit'}
                    activeColor="green">

                        <img src={incomeImg} alt="income" />
                        <span>In come</span>

                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={() => setType('Withdraw')}
                    isActive={type === 'Withdraw'}
                    activeColor="red">

                        <img src={outcomeImg} alt="outcome" />
                        <span>Out come</span>

                    </RadioBox>
               </TransactionTypeContainer>

                <input 
                placeholder="Category" 
                value={category}
                onChange={event => setCategory(event.target.value)} />

                <button type="submit">Register</button>                
            </Container>
        </Modal>
    )
}


