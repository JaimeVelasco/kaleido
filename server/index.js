const app = require('express')()

app.get('/', (req, res) => {
    res.send(JSON.stringify({ message: "this comes from server" }))
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)
