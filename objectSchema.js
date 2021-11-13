const sessions = [
  {
    sessionId: '<number>',
    createdAt: '<date>',
    SessionHighScore: '<number>',
    SessionRules: {
      countingSteps: '<number>',
      limitPositive: '< +number>',
      limitNegative: '< -number>',
      minusAllowed: '<boolean>',
      winner: '<HIGH || LOW>',
      buttons: '<INCDEC || INC || DEC>',
    },
    sessionName: '<string>',
    counters: [
      { id: '<number>', counterName: '<string>', count: '<number>', avatarConfig: {} },
      { id: '<number>', counterName: '<string>', count: '<number>', avatarConfig: {} },
      { id: '<number>', counterName: '<string>', count: '<number>', avatarConfig: {} },
    ],
  },
]
