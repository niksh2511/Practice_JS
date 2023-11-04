function splitNCases(str, cases) {
  if (cases < 1 || cases > str.length) {
      return "null";
  }

  const chunkSize = Math.ceil(str.length / cases);
  const result = [];

  for (let i = 0; i < str.length; i += chunkSize) {
      const chunk = str.slice(i, i + chunkSize);
      result.push(chunk);
  }

  return result;
}

console.log(splitNCases("Strengthened", 6)); 
console.log(splitNCases("Unscrupulous", 2));  
console.log(splitNCases("Flavorless", 1));   
console.log(splitNCases("testcasesch", 3));


