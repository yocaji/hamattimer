import Select from '../atoms/Select'

export default function SelectLimit({ limit, setLimit }) {

  const options = [
    { id: 1, value: 15 },
    { id: 2, value: 30 },
    { id: 3, value: 60 },
    { id: 4, value: 90 },
    { id: 5, value: 120 },
    { id: 6, value: 150 },
    { id: 7, value: 180 },
  ]

  const handleChange = (value) => {
    setLimit(value)
  }

  return (
    <>
      <Select value={limit} options={options} onChange={(value) => handleChange(value)}
              classNames={'is-rounded is-primary ml-5'}/>
      <span className={'ml-2'}>分</span>
    </>
  )
}
