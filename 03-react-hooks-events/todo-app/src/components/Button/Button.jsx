import './Button.css'

export function Button ({ labelText, type, onClick }) {
  return (
    <button
      className={`${type}-btn`}
      type='button'
      onClick={onClick}
    >
      {labelText}
    </button>
  )
}
