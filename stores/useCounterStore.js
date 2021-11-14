import create from 'zustand'
// const initialCounters = [
//   { id: 1, counterName: 'ONE', count: 0 },
//   { id: 2, counterName: 'TWO', count: 0 },
//   { id: 3, counterName: 'ONE', count: 0 },
//   { id: 4, counterName: 'TWO', count: 0 },
// ]

const handleLoadCounters = async (set, get) => {
  try {
    const item = window.localStorage.getItem('onivue-numerus')

    set({ counters: item ? JSON.parse(item) : [] })
    //LOADS HIGHSCORE STATE
    get().changeCounter()
  } catch (error) {
    console.log(error)
  }
}

const handleAddCounter = async (set, get, name) => {
  try {
    let n = [...get().counters]
    let c = {}
    c.counterName = name || null
    c.id = new Date().getTime()
    c.count = 0
    n.push(c)
    window.localStorage.setItem('onivue-numerus', JSON.stringify(n))
    set({ counters: n })
  } catch (error) {
    console.log(error)
  }
}

const handleChangeCounter = (id, action, payload, get, set) => {
  const counters = [...get().counters]
  const counter = counters.find((p) => p.id === id)

  console.log('handleChangeCounter Action:', action)

  if (action === 'INCREMENT') {
    counter.count += 10
  }
  if (action === 'DECREMENT') {
    counter.count -= 10
  }

  if (action === 'RENAME') {
    counter.counterName = payload.counterName
  }

  if (action === 'SETAVATAR') {
    counter.avatarConfig = payload.avatarConfig
    console.log(payload.avatarConfig)
  }

  if (action === 'FREEZE') {
    counter.freeze = !counter.freeze
  }

  if (action === 'DELETE') {
    counters = counters.filter((p) => p.id != id)
  }

  const checkHighScore = Math.max(...counters.map((value) => value.count))
  if (checkHighScore > get().highScore) {
    set({ highScore: checkHighScore })
  }
  if (checkHighScore < get().highScore) {
    set({ highScore: checkHighScore })
  }
  if (!isFinite(checkHighScore)) {
    set({ highScore: 0 })
  }

  window.localStorage.setItem('onivue-numerus', JSON.stringify(counters))
  set({ counters: counters })
}

const useCounterStore = create((set, get) => ({
  counters: [],
  highScore: 0,
  loadCounters: async () => {
    await handleLoadCounters(set, get)
  },

  changeCounter: (id, action, payload) => {
    handleChangeCounter(id, action, payload, get, set)
  },
  deleteAll: () => {
    window.localStorage.setItem('onivue-numerus', JSON.stringify([]))
    set({ counters: [] })
  },
  addCounter: (name) => {
    handleAddCounter(set, get, name)
  },
}))

export default useCounterStore
