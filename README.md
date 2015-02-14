# schema-table-markdown

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

Convert a schema table into markdown

## Example

```json
{
  "devDependencies: {
    "pre-commit": "~1.0.2",
    "schema-table-markdown": "~2.2.0"
  },
  "scripts": {
    "schema-doc": "sirvice-display --format schemaTable --json | schema-table-markdown > docs/schema.md"
  },
  "pre-commit": [
    "schema-doc"
  ],
  "pre-commit.silent": true,
}
```

Add `schema-table-markdown` to your project, add a pre-commit hook to run the schema documentation generation.

Use `sirvice-display` to generate a schema table from your service and pass it through `schema-table-markdown`.

This will generate your documentation :)

## Installation

`npm install schema-table-markdown`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licensed

  [build-png]: https://secure.travis-ci.org/Raynos/schema-table-markdown.png
  [build]: https://travis-ci.org/Raynos/schema-table-markdown
  [cover-png]: https://coveralls.io/repos/Raynos/schema-table-markdown/badge.png
  [cover]: https://coveralls.io/r/Raynos/schema-table-markdown
  [dep-png]: https://david-dm.org/Raynos/schema-table-markdown.png
  [dep]: https://david-dm.org/Raynos/schema-table-markdown
  [npm-png]: https://nodei.co/npm/schema-table-markdown.png?stars&downloads
  [npm]: https://nodei.co/npm/schema-table-markdown
