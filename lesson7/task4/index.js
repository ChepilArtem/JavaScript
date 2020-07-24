const getMessagesForBestStudents = (allstudents, failedstudents) => allstudents
.filter(name => !failedstudents.includes(name))
.map(name => 'Good job, ' + name);
