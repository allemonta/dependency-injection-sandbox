import { injectable, inject, delay, container } from "tsyringe"
import Bar from "$entities/Bar"

@injectable()
export default class Foo {
  constructor(
    @inject(delay(() => Bar))
    public bar: Bar
  ) {}

  name = "foo"

  static token = Symbol("Foo")
}

container.register(Foo.token, Foo)
