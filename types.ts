interface Foo {
  baz(): string
}

class Bar implements Foo {
  baz (): string {
    return 'quux'
  }
}

export { Foo, Bar }
