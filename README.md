# ReDI Job Board
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is the open source ReDI Job Board. This board was created and is maintained by volunteers, teachers and students from [ReDi School](redi-school.org).

![Linter](https://github.com/lopis/job-board/actions/workflows/linter.yml/badge.svg)
![Unit Tests](https://github.com/lopis/job-board/actions/workflows/test.yml/badge.svg)
![Deploy](https://github.com/lopis/job-board/actions/workflows/deploy.yml/badge.svg)

## Development setup

Install project dependencies

```
yarn
```

Run the app in dev mode

```
yarn dev
```

## Deploying app to production

Do be implemented soon

## Running automated test

The app is covered by jest unit tests.
To run the unit tests in your local environment:

```
yarn            # install dependencies
yarn test       # run tests
```

## Contributing

To contribute to this project there are some guidelines to follow.

1. Check the [Project Tab](https://github.com/lopis/job-board/projects) for tasks in the "TODO" column that are linked to unassigned issues.

2. To contribute code, open a pull request. Add a description to your PR. Your PR should be consise - avoid addressing multiple issues and refactorings in the same PR.

3. Check for open pull requests that might need code reviews. Only PRs with at least one review can be merged.

4. We don't argue about tabs vs spaces or semicolon vs no-semicolon. Run `yarn lint` to fix code style issues before commiting your code. Your code will be automatically rejected if the code style is not followed. Remove more below about how to keep your code tidy.

5. If you are adding a new feature, add unit tests that cover it.

## Keeping your code lint free

Following a coherent code style keeps the code looking more tidy and uniform.
This project follows a style defined in two config files: `.editorconfig` and `.eslintrcjs`.
Ideally, you would not need to worry about respecting the code style if you setup your editor to care about that for you.

If you use VSCode, you'll want to install [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). It's also useful to enable the setting `"editor.formatOnSave": true` to automatically format your code when you save a file.

## List of contributors

<a href="https://github.com/lopis/job-board/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lopis/job-board" />
</a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.jlopes.dev"><img src="https://avatars.githubusercontent.com/u/2715751?v=4?s=100" width="100px;" alt=""/><br /><sub><b>João Lopes</b></sub></a><br /><a href="https://github.com/ReDI-School/job-board/commits?author=lopis" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!