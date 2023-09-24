/** @format */

import "./App.css"
import { AddTransaction } from "./Components/AddTransaction"
import { Balance } from "./Components/Balance"
import { Header } from "./Components/Header"
import { IncomeExpensise } from "./Components/IncomeExpensise"
import { TransactionList } from "./Components/TransactionList"
import { GlobalProvider } from "./Context/GlobalState"
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpensise />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
