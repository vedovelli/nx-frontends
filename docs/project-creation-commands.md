# Project creation commands

[⬅️ README](../README.md)

## Steps

1. creation command

`npx create-nx-workspace nx-frontends`

```
preset: empty
cli: nx
```

2. add the react dev dependency to the nx workspace

`npm i --save-dev @nrwl/react`

3. add the `yarn` as a dev dependency

`npm i --save-dev yarn`

4. create the react web application

`nx generate @nrwl/react:app`

```
name: frontend-app-1
styles: SASS (.scss)
router: yes
```

5. check the created react web app

`nx serve frontend-app-1`

- open on the web browser the URL: `http://localhost:4200/`

6. create another react web app

`nx generate @nrwl/react:app`

```
name: frontend-app-2
router: yes
```

7. check the created react web app

`nx serve frontend-app-2`

- open on the web browser the URL: `http://localhost:4200/`

8. create a shared assets lib

`nx g @nrwl/workspace:lib assets --directory=shared`

useful reference: [[YouTube] 9. Shared assets library and nx.json - Nx Workspaces Course, by Nrwl](https://youtu.be/LYjX2V-eQa8), the code of the example is available on the [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

after define the code and the libs code structure

1. update the `tsconfig.json` to expose the full content of the lib
2. update the lib configuration on the `workspace.json`
3. update the `frontend-app-1` and the `frontend-app-2` to load resources from the shared assets lib (code of each project and also the projects configuration on the `workspace.json`)
4. update the `nx.json` to add as implicity dependency the `shared-assets` to the `frontend-app-1` and `frontend-app-2`

3) create a shared ui components lib

`nx g @nrwl/react:lib ui-components --directory=shared`

also added a new project dependency to the components

`yarn add classnames`