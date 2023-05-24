const transactions =[
  {
  id: 3,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:34:30.000Z',
  },
  {
 
  id: 1,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
 time: '2018-03-02T10:33:00.000Z',
 
 },
 
  {
  id: 6,
  sourceAccount: 'A',
 targetAccount: 'C',
 amount: 250,
 category: 'other',
 time: '2018-03-02T10:33:05.000Z',
  },
 
 {
  id: 4,
  sourceAccount: 'A',
  targetAccount: 'B',
 
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:36:00.000Z',
  },
 
 {
 
  id: 2,
  sourceAccount: 'A',
 
  targetAccount: 'B',
 
  amount: 100,
  category: 'eating_out',
 
  time: '2018-03-02T10:33:50.000Z',
  },
  {
 
  id: 5,
  sourceAccount: 'A',
  targetAccount: 'C',
  amount: 250,
  category: 'other',
  time: '2018-03-02T10:33:00.000Z',
  },
  ];
 
  function findDuplicateTransactions(transactions) {
  const transaction1=transactions.slice().sort((a,b)=> a.id-b.id)
   
    const timeDiff=(time1,time2)=>{
   
    return (new Date(time1).getTime()-new Date(time2).getTime())/60000
   
  }
 
    console.log(transactions);
    let duplicates=[];
   
   while(transaction1.length){
   
   let transactionGroups=[]
   
    let newElements=transaction1.shift()
   
    transactionGroups.push(newElements)
   
   for(let i=0;i<transaction1.length;i++){
   
   if(newElements.targetAccount===transaction1[i].targetAccount &&
   
    newElements.sourceAccount===transaction1[i].sourceAccount &&
   
    newElements.amount===transaction1[i].amount &&
   
    newElements.category===transaction1[i].category &&
   
    timeDiff(transaction1[i].time,newElements.time)<1){
   
    transactionGroups.push(transaction1[i])
   
    newElements=transaction1[i]
 
  transaction1.splice(i,1)
   
    i-=1
   
  }
    }
   
        // console.log(transactionGroups);
   
       if(transactionGroups.length>1){
   
        duplicates.push(transactionGroups)
   
       }
        }
 
        return duplicates
      }
   
   findDuplicateTransactions(transactions)
   
   export default findDuplicateTransactions;