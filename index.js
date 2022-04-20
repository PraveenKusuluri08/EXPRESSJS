const app = require("express")()
const express = require("express")

app.use(express.json())
app.use("/api", require("./ExpressServices/controller"))

const PORT = process.env.PORT||5000

app.listen(PORT, () => {
  console.log(`App is listing at ${PORT}`)
})
