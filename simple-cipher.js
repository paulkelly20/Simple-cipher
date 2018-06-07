
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var Cipher = function(key){
  if (validKeyChecker(key)){
  if(key !== undefined){
  this.key = key;}
  else this.key = randomCipher();}
  else throw new Error('Bad key');
};

var validKeyChecker = function(key){
  if(/[a-z]/.test(key)){
    return true;
  }; return false;
};

var randomCipher =  function() {
  newKey = [];
  for(var i = 0; i <= 111;i++){
    newKey.push(alphabet[Math.floor(Math.random() * alphabet.length -1)]);
    };
    return newKey.join("");
  };

Cipher.prototype.encode = function (string) {
  var stringArray = string.split("")
  var result = [];
  if(this.key.length < string.length){
  do {
    this.key += this.key
  } while (this.key.length < string.length);}

  for (var i = 0; i < stringArray.length; i++) {
    var indexMsg = alphabet.indexOf(stringArray[i]);
    var indexKey = alphabet.indexOf(this.key[i])
    var newIndex = indexMsg + indexKey;
    if(newIndex > 25){
      newIndex -= 26;
    }
    result.push(alphabet[newIndex]);
  }

  return result.join("");
};

Cipher.prototype.decode = function (string) {
  var stringArray = string.split("")
  var result = [];
  for (var i = 0; i < stringArray.length; i++) {
    var indexMsg = alphabet.indexOf(stringArray[i]);
    var indexKey = alphabet.indexOf(this.key[i])
    var newIndex =  indexMsg - indexKey;
    if(newIndex < 0){
      newIndex += 26;
    }
    result.push(alphabet[newIndex]);
  }

  return result.join("");
};

module.exports = Cipher;
