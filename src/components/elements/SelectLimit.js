import { useEffect, useState } from 'react'

export default function SelectLimit() {
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <div className={'select is-small mr-2'}>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option>15</option>
          <option>30</option>
          <option>60</option>
          <option>120</option>
        </select>
      </div>
      <p className={'is-size-7'}>分たったらリマインドする</p>
    </>
  )
}
