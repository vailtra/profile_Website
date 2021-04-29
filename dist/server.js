"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For HTTP routing
// Creating a new express instance
var app = new _express["default"](); // Generic match to ALL requests and log them to the console

app.use(function (req, res, next) {
  console.log("".concat(req.method, " - ").concat(req.path));
  next();
}); // Serve public folder statically

app.use(_express["default"]["static"]('public')); // Start the server on port 3000

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});