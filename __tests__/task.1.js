const JSDOM = require('jsdom').JSDOM;
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const htmlStr = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(htmlStr);
global.window = dom.window;
global.document = window.document;
global.console.log = jest.fn();

describe('1. Children', () => {
    it('`#wrapper`\'s children are printed to the console', () => {
        require('../index')
        const wrapper = document.getElementById('wrapper');
        expect(console.log).toHaveBeenCalledWith(wrapper.children)
    });
    it('Number of `#wrapper`\'s children is printed to the console', () => {
        require('../index')
        const wrapper = document.getElementById('wrapper');
        expect(console.log).toHaveBeenCalledWith(wrapper.childElementCount)
    });
}); 
