import { ProjectModel } from './project-model'
import { NodeNpm } from './node-npm'
import { Maven } from './maven'

const MODELS = [Maven, NodeNpm]

export class Diviner {
  constructor(public readonly rootDir: string, private readonly log: any, private readonly error: any) { }

  async getProjectModel(): Promise<ProjectModel> {
    for (const model of MODELS) {
      // eslint:disable
      const modelResult = await new model(this.rootDir, this.log, this.error).getInstanceIfValid()
      if (modelResult) {
        return modelResult
      }
    }
    throw new Error('No Matching Project Models')
  }
}
