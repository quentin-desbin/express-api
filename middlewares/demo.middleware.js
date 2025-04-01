export default (req, res, next) => {
    console.log("I'm a demo middleware")
    next()
}
