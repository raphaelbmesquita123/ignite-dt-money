import { useTransactions } from '../../hooks/useTransactions';
import { useContext } from 'react'
import icomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'


export function Summary() {
    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'Deposit'){
    //         return acc + transaction.amount
    //     }
    //     return acc
    // },0)

    const sumary = transactions.reduce((acc, transaction) => { 
        if(transaction.type === 'Deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>

            <div>
                <header>
                    <p>In Come</p>
                    <img src={icomeImg} alt="In Come" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-IE',{
                        style: 'currency',
                        currency: 'EUR'
                    }).format(sumary.deposits)}                    
                    </strong>
            </div>
            <div>
                <header>
                    <p>Out Come</p>
                    <img src={outComeImg} alt="Out Come" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('en-IE',{
                        style: 'currency',
                        currency: 'EUR'
                    }).format(sumary.withdraws)} 
                </strong>
            </div>
            <div className={ sumary.total >= 0 ? 'hightlight-background' : 'hightlight-background-red'}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="totalImg" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-IE',{
                        style: 'currency',
                        currency: 'EUR'
                    }).format(sumary.total)} 
                </strong>
            </div>
        </Container>
    )
}

