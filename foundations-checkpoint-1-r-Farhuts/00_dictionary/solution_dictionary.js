// solution
function Dictionary(arr){
  if(Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      // let word = arr[i][0];
      // let def = arr[i][1];
      let [word, def] = arr[i];
      this[word] = def;
    }
  }
}

Dictionary.prototype.newEntry = function(pair){
  let [word, def] = pair;
  this[word] = def;
}

Dictionary.prototype.getDefinition = function(word){
  if(!this[word]){
    return `Can't find the definition for the word ${word}`;
  }
  return this[word];
}

Dictionary.prototype.getWordsWithFirstLetter = function(letter){
  let obj = {};
  for(let word in this){
    let def = this[word];
    if(word[0] === letter){
      obj[word] = def;
    }
  }
  return obj;
}
