import { selectTheme } from "./variables"

export function onSelectTheme(): void {
  const selectedTheme = selectTheme.value
  setTheme(selectedTheme)
}


export function setTheme(name: string): void {
  switch (name) {
    case 'light':
      document.body.style.backgroundColor = "#ffffff"
      localStorage.setItem('theme', 'light')
      break;
    case 'dark':
      document.body.style.backgroundColor = "#787878"
      localStorage.setItem('theme', 'dark')
      break;
  }
}

