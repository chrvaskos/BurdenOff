var UserProfile = (function () {
  var name = "";
  var role = "0";
  var ID = "";
  var verified = "";

  var getName = function () {
    return this.name; // Or pull this from cookie/localStorage
  };
  var getID = function () {
    return this.ID; // Or pull this from cookie/localStorage
  };

  var setVerified = function (verified) {
    this.verified = verified;
    // Also set this in cookie/localStorage
  };

  var getVerified = function () {
    return this.verified; // Or pull this from cookie/localStorage
  };

  var setID = function (ID) {
    this.ID = ID;
    // Also set this in cookie/localStorage
  };

  var setName = function (name) {
    this.name = name;
    // Also set this in cookie/localStorage
  };

  var getRole = function () {
    return this.role; // Or pull this from cookie/localStorage
  };

  var setRole = function (role) {
    this.role = role;
    // Also set this in cookie/localStorage
  };

  var logOut = function () {
    console.log("eimai to logout");
    this.role = "0";
    this.name = "";
    this.ID = "";
    this.verified = "";
  };

  return {
    getName: getName,
    setName: setName,
    getRole: getRole,
    setRole: setRole,
    getID: getID,
    setID: setID,
    logOut: logOut,
    getVerified: getVerified,
    setVerified: setVerified
  };
})();

export default UserProfile;
