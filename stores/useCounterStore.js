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
  } catch (error) {
    console.log(error)
  }
}

const handleAddCounter = async (set, get, name) => {
  try {
    let n = [...get().counters]
    let c = {}
    c.counterName = name || null
    c.id = n.length + 1
    c.count = 0
    n.push(c)
    window.localStorage.setItem('onivue-numerus', JSON.stringify(n))
    set({ counters: n })
  } catch (error) {
    console.log(error)
  }
}

const handleChangeCounter = (id, action, payload, get, set) => {
  let counters = [...get().counters]
  let counter = counters.find((p) => p.id === id)

  console.log(action)

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

  const checkHighScore = Math.max(...counters.map((value) => value.count))
  if (checkHighScore > get().highScore) {
    set({ highScore: checkHighScore })
  }
  if (checkHighScore < get().highScore) {
    set({ highScore: checkHighScore })
  }

  window.localStorage.setItem('onivue-numerus', JSON.stringify(counters))
  set({ counters: counters })
}

const handleRemoveCounter = (id, get, set) => {
  let counters = [...get().counters]
  let filteredCounters = counters.filter((p) => p.id != id)
  console.log(filteredCounters)
  window.localStorage.setItem('onivue-numerus', JSON.stringify(filteredCounters))
  set({ counters: filteredCounters })
}

const useCounterStore = create((set, get) => ({
  counters: [],
  highScore: 0,
  loadCounters: async () => {
    await handleLoadCounters(set, get)
  },
  addCounter: (name) => {
    handleAddCounter(set, get, name)
  },
  changeCounter: (id, action, payload) => {
    handleChangeCounter(id, action, payload, get, set)
  },
  deleteCounter: (id) => {
    handleRemoveCounter(id, get, set)
  },
  deleteEverything: () => set({}, true), // true replaces state model instead of merging it
}))

export default useCounterStore
