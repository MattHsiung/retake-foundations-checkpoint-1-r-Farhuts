function rememberTheProperties(){
  return function(obj2){
    // the key to this problem is using closure,
    // which will allow the function returned to "remember"
    // here, you're creating a new obj on every function call
    // but what we want is a shared instance that we can operate on
    // this means we need to create the object outside of this function's scope!
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
