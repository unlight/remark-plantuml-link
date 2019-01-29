import * as plantuml from './plantuml';
import { UNIST } from 'unist'; // tslint:disable-line:no-implicit-dependencies
const visit = require('unist-util-visit');

const defaultOptions = {
    imageUrl: 'http://www.plantuml.com/plantuml/png',
};

export type Options = Partial<typeof defaultOptions>;
type UnistNode = Partial<UNIST.Text & UNIST.Parent>;

export function remarkPlantumlPlugin(options: Options = {}) {
    options = { ...defaultOptions, ...options };
    return function remarkPlantumlTransform(root) {
        visit(root, 'html', function remarkPlantumlPluginVisitNode(node: UnistNode, index: number, parent: UnistNode) {
            if (node.value) {
                const imageNode = plantuml.getImageNode(node.value, options);
                if (imageNode && parent && parent.children) {
                    const next = <UnistNode>parent.children[index + 1];
                    if (next && next.type === 'paragraph' && next.children && next.children[0] && next.children[0].type === 'image') {
                        next.children[0] = imageNode;
                    } else {
                        (<UnistNode[]>parent.children).splice(index + 1, 0, { type: 'paragraph', children: [imageNode] });
                    }
                }
            }
        });
    };
}
