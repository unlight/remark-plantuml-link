import { Options } from './remark-plantuml-plugin';
const plantumlEncoder = require('plantuml-encoder');

// eslint-disable-next-line consistent-return
export function getImageNode(html: string, options: Options) {
    const matches = html.match(/<!-{2,}\s+`{3}([^\n]+)\s+([^]+)\s+`{3}\s+-{2,}>/);
    if (matches !== null && (matches[1] === 'plantuml' || matches[1] === 'puml')) {
        const body = matches[2];
        const encoded = plantumlEncoder.encode(body);
        return {
            type: 'image',
            url: `${options.imageUrl}/${encoded}`,
            alt: undefined,
            title: undefined,
        };
    }
}
