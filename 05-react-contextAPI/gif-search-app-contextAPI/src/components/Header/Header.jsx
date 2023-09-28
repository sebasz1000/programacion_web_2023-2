import { memo } from 'react'
export const Header = memo(function Header ({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
})
