let data = [
    {
      title: "flight to Canada", 
      time: "1pm",
      price: 26000,
      date: "26-06-2022" 
    }
]

exports.bookFlight = (req, res) => {
    const newBooking = req.body;
    data.push(newBooking)
    console.log(data);
    res.send(`${newBooking.title} added to the database!`)
}

exports.getSingleFlight = (req, res) => {
    const {title} = req.params;
    const foundData = data.find((element) => element.title == title);
    //res.send("THE GET TITLE ROUTE")
    res.send(foundData)
    console.log(foundData);
}

exports.getAllFlight =(req, res) => {
    res.send(data);
    console.log(data);
}

exports.updateFlight = (req, res) => {
    const { title } = req.params;
    const { time, date } = req.body;

    const element = data.find((element) => element.title == title);

    if(title) element.title = title;
    if(time) element.time = time;
    if(date) element.date = date;

    res.send(`Flight with the title ${title} has been updated`);
}

exports.deleteFlight = (req, res) => {
    const { title } = req.params;

    data = data.filter((element) => element.title != title );
    res.send(`flight with the title ${title} deleted from the database`);
}
