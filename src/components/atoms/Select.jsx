export default function Select({ options, value, onChange, classNames }) {
  return (
    <span className={`select ${classNames}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={'select'}
      >
        {options.map((option) => (
          <option key={option.id} data-testid={'select-option'}>
            {option.value}
          </option>
        ))}
      </select>
    </span>
  );
}
