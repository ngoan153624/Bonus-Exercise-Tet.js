
const employees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 }
  ];
  
  
  const name = 'Emp A';
  const emp = employees.find(item => item.name === name);
  
  console.log(emp);