let stringOrNOt = (str) => {
  if(typeof str === "string") return true;
  else return false;
};

console.log(stringOrNOt("ola"));
console.log(stringOrNOt([1,2,"b"]));
