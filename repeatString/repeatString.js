const repeatString = function(str, count) {
  if ( count < 0 ){
    return 'ERROR'
}
  
    let name = ''
   for ( let i = 0; i < count; i++){
       name += str  
   }
   return name 
};

module.exports = repeatString;
