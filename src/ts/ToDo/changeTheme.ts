import { selectTheme } from "./variables"

export function onSelectTheme(): void {
  const selectedTheme = selectTheme.value
  setTheme(selectedTheme)
}


export function setTheme(name: string): void {
  switch (name) {
    case 'light':
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#000000"
      localStorage.setItem('theme', 'light')
      break;
    case 'dark':
      document.body.style.backgroundColor = "#787878"
      document.body.style.color = "#d3d3d3"
      localStorage.setItem('theme', 'dark')
      break;
  }
}

