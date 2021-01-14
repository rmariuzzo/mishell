'use strict'
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
Object.defineProperty(exports, '__esModule', { value: true })
exports.AppError = exports.ErrorCode = void 0
var ErrorCode
;(function (ErrorCode) {
  ErrorCode[(ErrorCode['unhandled'] = 99)] = 'unhandled'
  ErrorCode[(ErrorCode['commandNotFound'] = 4)] = 'commandNotFound'
})((ErrorCode = exports.ErrorCode || (exports.ErrorCode = {})))
var AppError = /** @class */ (function (_super) {
  __extends(AppError, _super)
  function AppError(code, message) {
    var _this = _super.call(this, message) || this
    Object.setPrototypeOf(_this, AppError.prototype)
    _this.code = code
    return _this
  }
  return AppError
})(Error)
exports.AppError = AppError
