my-cli
======

My Awesome CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g node-atlanta-cli
$ my-cli COMMAND
running command...
$ my-cli (-v|--version|version)
node-atlanta-cli/0.0.1 darwin-x64 node-v12.13.0
$ my-cli --help [COMMAND]
USAGE
  $ my-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-cli hello [FILE]`](#my-cli-hello-file)
* [`my-cli help [COMMAND]`](#my-cli-help-command)
* [`my-cli package [SRC]`](#my-cli-package-src)
* [`my-cli test [SRC]`](#my-cli-test-src)

## `my-cli hello [FILE]`

describe the command here

```
USAGE
  $ my-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-cli hello
  hello world from ./src/hello.ts!
```

## `my-cli help [COMMAND]`

display help for my-cli

```
USAGE
  $ my-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `my-cli package [SRC]`

run the package installer and build step

```
USAGE
  $ my-cli package [SRC]

ARGUMENTS
  SRC  [default: /Users/alec/Git/my-cli] source directory

OPTIONS
  -h, --help  show CLI help
```

## `my-cli test [SRC]`

runs the test command

```
USAGE
  $ my-cli test [SRC]

ARGUMENTS
  SRC  [default: /Users/alec/Git/my-cli] source directory

OPTIONS
  -h, --help  show CLI help
```
<!-- commandsstop -->
