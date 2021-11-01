const sessions = [
    {
        id: '<number>',
        sessionName: '<string>',
        rules: {
            incrementBy: '<number>',
            winner: '<HIGH || LOW>',
            limit: '<number>',
            buttons: '<INCDEC || INC || DEC>',
            minusAllowed: '<boolean>',
        },
        createdAt: '<date>',
        counters: [
            { id: '<number>', counterName: '<string>', count: '<number>' },
            { id: '<number>', counterName: '<string>', count: '<number>' },
            { id: '<number>', counterName: '<string>', count: '<number>' },
        ],
    },
]
