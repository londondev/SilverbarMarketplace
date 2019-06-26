
export function calculateSummary(orders){
  var summary=[];
  orders.forEach(item => {
    let currentItem=summary.find(s => s.unitPrice === item.unitPrice);
    if(currentItem){
      currentItem.quantity+=item.quantity;
    }else{
      summary.push({unitPrice:item.unitPrice, quantity:item.quantity});
    }
  });
  return summary.sort((s1,s2)=> s1.unitPrice - s2.unitPrice);
}