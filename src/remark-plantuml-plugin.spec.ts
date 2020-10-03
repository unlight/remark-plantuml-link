import expect from 'expect';
import remark from 'remark';
import { Options, remarkPlantumlPlugin as plugin } from './remark-plantuml-plugin';

function process(markdown: string, options: Options = {}) {
    return remark().use(plugin, options).processSync(markdown).toString();
}

describe('remark plantuml plugin', () => {
    const T = '```';

    it('smoke', () => {
        expect(plugin).toBeTruthy();
    });

    it('process should work', () => {
        const result = process(`# h1`);
        expect(result).toBeTruthy();
    });

    it('single string a', () => {
        const content = '<!-- ```plantuml\n(A)\n``` -->';
        const result: string = process(content);
        expect(JSON.stringify(result.trim())).toEqual(
            JSON.stringify(`${content}\n\n![](http://www.plantuml.com/plantuml/png/qt3K1000)`),
        );
    });

    it('single string b', () => {
        const content = '<!-- ```plantuml\n(B)\n``` -->';
        const result: string = process(content);
        expect(JSON.stringify(result.trim())).toEqual(
            JSON.stringify(`${content}\n\n![](http://www.plantuml.com/plantuml/png/qt3I1000)`),
        );
    });

    it('multiline string', () => {
        const content = '<!-- ```plantuml\n(A)\n(B)\n``` -->';
        const result: string = process(content);
        expect(JSON.stringify(result.trim())).toEqual(
            JSON.stringify(`${content}\n\n![](http://www.plantuml.com/plantuml/png/qt3KvD9mqWG0)`),
        );
    });

    it('should replace existing next image', () => {
        const content = `<!-- ${T}plantuml\n(A)\n${T} -->\n![alt](http://example.com/image)`;
        const result: string = process(content);
        expect(JSON.stringify(result.trim())).toEqual(
            JSON.stringify(
                `<!-- ${T}plantuml\n(A)\n${T} -->\n\n![](http://www.plantuml.com/plantuml/png/qt3K1000)`,
            ),
        );
    });

    it('options server', () => {
        const content = `<!-- ${T}plantuml\n(A)\n${T} -->`;
        const result: string = process(content, { imageUrl: 'http://blinding.com/cattishness' });
        expect(JSON.stringify(result.trim())).toEqual(
            JSON.stringify(`${content}\n\n![](http://blinding.com/cattishness/qt3K1000)`),
        );
    });

    it('not a plantuml code', () => {
        const content = `<!-- ${T}ts\n(A)\n${T} -->`;
        const result: string = process(content);
        expect(JSON.stringify(result.trim())).toEqual(JSON.stringify(content));
    });
});
