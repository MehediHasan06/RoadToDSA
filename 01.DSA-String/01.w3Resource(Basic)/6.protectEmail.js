let protectEmail = (mail) => {
  let mailSplitter = mail.split("@");  
  let protectedPart = mailSplitter[0].slice(0, Math.ceil(mailSplitter[0].length/2));
  return protectedPart + "...@" + mailSplitter[1];
}

console.log(protectEmail("mehedihasan@gmail.com"));