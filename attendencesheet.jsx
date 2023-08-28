import React, { useState } from 'react';
import StudentList from './studentlist';

const a = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', attended: false },
    { id: 2, name: 'Student 2', attended: false },
    // Add more students
  ]);

  const toggleAttendance = studentId => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, attended: !student.attended }
          : student
      )
    );
  };

  return (
    <div>
      <h1>Attendance System</h1>
      <StudentList students={students} toggleAttendance={toggleAttendance} />
    </div>
  );
};

export default attendencesheet;
