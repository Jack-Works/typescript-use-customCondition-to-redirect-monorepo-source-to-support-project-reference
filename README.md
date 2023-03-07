# Before started

Run `pnpm install`

I committed the lib/dist folder to simulate the situation that there is a previous build, so you can see the cons of example-1

# example-1-no-reference

This is the example of how project reference NOT work well inside a monorepo.

Run `npx tsc -b .\example-1-no-reference\app`, there is no error, which is unexpected.

# example-2-path

Not a good solution:

We resolve this problem by using "path" in the tsconfig.json. It... quite annoying and need a lot of manually syncing
but works.

Run `npx tsc -b .\example-2-path\app`, there is error (which is expected), BUT it's hard to maintain.

# example-3-conditions

Not working!

I try to resolve this problem by using new `customConditions`, but it does not work.

Run `npx tsc -b .\example-3-conditions\app`, I'd expect the same error as example-2, but it does not!
