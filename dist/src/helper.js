"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper = {
    upperWord: (phrase) => {
        const phraseReplace = phrase.replace(/(^\w{1})|(\s+\w{1})/g, (word) => word.toUpperCase());
        return phraseReplace;
    },
};
exports.default = helper;
//# sourceMappingURL=helper.js.map