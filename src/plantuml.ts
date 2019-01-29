import { Options } from './remark-plantuml-plugin';
const plantumlEncoder = require('plantuml-encoder');

export function getImageNode(html: string, options: Options) {
    const matches = html.match(/<![-]{2,}\s+\u0060{3}([^\n]+)\s+([^]+)\s+\u0060{3}\s+[-]{2,}>/);
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
    return undefined;
}
