const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const path = require('path');
const htmlStr = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(htmlStr);
global.window = dom.window;
global.document = window.document;
global.console.log = jest.fn();

describe('2. Children\'s children', () => {
    it('Children of each child of `#wrapper` are printed to the console', () => {
        require('../index')
        const wrapper = document.getElementById('wrapper');
        for (let index = 0; index < wrapper.children.length; index++) {
            const element = wrapper.children[index];
            //console.log(element.children, element.children.length);
            expect(console.log).toHaveBeenCalledWith(element.children);
        }
      
    });
    it('Number of children of each child of `#wrapper` is printed to the console', () => {
        require('../index')
        const wrapper = document.getElementById('wrapper');
        for (let index = 0; index < wrapper.children.length; index++) {
            const element = wrapper.children[index];
            //console.log(element.children, element.children.length);
            expect(console.log).toHaveBeenCalledWith(element.children.length);
        }
      
    });
} );
