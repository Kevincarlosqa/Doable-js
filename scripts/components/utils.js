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

function tasksAlphabetical(tasks) {
  tasks.sort((a, b) => a.title.localeCompare(b.title))
  return tasks
}

function tasksImportance(tasks) {
  tasks.sort((a, b) => a.due_date.localeCompare(b.title))
  return tasks
}

function tasksDueDate(tasks) {  
  tasks.sort((a, b) => {
  const fechaA = new Date(a.due_date);
  const fechaB = new Date(b.due_date);

  if (fechaA > fechaB) {
    return -1;
  }
  if (fechaA < fechaB) {
    return 1;
  }
  return 0;
  });
  console.log(tasks);
  return tasks
}

export { dateFormat, dateStructure, tasksAlphabetical, tasksDueDate }