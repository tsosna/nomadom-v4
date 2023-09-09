import { browser } from "$app/environment"
import { writable } from "svelte/store"


export type Theme = 'Sun'| 'Moon'

const userTheme = browser && localStorage.getItem('theme')
export const theme = writable(userTheme ?? 'noma')

export const toggleTheme = (newTheme:Theme) => {
  theme.update(()=>{
    document.documentElement.setAttribute('class', newTheme)
    localStorage.setItem('theme', newTheme)
    return newTheme
  })
}

export const setTheme = (newTheme:Theme) => {
  theme.set(newTheme)
}
