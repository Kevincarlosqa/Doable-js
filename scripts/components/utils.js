function dateFormat(dateString) {
  const date = new Date(dateString)

  const daysOfTheWeek = ['Sunday',
                         'Monday', 
                         'Tuesday', 
                         'Wednesday', 
                         'Thursday', 
                         'Friday', 
                         'Saturday'];

  const monthsOfTheYear = ['January', 
                           'February', 
                           'March', 
                           'April', 
                           'May', 
                           'June', 
                           'July', 
                           'August', 
                           'September', 
                           'October', 
                           'November', 
                           'December'];
  
                           
  let dayOfWeek = daysOfTheWeek[date.getDay()+1];
  let month = monthsOfTheYear[date.getMonth()];
  let day = date.getDate();

  let dateFormat = dayOfWeek + ', ' + month + ' ' + String(day+1);
  return dateFormat
}

function dateStructure(newDate) {
  let parts = newDate.split("/")
  let year = parts[2]
  let month = parts[0]
  let day = parts[1]

  let dateStructured = year + "-" + month + "-" + day
  return dateStructured
}

export { dateFormat, dateStructure }