<br>
<br>
<br>

# 🐚 Mishell

**Collection of shell utilities related to git, npm and more.**

<br>
<br>
<br>

## Installation

```sh
npm i mishell
```

## Usage

#### With installation:

```sh
mishell [command]
```

#### Without installation:

```sh
npx mishell [command]
```

## Documentation

### `run-if-file-exist`

- **Alias:** `rife`
- **Usage:** `rife [command] [--file=file1] [--file=file2] ... [--file=file3]`
- **Description:** Pull docker images if a `docker-compose.yml` exists.

### `git-default-remote-branch`

- **Alias:** `gdrb`
- **Usage:** `gdrb [remote=origin]`
- **Description:** Return the default remote branch for a git repo.

### `git-clean-branches`

- **Alias:** `gcb`
- **Usage:** `gcb [remote=origin]`
- **Description:** Remove all local branches preserving the default remote branch for a git repo.

### `git-fetch-pull`

- **Alias:** `gfp`
- **Usage:** `gfp [branch=current] [remote=origin]`
- **Description:** Fetch and pull remote changes for a git repo.

### `git-refresh`

- **Alias:** `gr`
- **Usage:** `gr [remote=origin]`
- **Description:** Remove all local branches preserving the default remote branch for a git repo. Also fetch and pull changes from the default remote branch.

### `update-nvmrc`

- **Alias:** `un`
- **Usage:** `un [version=--lts]`
- **Description:** Update the local `.nvmrc` file with the specified nvm version.

### `npm-version`

- **Alias:** `nv`
- **Usage:** `nv [newversion] [releaseid]`
- **Description:** Create an NPM new tag version.

---

<br>
<br>

<br>[MIT License](./LICENSE)
<br>Made with ♥ by: [Rubens Mariuzzo](https://github.com/rmariuzzo) for Mishell, my love.
