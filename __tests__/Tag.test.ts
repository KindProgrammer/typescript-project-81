import { expect, test } from 'vitest'
import Tag from '../src/Tag'

test('Single tag', () => {
  const input = new Tag('input', [{ name: 'type', value: 'submit' }])
  const inputString = input.toString()
  expect(inputString).toBe('<input type="submit"/>')
})
