import {Command, flags} from '@oclif/command'
import {Diviner} from '../models/diviner'

export default class Test extends Command {
  static description = 'runs the test command'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'src', default: process.cwd, description: 'source directory'}]

  async run() {
    const {args} = this.parse(Test)

    const model = await new Diviner(args.src, this.log, this.error).getProjectModel()

    const result = await model.test()
    if (result !== 0) {
      this.error(`Exited with code ${result}`)
    }
    return this.exit(result)
  }
}
