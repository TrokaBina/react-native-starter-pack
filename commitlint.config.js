/**
 * @type {UserConfig} from '@commitlint/types'
 * @rules https://commitlint.js.org/#/reference-rules
 *
 */
const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    /** The configuration array contains: [level, applicable, value]
     *  - level: 0(disable), 1(warning), 2(error)
     *  - applicable: 'always' | 'never'; Where 'never' will invert the rule
     *      Example: 'scope-empty' with applicable of 'always' means that the scope needs to be empty.
     *               'scope-empty' with applicable of 'never' means that it can never be empty.
     *  - value: depends on the rules https://commitlint.js.org/#/reference-rules
     *
     * */

    // Type
    "type-enum": [
      2,
      "always",
      [
        "build",
        "bump",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "task",
        "test",
        "patch",
      ],
    ],
    "type-min-length": [2, "always", 2],
    // Scope
    "scope-case": [1, "always", "camel-case"],
    "scope-min-length": [2, "always", 3],
    "scope-empty": [2, "never"],
    // Subject
    "subject-case": [0],
  },
};

module.exports = Configuration;
