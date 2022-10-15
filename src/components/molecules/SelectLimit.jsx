import Select from '../atoms/Select';

export default function SelectLimit({ limit, setLimit, classNames }) {
  const options = [
    { id: 1, value: 15 },
    { id: 2, value: 25 },
    { id: 3, value: 30 },
    { id: 4, value: 45 },
    { id: 5, value: 60 },
  ];

  const handleChange = (value) => {
    setLimit(value);
  };

  return (
    <form data-testid={'select-limit'}>
      <div className={'field has-addons'}>
        <div className={'control'}>
          <Select
            value={limit}
            options={options}
            onChange={(value) => handleChange(value)}
            classNames={classNames}
          />
        </div>
        <div className={'control'}>
          <span
            className={`button is-static has-text-weight-bold ${classNames}`}
          >
            分
          </span>
        </div>
      </div>
    </form>
  );
}
