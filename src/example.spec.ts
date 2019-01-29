import * as expect from 'expect';
const capcon = require('capture-console');
let output = '';

describe('example', () => {

    before(() => {
        capcon.startCapture(process.stdout, function(stdout) {
            output += stdout;
        });
    });

    after(() => {
        capcon.stopCapture(process.stdout);
        expect(output).toContain('![](http://www.plantuml.com/plantuml/png/qt3K1000)');
    });

    it('example', () => {
        require('./example');
    });

});

