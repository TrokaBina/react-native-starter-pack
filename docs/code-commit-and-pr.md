# Code Commit and Pull Request Guidelines

## Commit your changes

Commit your changes using a descriptive commit message that follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. For the commit message, use the following format:

### <a name="commit-message-format"></a>Commit Message Format

```
<type>(<scope>): <ticket number> <description>
  |       |            |               | 
  |       |            |               |
  |       |            |               |
  |       |            |               |
  |       |            |               |
  |       |            |               |
  |       |            |               └─⫸ Summary in present tense. small case. no period at the end
  |       |            |
  |       |            |
  |       |            | 
  |       |            └─⫸ if the commit is related to a ticket, put the ticket number 
  |       |
  |       |
  |       |
  |       └─⫸ Commit Scope
  |
  |
  |
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|revert|style|test

```

### Scope

Scope should be based on the feature/flow in which the changes made is related.
Example 1: if the changes made is related with onboarding flow, the scope should be onboarding.
Example 2: if the changes made is not related with any flow, the scope should be based on the file or folder name.

### Commit Example

1. New feature to onboarding flow

```
feat(onboarding): <ticket number> add onboarding flow
```

2. Fixing a bug in onboarding flow

```
fix(onboarding): <ticket number> fix a bug in onboarding flow
```

3. Update the documentation 

```
docs(README):  update the documentation
```

## Pull Request

When you are ready to submit your changes for review, create a pull request. A pull request will be reviewed by the team and merged into the main branch.

-   Make sure to target the `main` branch, and use `main` as the base branch.
-   PR title should follow the [commit message format](#commit-message-format).
-   Provide a detailed description of the changes in the pull request template.
-   Once you submit the pull request, the team will review your changes and provide feedback. They may ask for changes or clarifications before merging the changes, and taged with  `Code Review` label.
    -   `[R]` - Required change requested. Blocker.
    -   `[M]` - Minor change, good to have, but not a blocker.
    -   `[S]` - Suggestion, not a blocker. Up for discussion.
    -   `[Q]` - Question. 



## How do we implement this guideline? (Good to know)

-   We refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to format our commit messages.
-   In our project, we install [husky](https://github.com/typicode/husky) to run our commit hooks and also to lint our code.
-   We implement it with [commitlint](https://github.com/conventional-changelog/commitlint) to lint our commit messages.

