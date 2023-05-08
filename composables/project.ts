import { extensions, projects, starters } from '~~/constants/projects'

export const useProject = ({ slug }: { slug: string }) => {
  const findProject = (slug: string) => {
    return [...projects, ...extensions, ...starters].find(({ name }) => slugify(name) === slug)
  }

  const project = computed(() => findProject(slug))

  return {
    project,
  }
}
