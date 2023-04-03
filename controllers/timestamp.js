const getTimeStamp = (req, res) => {
    const dateString = req.params.date
    const dateStringRegex = /^[0-9]+$/
    const numbersOnly = dateStringRegex.test(dateString)

    if (!numbersOnly) {
        const unixTimestamp = Date.parse(dateString)
        const utcDate = new Date(unixTimestamp).toUTCString()

        unixTimestamp
            ? res.json({ unix: unixTimestamp, utc: utcDate })
            : res.json({ error: "Invalid Date" })
    }
    else {
        const unixTimestamp = parseInt(dateString)
        const actualDate = new Date(unixTimestamp)
        const utcDate = actualDate.toUTCString()

        res.json({ unix: unixTimestamp, utc: utcDate })
    }
}

module.exports = { getTimeStamp };