import { hello } from '@test-c/lib'
hello()

// NO GOOD!!
// TS reports:
// example-3-conditions/lib/src/index.ts:2:12 - error TS2304: Cannot find name 'myGlobal'.
// This means TypeScript treat it like a normal TS file inside node_modules which has many strange behaviors.
// This project now contain the following files
// - example-3-conditions/app/src/index.ts
// - example-3-conditions/app/node_modules/@test-c/src/index.ts (a symlink to example-3-conditions/lib/src/index.ts)
// Therefore it reports error because "myGlobal" is defined in "../../lib/src/global.d.ts"

// If you don't believe this, run `tsc -b ../lib`, it does not have error.

// Expected behavior:
// TypeScript should report:
// File 'example-3-conditions/lib/src/index.ts' is not listed within the file list of project 'example-3-conditions/app/tsconfig.json'. Projects must list all files or use an 'include' pattern.
// Which indicates you need to add it to the project reference.
