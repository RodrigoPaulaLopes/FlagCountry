"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryNumber_json_1 = __importDefault(require("../json/countryNumber.json"));
const countryFlag_json_1 = __importDefault(require("../json/countryFlag.json"));
const helper_1 = __importDefault(require("../helpers/helper"));
const controller = {
    healthcheck: (req, res) => res.sendStatus(200),
    getCountry: (req, res) => {
        const name = helper_1.default.upperWord(req.params.name);
        console.log(`Searched by name: ${name}`);
        const countryNumberFind = countryNumber_json_1.default.find((data) => data.name === name);
        const countryFlagFind = countryFlag_json_1.default.find((value) => value.name === name)?.image;
        if (countryNumberFind === undefined || countryFlagFind === undefined) {
            return res.status(404).send();
        }
        return res.status(200).json({
            ddi: countryNumberFind.dial_code,
            image: countryFlagFind,
        });
    },
    getAllCountry: (req, res) => {
        const countryNumberFind = countryNumber_json_1.default.filter((data) => data.code);
        const countryFlagFind = countryFlag_json_1.default.filter((value) => value.code);
        const flags = [];
        countryNumberFind.forEach(data => {
            countryFlagFind.forEach(data2 => {
                if (data.code == data2.code) {
                    flags.push({ ddi: data.dial_code, image: data2.image });
                }
            });
        });
        if (countryNumberFind === undefined || countryFlagFind == undefined) {
            return res.status(404).send();
        }
        if (flags === undefined || flags == null) {
            return res.status(404).send();
        }
        res.status(200).json(flags);
    },
};
exports.default = controller;
//# sourceMappingURL=controller.js.map