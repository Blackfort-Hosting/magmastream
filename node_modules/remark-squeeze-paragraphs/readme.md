# remark-squeeze-paragraphs

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to remove empty (or white space only) paragraphs.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkSqueezeParagraphs)`](#unifieduseremarksqueezeparagraphs)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin to remove empty paragraphs.

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**remark** adds support for markdown to unified.
**mdast** is the markdown AST that remark uses.
This is a remark plugin that transforms mdast.

## When should I use this?

This project is mostly useful when you’re using other plugins that remove things
from the AST (such as [`remark-strip-badges`][remark-strip-badges]).
You can then use this plugin afterwards to clean stray empty paragraphs.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install remark-squeeze-paragraphs
```

In Deno with [Skypack][]:

```js
import remarkSqueezeParagraphs from 'https://cdn.skypack.dev/remark-squeeze-paragraphs@5?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import remarkSqueezeParagraphs from 'https://cdn.skypack.dev/remark-squeeze-paragraphs@5?min'
</script>
```

## Use

```js
import {remark} from 'remark'
import remarkStripBadges from 'remark-strip-badges'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'

main()

async function main() {
  console.log(
    (
      await remark()
        .use(remarkStripBadges)
        .process('![](https://img.shields.io/)\n\ntext')
    ).toString()
  )
  // => '\n\ntext\n'

  console.log(
    (
      await remark()
        .use(remarkStripBadges)
        .use(remarkSqueezeParagraphs)
        .process('![](https://img.shields.io/)\n\ntext')
    ).toString()
  )
  // => 'text\n'
}
```

## API

This package exports no identifiers.
The default export is `remarkSqueezeParagraphs`.

### `unified().use(remarkSqueezeParagraphs)`

Remove empty (or white space only) paragraphs.
There are no options.

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

This plugin works with `unified` version 3+ and `remark` version 4+.

## Security

Use of `remark-squeeze-paragraphs` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Related

*   [`mdast-squeeze-paragraphs`][mdast-squeeze-paragraphs]
    — mdast utility with similar functionality

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://github.com/remarkjs/remark-squeeze-paragraphs/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-squeeze-paragraphs/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-squeeze-paragraphs.svg

[coverage]: https://codecov.io/github/remarkjs/remark-squeeze-paragraphs

[downloads-badge]: https://img.shields.io/npm/dm/remark-squeeze-paragraphs.svg

[downloads]: https://www.npmjs.com/package/remark-squeeze-paragraphs

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-squeeze-paragraphs.svg

[size]: https://bundlephobia.com/result?p=remark-squeeze-paragraphs

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[unified]: https://github.com/unifiedjs/unified

[mdast-squeeze-paragraphs]: https://github.com/syntax-tree/mdast-squeeze-paragraphs

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[typescript]: https://www.typescriptlang.org

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast

[remark-strip-badges]: https://github.com/remarkjs/remark-strip-badges
