import Dexie from 'dexie'

export const db = new Dexie('HamattimerDB')
db.version(1).stores({
  screenshots: '++id',
})
