"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _gitmojiRegex = require("@gitmoji/gitmoji-regex");
var gitmojiCodeStr = _gitmojiRegex.gitmojiCodeRegex.source;
var gitmojiUnicodeStr = _gitmojiRegex.gitmojiUnicodeRegex.source;
var emojiStr = _gitmojiRegex.emojiRegex.source;
var _default = {
  // Test URL: https://regex101.com/r/WXbn1P/1
  headerPattern: new RegExp("^(?:".concat(gitmojiCodeStr, "|(?:").concat(gitmojiUnicodeStr, ")|(?:").concat(emojiStr, "))\\s(?<type>[a-zA-Z-,\/]+)(?:\\((?<scope>.*)\\))?!?:\\s(?<subject>(?:(?!#).)*(?:(?!\\s).))(?:\\s\\(?(?<ticket>#\\d*)\\)?)?$")),
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket']
};
exports.default = _default;
module.exports = exports.default;