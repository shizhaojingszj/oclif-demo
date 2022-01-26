import {Command, Flags} from '@oclif/core'

import { fib } from '../../fib'

export default class Fib extends Command {
  static description = 'calculate fibonacci number'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    number: Flags.integer({ description: 'fib(?)', required: true }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Fib)

    console.log(fib(flags.number, false))
  }
}