import expect from 'expect';

import { CaptureConsole } from '@aoberoi/capture-console';

describe('example', () => {
    const captureConsole = new CaptureConsole();

    it('example', () => {
        captureConsole.startCapture();
        require('./example');
        captureConsole.stopCapture();
        const output = captureConsole.getCapturedText().join('\n');
        expect(output).toContain('![](http://www.plantuml.com/plantuml/png/qt3K1000)');
    });
});
