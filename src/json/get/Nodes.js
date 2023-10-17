// visi nodi (workflow/setup)

const nodes = [
    {
        name: 'Node 1',
        type: 'text',
        params: [
            {
                id: 1,
                input: "1",
                type: 'integer'
            },
            {
                id: 2,
                input: "",
                type: 'float'
            },
            {
                id: 3,
                input: "",
                type: 'string'
            },
            {
                id: 4,
                input: "",
                type: 'char'
            },
        ]
    },
    {
        name: 'Node 2',
        type: 'int',
        params: [
            {
                id: 1,
                input: "1",
                type: 'integer'
            },
            {
                id: 2,
                input: "",
                type: 'float'
            },
            {
                id: 3,
                input: "",
                type: 'string'
            },
            {
                id: 4,
                input: "",
                type: 'char'
            },
        ]
    },
    {
        name: 'Node 3',
        type: 'float',
        params: [
            {
                id: 1,
                input: "1",
                type: 'integer'
            },
            {
                id: 2,
                input: "",
                type: 'float'
            },
            {
                id: 3,
                input: "",
                type: 'string'
            },
            {
                id: 4,
                input: "",
                type: 'char'
            },
        ]
    },
]

export default nodes;