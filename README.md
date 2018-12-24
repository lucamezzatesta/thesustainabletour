# thesustainabletour.com
Repository of "The Sustainable Tour" website.

## Table of contents
1. [Project Informations](#project-informations)
2. [How to install](#how-to-install)
3. [How to start and build](#how-to-start-and-build)
4. [Project file structure](#project-file-structure)
5. [Continous integration](#continous-integration)
6. [Project branches](#project-branches)
7. [Commit messages](#commit-messages)
8. [Issues creation](#issues-creation)
9. [Useful Atom packages](#useful-atom-packages)

## Project informations:

### Libraries and services
These are the services/libraries that this project uses:
- **react**
- **classname** library for concatenating classes in react
- **react-device-detect** library for rendering different components on different device sizes
- **google-map-react** for loading Google Maps
- **scss** for styling
- **bootstrap** for responsiveness
- **axios** for REST requests
- **firebase** as noSQL database
- **gsap** for animations
- **scrollmagic** for scrolling the magic
- **icomoon** for creating the icon font

We do **NOT** include these services/libraries:
- **reactstrap** because we create the components from scratch
- **jquery/popper** because we don't want to use bootstrap components

### Styling
In order to specify `font-size` to text element, please consider that `html` has this rule applied:
```css
html {
  font-size: 62.5%;
}
```
for this reason `1rem` is equal to `10px`.


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

## Project file structure
The project's file structure respects these schema:
- `api` - here you should add files regarding API calls
  - `APIUtils.js (example)`
  - `InstagramAPI.js (example)`
  - `...`
- `assets` - here there are all the assets...
  - `fonts` - ... divided by type
  - `icons` - we use font-icons made with **icomoon**
  - `images`
  - `...`
- `components`
  - `ComponentName` - folder with the name of the component (in CamelCase)
    - `ComponentName.jsx`
    - `ComponentName.scss`
    - `...`
  - `...`
- `pages` - folder containing all the pages
  - `Home`
    - `Home.jsx`
    - `Home.scss`
    - `...`
  - `...`
- `style` - folder cotaining the style of the app (theme, typography, etc.)
  - `style.scss` - this file includes all the other files in the folder because only this file is included in `index.js`
- `utils` - folder containing various scripts (written by you or not)
  - `Utils.js (example)`
  - `...`
- `App.js` - renders the homepage (and in the future maybe other pages)
- `index.js` - entrance of the react app
If the folder is not present, please create it.
Most of the components should be stateless. The logic should be in the `App.js` or in the `pages/Home/Home.jsx` file.


## Continous integration
This repository is linked with Netlify. Every commit in the `master` branch is intercepted by Netlify and a build will be created and hosted automatically on the website.

## Project branches
In oder to contribute to the project, please follow these rules regarding branches:
```
master        X_____________________________________H___...
dev                 \__________________T___F__/ \_______...
feature-name            \__D__T__P__/
```
- `X` start
- `D` development
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

## Commit messages
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

## Issues creation
In order to create an issue, go to the **Issue** tab on github site, and click **New Issue** button.
You can choose two different issues:
- **Feature request** for new features
- **Bug report** for bugs
You should fill these informations:
- **title** (mandatory)
- **comment** (optional, but strongly suggested to write it in case of bugs, following the template)
- **Assignees** (optional) write your name if you want to fix it
- **Labels**: `feature` or `bug`
- **Project**: `feature list` or `bug list`

You can monitor the features and the bug status in the **Projects** section in the repository.

## Useful Atom packages
- `quick-issues`
- `atom-ide-ui`
- `ide-css`
- `ide-html`
- `ide-json`
- `ide-typescript`
- `react`
- `todo`
- `react-snippets`
