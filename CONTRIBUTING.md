# Contributing to tailwind-light-dark

First off, thank you for considering contributing to tailwind-light-dark! It's people like you that make this plugin useful for the community.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/tailwind-light-dark.git`
3. Install dependencies: `npm install` or `yarn install`
4. Create a branch for your changes: `git checkout -b your-branch-name`

## Development Workflow

1. Make your changes to the codebase
2. We don't have tests yet, but if we did ... Run tests to make sure everything works: `npm test` or `yarn test`
3. Try your changes in the test demos:
   - For Tailwind v3: `cd test-demo-v3 && npm install && npm run dev`
   - For Tailwind v4: `cd test-demo-v4 && npm install && npm run dev`
4. Add or update tests for any new functionality
5. Update documentation as needed

## Pull Request Process

1. Update the README.md with details of changes if appropriate
2. Update the CHANGELOG.md with details of changes
3. Update the version number in package.json following [SemVer](https://semver.org/)
    - Typically `npm version patch`
4. Submit a pull request to the main repository
5. The maintainers will review your PR and might request changes or merge it

## Reporting Issues

When reporting issues, please include:
- A clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshot (if applicable)
- Environment details:
  - Plugin version
  - Tailwind CSS version
  - Node.js version
  - Browser/OS (if relevant)

## Coding Standards

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Testing (You can be the one to add tests! Because I haven't got to it yet)

- Write tests for new features
- Ensure all existing tests pass before submitting a PR
- Test on both Tailwind v3 and v4 where appropriate

## Documentation

- Update the README.md for user-facing changes
- Document any new options or features
- Add JSDoc comments to functions and classes

## License

By contributing to this project, you agree that your contributions will be licensed under the project's [MIT License](LICENSE.md).
