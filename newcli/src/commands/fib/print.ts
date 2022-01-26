import {Command, Flags} from '@oclif/core'
import { fib } from '../../fib'

export default class Print extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    number: Flags.integer({ description: 'fib(?)', required: true }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Print)

    fib(flags.number, true)
  }
}