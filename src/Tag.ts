export interface Attr {
  name: string
  value: string | number
}

export default class Tag {
  tagName: string
  attrs: Attr[]
  content?: string | number | Tag

  constructor(tagName: string, attrs: Attr[] = [], content?: string | number | Tag) {
    this.tagName = tagName
    this.attrs = attrs
    this.content = content
  }

  private makeAttrs(): string {
    return this.attrs.map(attr => ` ${attr.name}="${attr.value}"`).join(' ')
  }

  toString() {
    return `<${this.tagName}${this.makeAttrs()}/>`
  }
}
