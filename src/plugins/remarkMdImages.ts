import remarkParse from 'remark-parse';
import { unified, type Transformer } from 'unified';
import { visit } from 'unist-util-visit';

type ImageNode = {
  type: 'image';
  url: string;
  alt: string;
};

type Node = ImageNode;

type Parent = {
  children: Node[];
};

const parser = unified().use(remarkParse);

export const remarkMdImages = (): Transformer => {
  return (tree, _, done) => {
    visit(tree, 'image', (node: Node, index: number, parent: Parent) => {
      // TODO 해싱된 url을 사용하도록 변경
      const { url, alt } = node;

      const newTree = parser.parse(
        [
          `<figure>`,
          `<img src="${url}?url" alt="${alt}" loading="lazy" decoding="async" />`,
          `</img>`,
          `<figcaption>${alt}</figcaption>`,
          `</figure>`,
        ].join(''),
      );

      parent?.children.splice(index || 0, 1, ...(newTree.children as Node[]));
    });

    done();
  };
};
