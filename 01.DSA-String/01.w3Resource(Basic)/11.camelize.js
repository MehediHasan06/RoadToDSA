let camelCase = (str) => {
  let strPartArr = [];
  str.split(" ").forEach((part, index) => {
    if(index === 0){
      if(part.charAt(0).match(/[A-Z]/)){
        strPartArr.push(part.charAt(0).toLowerCase() + part.slice(1));
      } else {
        strPartArr.push(part);
      }
    } else {
      if(part.charAt(0).match(/[a-z]/)){
        strPartArr.push(part.charAt(0).toUpperCase()+part.slice(1));
      } else {
        strPartArr.push(part);
      }
    }
  });

  return strPartArr.join("");
};

console.log(camelCase("hello Kitty Please"));
// output: helloKittyPlease
