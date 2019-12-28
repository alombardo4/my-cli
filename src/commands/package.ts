import {Command, flags} from '@oclif/command'
import {Diviner} from '../models/diviner'

export default class Package extends Command {
  static description = 'run the package installer and build step'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'src', default: process.cwd, description: 'source directory'}]

  async run() {
    const {args} = this.parse(Package)

    const model = await new Diviner(args.src, this.log, this.error).getProjectModel()

    const result = await model.package()
    if (result !== 0) {
      this.error(`Exited with code ${result}`)
    }
    return this.exit(result)
  }
}
