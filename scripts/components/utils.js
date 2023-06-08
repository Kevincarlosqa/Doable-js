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
  
  let dayOfWeek = daysOfTheWeek[date.getDay()];
  let month = monthsOfTheYear[date.getMonth()];
  let day = date.getDate();

  let dateFormat = dayOfWeek + ', ' + month + ' ' + day;
  return dateFormat
}

export { dateFormat }