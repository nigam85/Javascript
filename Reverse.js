const string = "This is a sunny day";

//reverse string
const reverseallstrings = reverseWord(string,"");

const output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}