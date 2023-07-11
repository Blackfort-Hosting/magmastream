import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'

/**
 * @type {import('unified').Plugin<void[], import('mdast').Root>}
 */
export default function remarkSqueezeParagraphs() {
  return squeezeParagraphs
}
