import type { Sun, Moon } from 'lucide-svelte'


export { default as Icon } from './Icon.svelte'
export { default as Logo } from './Logo.svelte'

export type IconTYPE = {
  Sun: typeof Sun
  Moon: typeof Moon
}
