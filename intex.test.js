"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
test('one: switches object keys and return values', function () {
    var translate = {
        1: 'um',
        2: 'dois',
        '3': 'três',
    };
    var one = index_1.default.switch(1, translate);
    var two = index_1.default.switch(2, translate);
    var three = index_1.default.switch(3, translate);
    var four = index_1.default.switch(4, translate);
    var five = index_1.default.switch(5, {});
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
    var catGiven = index_1.default.switch('cat', dictionary);
    var lionGiven = index_1.default.switch('lion', dictionary);
    var dogGiven = index_1.default.switch('dog', dictionary);
    var alienGivenWithNoDefault = index_1.default.switch('alien', dictionary);
    var alienGivenWithDefault = index_1.default.switch('alien', dictionary, { default: 'Species not found!' });
    expect(catGiven).toBe('Felis catus');
    expect(lionGiven).toBe('Panthera leo');
    expect(dogGiven).toBe('Canis familiaris');
    expect(alienGivenWithNoDefault).toBe(undefined);
    expect(alienGivenWithDefault).toBe('Species not found!');
});
