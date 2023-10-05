import './Button.css'

export function Button ({ labelText, type, onClick, className }) {
  return (
    <button
      className={`${type}-btn ${className}`}
      type='button'
      onClick={onClick}
    >
      {labelText}
    </button>
  )
}
