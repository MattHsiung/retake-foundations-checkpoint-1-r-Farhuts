function rememberTheProperties(){
  return function(obj2){
    let obj = {};
    obj.newKeys = [];
    obj.memory = {};
    for(let key in obj2){
      if(obj2.hasOwnProperty(key)){
        obj.newKeys.push(key);
      }
      obj.memory = obj2;
    }
    return obj;
  }
}
