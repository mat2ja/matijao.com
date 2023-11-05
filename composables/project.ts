export const useProject = ({ slug }: { slug: string }) => {
  const { allProjects } = useProjects()

  const findProject = (slug: string) => {
    return allProjects.find(({ name }) => slugify(name) === slug)
  }

  const project = computed(() => findProject(slug))
  const projectIndex = computed(() => isDefined(project) ? allProjects.indexOf(project.value) : undefined)

  const previousProject = computed(() => {
    if (!isDefined(projectIndex))
      return undefined

    return allProjects[projectIndex.value - 1] || undefined
  })

  const nextProject = computed(() => {
    if (!isDefined(projectIndex))
      return undefined

    return allProjects.at(projectIndex.value + 1)
  })

  return {
    project,
    previousProject,
    nextProject,
  }
}
