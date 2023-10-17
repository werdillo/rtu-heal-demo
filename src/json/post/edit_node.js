
const node = {
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
}
axios.post(`https:/example.com/delete-workflow`, {node});