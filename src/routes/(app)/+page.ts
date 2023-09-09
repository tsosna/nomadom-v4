export const prerender = true

import type { ProjectImgTYPE } from '$lib/type'

export const load = async ({fetch}) => {
  const response = await fetch('/api/projects')
  const projects: Array<ProjectImgTYPE> = await response.json()
  return {projects}
};


