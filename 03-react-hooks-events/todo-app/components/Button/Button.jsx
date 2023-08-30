import './Button.css'

export function Button ({ labelText, type }) {
  return (
    <button
      className={`${type}-btn`}
      type='button'
    >
      {labelText}
    </button>
  )
}
