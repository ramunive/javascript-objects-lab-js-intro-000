var recipes = {flour: "1 cup", eggs: 3};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
