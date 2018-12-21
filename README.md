# thesustainabletour.com
Repository of "The Sustainable Tour" website.

## Project informations:
These are the services/libraries that this project uses:
- **react**
- **scss** for styling the components
- **bootstrap** for responsiveness
- **axios** for REST requests
- **firebase** as noSQL database

We do NOT include these services/libraries:
- **reactstrap** because we create the components from scratch
- **jquery/popper** because we don't want to use bootstrap components

## How to install
Simply run this command in the project folder:
```shell
npm install
```

## How to start and build
In order to start the preview of the project, run:
```shell
npm start
```
To build the project:
```shell
npm run build
```

## Continous integration
This repository is linked with Netlify. Every commit in the `master` branch is intercepted by Netlify and a build will be created and hosted automatically on the website.

## Project branches
In oder to contribute to the project, please follow these rules regarding branches:
```
master        X_____________________________________H___...
dev                 \__________________T___F__/ \_______...
feature-name            \__D__T__P__/
```
- `X` project start
- `D` development commits
- `T` testing
- `P` pull request
- `F` integration fixes
- `H` hotfix
If possible, do not commit on master.
When you want to develop a new feature/component, create a new branch from `dev` branch and calling following the **kebab-case** notation.
For example: `map` or `instagram-card`.

After the development phase, please test the component(s) that you created with `jest` or manually.

After the testing phase, if everything works fine, you can merge your branch with the `dev` branch. If the branch is useless after the merge, you can delete the branch.

You can test and fix integration and general bugs on `dev` branch after the merge.

The merging to the `master` branch must be done if everything works fine.
You can include hot-fixes in the `master` branch if necessary. Just try to do one single commit fixing multiple issues on `master` branch.

## Commits description
When writing the commit description, please consider these rules:
```
First line is for a short description
Second line on, you should close issues by writing, for example:
closed #34, or fix #34 in case of a bugfix.
```
You can close features/bugs by adding one of these words before the issue number:
- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved
You should add bugs and new features in the issue section of github before closing them. If it's a stupid bug, please do not add it to the issue list.

## How to create an issue
In order to create an issue, go to the **Issue** tab on github site, and click **New Issue** button.
You should fill these informations:
- **title** (mandatory)
- **comment** (optional, but strongly suggested in case of bugs)
- **Assignees** (optional) write your name if you want to fix it
- **Labels**: `feature` or `bug`
- **Project**: `feature list` or `bug list`

You can monitor the features and the bug status in the **Projects** section in the repository.
