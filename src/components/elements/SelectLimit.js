import { useEffect, useState } from 'react'

export default function SelectLimit() {
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <span className={'select is-rounded is-primary ml-5'}>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option>15</option>
          <option>30</option>
          <option>60</option>
          <option>120</option>
        </select>
      </span>
      <span className={'ml-2'}>分</span>
    </>
  )
}
