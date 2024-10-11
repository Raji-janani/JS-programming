const transactions = [  
    { customer: 'Alice', amount: 120, date: '2024-01-01' },
    { customer: 'Bob', amount: 50, date: '2024-01-01' },
    { customer: 'Alice', amount: 80, date: '2024-01-02' },
    { customer: 'Charlie', amount: 30, date: '2024-03-02' },
    { customer: 'Bob', amount: 100, date: '2024-01-03' },
    { customer: 'Alice', amount: 120, date: '2024-02-01' }
];

const monthlyExp = (transactions) =>{
 const result= transactions.reduce((acc,transaction)=>{
     const month= transaction.date.slice(0,7)
     if(!acc[month]){
        acc[month]= 0
     }
 acc[month] += transaction.amount;
   return acc;
    },{})
    return result;
}

console.log(monthlyExp(transactions))