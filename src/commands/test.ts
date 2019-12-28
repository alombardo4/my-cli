import { Command, flags } from '@oclif/command'
import { Diviner } from '../models/diviner'

export default class Test extends Command {
  static description = 'run tests'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file', default: process.cwd }]

  async run() {
    const { args } = this.parse(Test)

    const model = await new Diviner(args.file, this.log, this.error).getProjectModel()
    return model.test()
  }
}
