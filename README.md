# remark-plantuml-link

Generate a plantuml image link from text

## Install

```sh
npm install --save-dev remark-plantuml-link
```

## Usage

````javascript
const remark = require('remark');
const plantumlLink = require('remark-plantuml-link');
const input = '<!-- ```plantuml\n(A)\n``` -->';
const output = remark().use(plantumlLink).processSync(input).toString();
````

Input:

    <!-- ```plantuml
    (A)
    ``` -->

Output:

    <!-- ```plantuml
    (A)
    ``` -->

    ![](http://www.plantuml.com/plantuml/png/qt3K1000)

## Similar Projects

-   <https://github.com/BrekiTomasson/remark-plantuml>

## License

[MIT](LICENSE)
