"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = __importDefault(require("./index.js"));
test('one: switches object keys and return values', function () {
    var translate = {
        1: 'um',
        2: 'dois',
        '3': 'três',
    };
    var one = index_js_1.default.switch(1, translate);
    var two = index_js_1.default.switch(2, translate);
    var three = index_js_1.default.switch(3, translate);
    var four = index_js_1.default.switch(4, translate);
    var five = index_js_1.default.switch(5, {});
    expect(one).toBe('um');
    expect(two).toBe('dois');
    expect(three).toBe('três');
    expect(four).toBe(undefined);
    expect(five).toBe(undefined);
});
test('one: it retrieves a default value', function () {
    var dictionary = {
        'cat': 'Felis catus',
        'lion': 'Panthera leo',
        'dog': 'Canis familiaris'
    };
    var catGiven = index_js_1.default.switch('cat', dictionary);
    var lionGiven = index_js_1.default.switch('lion', dictionary);
    var dogGiven = index_js_1.default.switch('dog', dictionary);
    var alienGivenWithNoDefault = index_js_1.default.switch('alien', dictionary);
    var alienGivenWithDefault = index_js_1.default.switch('alien', dictionary, { default: 'Species not found!' });
    expect(catGiven).toBe('Felis catus');
    expect(lionGiven).toBe('Panthera leo');
    expect(dogGiven).toBe('Canis familiaris');
    expect(alienGivenWithNoDefault).toBe(undefined);
    expect(alienGivenWithDefault).toBe('Species not found!');
});
test('one: I can use an array of objects for the switch', function () {
    var obj = [
        {
            case: function (str) { return str.includes('cat'); },
            value: 'Felis catus'
        },
        {
            case: function (str) { return str.includes('lion'); },
            value: 'Panthera leo'
        },
        {
            case: function (str) { return str.includes('dog'); },
            value: 'Canis familiaris'
        }
    ];
    var catGiven = index_js_1.default.switch('nice cat', obj);
    var lionGiven = index_js_1.default.switch('brave lion', obj);
    var dogGiven = index_js_1.default.switch('coward dog', obj);
    var alienGivenWithNoDefault = index_js_1.default.switch('alien', obj);
    var alienGivenWithDefault = index_js_1.default.switch('alien', obj, { default: 'Species not found!' });
    expect(catGiven).toBe('Felis catus');
    expect(lionGiven).toBe('Panthera leo');
    expect(dogGiven).toBe('Canis familiaris');
    expect(alienGivenWithNoDefault).toBe(undefined);
    expect(alienGivenWithDefault).toBe('Species not found!');
});
