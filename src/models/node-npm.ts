import {ProjectModel} from './project-model'
import {readFileSync, existsSync} from 'fs'
import {join} from 'path'
import {run} from '../util/run'

export class NodeNpm extends ProjectModel {
  async getInstanceIfValid(): Promise<this | null> {
    if (existsSync(join(this.sourceDir, 'package.json'))) {
      return this
    }
    return null
  }

  async package(): Promise<number> {
    const hasPackageLock = existsSync(join(this.sourceDir, 'package-lock.json'))
    let installResult: number

    if (hasPackageLock) {
      this.log('Found package lock')
      installResult = run(this.sourceDir, 'npm ci', this.log, this.error)
    } else {
      this.log('No package lock found')
      installResult = run(this.sourceDir, 'npm i', this.log, this.error)
    }
    this.log('Install complete with code', installResult)
    if (installResult !== 0) {
      this.error('Command failed with code', installResult)
      return installResult
    }

    const packageJson = JSON.parse(readFileSync(join(this.sourceDir, 'package.json')).toString())
    let buildResult = 0
    if (packageJson.scripts.build) {
      this.log('Found build script. Running...')
      buildResult = run(this.sourceDir, 'npm run build', this.log, this.error)
    }
    return buildResult
  }

  async test(): Promise<number> {
    return run(this.sourceDir, 'npm test', this.log, this.error)
  }
}
