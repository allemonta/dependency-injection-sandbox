import { injectable, inject, delay, container } from "tsyringe"
import Foo from "$entities/Foo"

@injectable()
export default class Bar {
  constructor(
    @inject(delay(() => Foo))
    public foo: Foo
  ) {}

  name = "bar"

  static token = Symbol("Bar")
}

container.register(Bar.token, Bar)
