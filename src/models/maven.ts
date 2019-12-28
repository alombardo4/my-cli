import { ProjectModel } from './project-model';
import { existsSync } from 'fs';
import { join } from 'path'
import { run } from '../util/run';

export class Maven extends ProjectModel {
  async getInstanceIfValid(): Promise<this | null> {
    if (existsSync(join(this.sourceDir, 'pom.xml'))) {
      return this
    }
    return null
  }

  async package(): Promise<number> {
    return run(this.sourceDir, 'mvn package -DskipTests', this.log, this.error)
  }

  async test(): Promise<number> {
    return run(this.sourceDir, 'mvn test', this.log, this.error)
  }
}