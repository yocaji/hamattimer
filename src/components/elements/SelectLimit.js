import { useEffect, useState } from 'react'
import { GoBell } from 'react-icons/go'

export default function SelectLimit() {
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    localStorage.setItem('limit', limit)
  }, [limit])

  return (
    <>
      <GoBell className={'ml-4'}/>
      <span className={'select is-small ml-2'}>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option>15</option>
          <option>30</option>
          <option>60</option>
          <option>120</option>
        </select>
      </span>
      <span className={'is-size-7 ml-2'}>分</span>
    </>
  )
}
