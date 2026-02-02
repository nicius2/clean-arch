import "reflect-metadata"
import Express from "express"

const PORT = 3000

const app = Express()
app.use(Express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
