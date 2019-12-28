import {spawnSync} from 'child_process'

export function run(directory: string, command: string, log: (...args: any[]) => void, err: (...args: any[]) => void): number {
  try {
    log(`Running command: "${command}"`)
    const result = spawnSync(command, {cwd: directory, stdio: 'inherit', shell: true})
    if (result && result.status !== null) {
      return result.status
    }
  } catch (error) {
    err(error)
  }
  return 1
}
