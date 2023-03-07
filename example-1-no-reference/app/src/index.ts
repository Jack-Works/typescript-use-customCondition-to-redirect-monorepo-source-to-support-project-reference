import { hello } from '@test-a/lib'
//                     ~~~~~~~~~~~ resolves to "../../lib", but NOT added to the "reference" field in "../tsconfig.json"
// TypeScript also does not warn us!
hello().toExponential()
//     ~~~~~~~~~~~~~~~~
// Runtime Expection: cannot access toExponential of undefined.

// Actually, the signature in "../../lib/src/index.ts" has been updated to `export function hello(): void`
// But since this package does not add a reference to "../../lib/tsconfig.json"
// `tsc -b app` will not include that as a dependency.
// This is unexpected!! If you import it directly
// import { } from '../../lib/src/index.js'
// TypeScript will check it for you!
