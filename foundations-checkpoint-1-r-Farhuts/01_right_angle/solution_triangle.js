function rightAngleTopLeft(num){
  let str = '';
  for(let i = 0; i < num; i++){
    for(let j = i; j < num; j++){
      str += "*";
    }
    for(let s = 0; s < i; s++){
      str += ' ';
    }
    if(i !== (num-1)){
      str += '\n';
    }
  }
  return str;
}

function rightAngleBottomLeft(num){
  let str = '';
  for(let i = num-1; i >=0; i--){
    // console.log(i)
    for(let j = i; j < num; j++){
      str += "*";
    }
    for(let s = i; s > 0; s--){
      str += ' ';
    }
    if(i !== 0){
      str += '\n';
    }
  }
  return str;
}
// 👍 

function rightAngleTopRight(num){


}
function rightAngleBottomRight(num){

}
// If you run out of time try to leave some comments describing your thoughts!
// If you're on the right track I can still give you some partial credit!