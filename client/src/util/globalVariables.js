var globalVariables = (function (){

    var key = "";

    var getKey = function () {
        return this.key; // Or pull this from cookie/localStorage
      };

      var setKey = function (key) {
        this.key = key;
        // Also set this in cookie/localStorage
      };

      return {
        getKey: getKey,
        setKey: setKey
      }


 })();

 export default globalVariables ;