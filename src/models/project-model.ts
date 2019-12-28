/**
 * Base class for project models
 */
export abstract class ProjectModel {
  constructor(public readonly sourceDir: string, protected readonly log: any, protected readonly error: any) { }

    /**
     * Check if the model matches a particular source directory
     * @returns an instance of the model if matches, else null
     */
    abstract async getInstanceIfValid(): Promise<this | null>

    abstract async package(): Promise<number>

    /**
     * Run the test command for the given model
     * @returns exit code (0 = successful)
     */
    abstract async test(): Promise<number>
}
