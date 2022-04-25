let caseSwapper = (str) => {
  let swappedStr = [];
  for(let char of str){ 
    if(char.match(/[A-Z]/) == null){
      swappedStr.push(char.toUpperCase());
    } else {
      swappedStr.push(char.toLowerCase());
    }
  }
  return swappedStr.join("");  
};

console.log(caseSwapper("AaBbc"));
// output: aAbBC