export const useProject = ({ slug }: { slug: string }) => {
  const { allProjects } = useProjects()

  const findProject = (slug: string) => {
    return allProjects.find(({ name }) => slugify(name) === slug)
  }

  const project = computed(() => findProject(slug))

  return {
    project,
  }
}
