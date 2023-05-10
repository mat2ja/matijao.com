import { projects as allProjects } from '~/constants'
import type { ProjectCategory } from '~/models'

export const useProjects = () => {
  const getProjectsByCategory = (category: ProjectCategory) => {
    return allProjects.filter(project => project.categories.includes(category))
  }

  const useProjectCategory = reactify(getProjectsByCategory)

  const projects = useProjectCategory('projects')
  const featured = useProjectCategory('featured')
  const play = useProjectCategory('play')
  const extensions = useProjectCategory('extensions')
  const starters = useProjectCategory('starters')

  return {
    allProjects,
    projects,
    featured,
    play,
    extensions,
    starters,

  }
}
