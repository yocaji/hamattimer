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
      <form className={'is-hidden-touch'}>
        <div className={'field has-addons'}>
          <div className={'control'}>
            <Select value={limit} options={options} onChange={(value) => handleChange(value)}/>
          </div>
          <div className={'control'}>
            <span className={'button is-static has-text-weight-bold'}>分</span>
          </div>
        </div>
      </form>
      <form className={'is-hidden-desktop'}>
        <Select value={limit} options={options} onChange={(value) => handleChange(value)}/>
      </form>
    </>
  )
}
