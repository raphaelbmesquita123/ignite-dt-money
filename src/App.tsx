import { Dashboard } from "./components/Dashboard";
import { Header }from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from './hooks/useTransactions'

import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOten] = useState(false)
  Modal.setAppElement('#root')
    
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOten(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOten(false)
    }
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      
    </TransactionsProvider>
  );
}

