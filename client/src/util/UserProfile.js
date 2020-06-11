var UserProfile = (function() {
    var name = "";
    var role="";
  
    var getName = function() {
      return this.name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      this.name = name;     
      // Also set this in cookie/localStorage
    };

    var getRole = function() {
        return this.role;    // Or pull this from cookie/localStorage
      };
    
      var setRole = function(role) {
        this.role = role;     
        // Also set this in cookie/localStorage
      };
    
  
    return {
      getName: getName,
      setName: setName,
      getRole: getRole,
      setRole: setRole
    }
  
  })();
  
  export default UserProfile;