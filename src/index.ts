import "reflect-metadata"
import { container } from "tsyringe"
import Foo from "$entities/Foo"
import Bar from "$entities/Bar"

const foo = container.resolve<Foo>(Foo.token)
const bar = container.resolve<Bar>(Bar.token)

console.log(foo.name)
console.log(bar.name)
