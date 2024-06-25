import { useState } from 'react'
import "./styles/Expenses.css"
type ExpenseEle = {
  desc: string,
  amt: number,
  type: string,
  category: string,
  date: string
}
function Expenses() {
  var initExp:ExpenseEle[] = []
  if(localStorage.getItem("expenses") != null){
    initExp = JSON.parse(localStorage.getItem("expenses")!)
  }
  const [expenses, setExpenses] = useState<ExpenseEle[]>(initExp)
  const [desc, setDesc] = useState<string>("")
  const [type, setType] = useState<string>("Debit")
  const [cat, setCat] = useState<string>("Food")
  const [amt, setAmt] = useState<number>(0)
  const addRecord = () => {
    if(desc=="" || amt == 0) return;
    let dateTime = new Date()
    var localExp = [...expenses, {desc, amt, type, category: cat, date: dateTime.toLocaleDateString()}]
    setExpenses(localExp)
    setDesc("")
    setAmt(0)
    localStorage.setItem("expenses", JSON.stringify(localExp))
  }
  return (
    <div className="exp-main">
      <div className="exp-form">
        <div className="exp-inp-wrap">
          <input type='text' placeholder='Description' onChange={(e) => setDesc(e.target.value)} value={desc}/>
          <input type='number' placeholder='Amount' onChange={(e) => setAmt(parseFloat(e.target.value))} value={amt}/>
          <select name='type' onChange={(e) => setType(e.target.value)}>
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </select>
          <select name='category' onChange={(e) => setCat(e.target.value)}>
            <option value="food">Food</option>
            <option value="stationary">Stationary</option>
            <option value="transport">Transportation</option>
            <option value="laundry">Laundry</option>
          </select>
        </div>
        <button className='exp-submit' onClick={() => addRecord()}>Add Transaction</button>
      </div>
      <div className="exp-log">
        <table className='exp-tab'>
        <tbody>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Transaction Type</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
            {
              expenses.map((elem, idx) => (
                <tr key={idx}>
                  <td>{elem.desc}</td>
                  <td>{"₹"+elem.amt}</td>
                  <td>{elem.type}</td>
                  <td>{elem.category}</td>
                  <td>{elem.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Expenses