# mdast-squeeze-paragraphs

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[mdast][] utility to remove empty paragraphs.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`squeezeParagraphs(tree)`](#squeezeparagraphstree)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that removes empty paragraphs, left over from other
operations, from the tree.
Paragraphs are considered empty if they do not contain non-whitespace
characters.

## When should I use this?

Probably never!
You should try to clean your trees yourself.

A plugin, [`remark-squeeze-paragraphs`][remark-squeeze-paragraphs], exists that
does the same but for [remark][].

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install mdast-util-squeeze-paragraphs
```

In Deno with [`esm.sh`][esmsh]:

```js
import {squeezeParagraphs} from 'https://esm.sh/mdast-util-squeeze-paragraphs@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {squeezeParagraphs} from 'https://esm.sh/mdast-util-squeeze-paragraphs@5?bundle'
</script>
```

## Use

```js
import {u} from 'unist-builder'
import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'

const tree = u('root', [
  u('paragraph', []),
  u('paragraph', [u('text', 'Alpha')]),
  u('paragraph', [u('text', ' ')])
])

squeezeParagraphs(tree)

console.dir(tree, {depth: null})
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children: [ { type: 'text', value: 'Alpha' } ] } ] }
```

## API

This package exports the identifier
[`squeezeParagraphs`][api-squeezeparagraphs].
There is no default export.

### `squeezeParagraphs(tree)`

Remove empty paragraphs in `tree`.

###### Parameters

*   `tree` ([`Node`][node])
    — tree to change

###### Returns

Changed `tree` ([`Node`][node]), or `null` if it was an empty paragraph.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types..

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Security

Use of `mdast-squeeze-paragraphs` does not involve **[hast][]** or user content
so there are no openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-squeeze-paragraphs`][remark-squeeze-paragraphs]
    — remark plugin
*   [`mdast-util-compact`](https://github.com/syntax-tree/mdast-util-compact)
    — make a tree compact

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-squeeze-paragraphs/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-squeeze-paragraphs/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-squeeze-paragraphs.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-squeeze-paragraphs

[downloads-badge]: https://img.shields.io/npm/dm/mdast-squeeze-paragraphs.svg

[downloads]: https://www.npmjs.com/package/mdast-squeeze-paragraphs

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-squeeze-paragraphs.svg

[size]: https://bundlephobia.com/result?p=mdast-squeeze-paragraphs

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/mdast#node

[remark]: https://github.com/remarkjs/remark

[remark-squeeze-paragraphs]: https://github.com/remarkjs/remark-squeeze-paragraphs

[api-squeezeparagraphs]: #squeezeparagraphstree
