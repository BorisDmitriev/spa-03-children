const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const path = require('path');
const htmlStr = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(htmlStr);
global.window = dom.window;
global.document = window.document;
global.console.log = jest.fn();

describe('3. Class names', () => {
    it('Should print the element with the highest number of classes and the total number of classes.', () => {
        require('../index')
        const wrapper = document.getElementById('wrapper');
        const list = wrapper.children
        const expected =  { numberOfClasses: 0 }

        for (let index = 0; index < list.length; index++) {
            const element = list[index];
    
            if (element.classList.length > expected.numberOfClasses) {
                expected.numberOfClasses = element.classList.length;
                expected.element = element;
            }
        }
        expect(console.log).toHaveBeenCalledWith(expected);
    });
});