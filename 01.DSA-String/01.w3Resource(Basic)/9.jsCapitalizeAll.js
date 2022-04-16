let jsCapitalizeAll = (str) => {
  let capitalizeStr = [];
  str.split(" ").forEach(elem => {
    capitalizeStr.push(elem.charAt(0).toUpperCase()+elem.slice(1));
  });

  return capitalizeStr.join(" ");
};

console.log(jsCapitalizeAll("imma hero here."));
// Output: Imma Hero Here
