exports.getTimestamp = (req, res) => {
  const dateString = req.params.date;

  let date;
  if (!dateString) {
    date = new Date();
  } else if (!isNaN(dateString)) {
    // If it's a unix timestamp (milliseconds)
    date = new Date(parseInt(dateString));
  } else {
    date = new Date(dateString);
  }

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
};