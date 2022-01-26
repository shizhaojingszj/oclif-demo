oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g newcli
$ newcli COMMAND
running command...
$ newcli (--version)
newcli/0.0.0 linux-x64 node-v16.13.1
$ newcli --help [COMMAND]
USAGE
  $ newcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`newcli hello PERSON`](#newcli-hello-person)
* [`newcli hello world`](#newcli-hello-world)
* [`newcli help [COMMAND]`](#newcli-help-command)
* [`newcli plugins`](#newcli-plugins)
* [`newcli plugins:inspect PLUGIN...`](#newcli-pluginsinspect-plugin)
* [`newcli plugins:install PLUGIN...`](#newcli-pluginsinstall-plugin)
* [`newcli plugins:link PLUGIN`](#newcli-pluginslink-plugin)
* [`newcli plugins:uninstall PLUGIN...`](#newcli-pluginsuninstall-plugin)
* [`newcli plugins update`](#newcli-plugins-update)

## `newcli hello PERSON`

Say hello

```
USAGE
  $ newcli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/20220126-oclif-demo/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `newcli hello world`

Say hello world

```
USAGE
  $ newcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `newcli help [COMMAND]`

Display help for newcli.

```
USAGE
  $ newcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for newcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `newcli plugins`

List installed plugins.

```
USAGE
  $ newcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ newcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `newcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ newcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ newcli plugins:inspect myplugin
```

## `newcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ newcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ newcli plugins add

EXAMPLES
  $ newcli plugins:install myplugin 

  $ newcli plugins:install https://github.com/someuser/someplugin

  $ newcli plugins:install someuser/someplugin
```

## `newcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ newcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ newcli plugins:link myplugin
```

## `newcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ newcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ newcli plugins unlink
  $ newcli plugins remove
```

## `newcli plugins update`

Update installed plugins.

```
USAGE
  $ newcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
