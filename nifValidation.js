const checkCIF = (taxId) => {
  const regex = /[A-Za-z]{1}[0-9]{7,8}([A-Za-z]{1})?/gim
  if(!regex.test(taxId)) return false

  
  const checkDigit = taxId[taxId.length - 1]
  let sum = 0
  for (let i = 1; i < taxId.length - 1; i++) {
    if (i % 2 === 0) {
      sum += Number(taxId[i])
    } else {
      sum += (Number(taxId[i]) * 2).toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
  }

  return isNaN(checkDigit) ? 
    String.fromCharCode(64 + 10-(sum%10)) === checkDigit.toUpperCase()
    : (10 - (sum%10)) % 10 === Number(checkDigit)
}

console.log(checkCIF(''))
//console.log(checkCIF('P5881850A'))
//console.log(checkCIF('N4715594j'))
