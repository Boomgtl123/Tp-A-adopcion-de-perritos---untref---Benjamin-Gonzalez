// Usa el Badge de Bootstrap
export default function Tags({ text, color }) {
  // color: 'success', 'primary', 'danger', 'warning', etc.
  return (
    <span className={`badge text-bg-${color} tag-badge`}>{text}</span>
  )
}
