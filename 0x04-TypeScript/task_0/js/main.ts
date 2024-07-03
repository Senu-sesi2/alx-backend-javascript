interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Emmanuel',
  lastName: 'Mensah',
  age: 32,
  location: 'Accra'
}

const student2: Student = {
  firstName: 'Elorm',
  lastName: 'Davis',
  age: 26,
  location: 'Kumasi'
}

const studentList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '2px solid gray';
th2.style.border = '2px solid gray';
th1.style.padding = '.6rem';
th2.style.padding = '.6rem';
table.style.border = '2px solid gray';
table.style.borderCollapse = 'collapse';



thead.append(th1);
thead.append(th2);

table.append(thead);


studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.lastName;

  column1.style.border = '2px solid gray';
  column2.style.border = '2px solid gray';
  column1.style.padding = '.6rem';
  column2.style.padding = '.6rem';

  row.append(column1);
  row.append(column2)

  table.append(row);
});

body.append(table)
