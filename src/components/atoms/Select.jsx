export default function Select({ options, value, onChange, classNames }) {
  return (
    <span className={`select ${classNames}`}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </span>
  )
}
