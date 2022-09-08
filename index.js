class Formatter {
  //add static methods here
  static capitalize(str){
//capitalizefirst letter
return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    //remove all aphanumerics except dash(-), quotes(""), space( ),
    //match the 
    const rem = /[^0-9 a-zA-Z'-]/g;
    return str.replace(rem,'')
   
  }
static titleize(str){
  //capitalize all words in a sentence
  //except the, a, an, but, of, and, for, at, by and from
  //always capitalize the first word
const except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
const strCheck = str.split(" ");
const output = [];
for(let i = 0; i < strCheck.length; i++){
if(i == 0){
  output.push(this.capitalize(strCheck[i]))
}
else{
  if(except.includes(strCheck[i])){
    output.push(strCheck[i])
  }
  else{
    output.push(this.capitalize(strCheck[i]))
  }
}
}
return output.join(" ")

}
}