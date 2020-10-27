function DateConverter(time){
    let dateValues = time.split(" ")
    let todayDate = Date(Date.now()).split(" ");
    console.log(Date.parse(`July 1, 2020 ${todayDate[4]}`))
    console.log(dateValues, todayDate)
    if(todayDate[3] !== dateValues[2]){
      return `${parseInt(todayDate[3]) - parseInt(dateValues[2])} years ago`
    }
    if(todayDate[1] !== dateValues[0]){
      let postMonth = new Date(Date.parse(`${dateValues[0]} 1, 2020`)).getMonth()+1
      let todayMonth = new Date(Date.parse(`${todayDate[1]} 1, 2020`)).getMonth()+1
      return `${todayMonth - postMonth} months ago`
    }
    let postDay = parseInt(todayDate(dateValues[1]))
    let todayDay = parseInt(todayDate[2]);
    if(postDay !== todayDay){
      return `${todayDay - postDay} days ago`
    }
    let postHours = Date.parse(`July 1, 2020 ${dateValues[3]}`)
    if(dateValues[4] === "pm" && parseInt(dateValues[3]) !== 12){
      postHours += 3600000;
    }
    else if(dateValues[4] === "am" && parseInt(dateValues[3]) === 12){
      postHours -= 3600000;
    }
}

export default DateConverter