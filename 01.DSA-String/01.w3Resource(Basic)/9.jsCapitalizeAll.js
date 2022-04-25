let jsCapitalizeAll = (str) => {
  let capitalizeArr = [];
  str.split(" ").forEach(elem => {
    capitalizeArr.push(elem.charAt(0).toUpperCase() + elem.slice(1));
  });
  return capitalizeArr.join(" ");
};

console.log(jsCapitalizeAll("imma hero here."));
// Imma Hero Here
