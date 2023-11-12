export const useProject = ({ slug }: { slug: string }) => {
  const { allProjects } = useProjects()

  const findProject = (slug: string) => {
    return allProjects.find(({ name }) => slugify(name) === slug)
  }

  const project = computed(() => findProject(slug))
  const projectIndex = computed(() => isDefined(project) ? allProjects.indexOf(project.value!) : undefined)

  const previousProject = computed(() => {
    if (isDefined(projectIndex)) {
      return allProjects[projectIndex.value! - 1]
    }
    return undefined
  })

  const nextProject = computed(() => {
    if (isDefined(projectIndex)) {
      return allProjects.at(projectIndex.value! + 1)
    }
    return undefined
  })

  return {
    project,
    previousProject,
    nextProject,
  }
}
