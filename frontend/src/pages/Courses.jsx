// src/pages/Courses.jsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CoursesGrid from '../components/CoursesGrid';

function Courses() {
    const [courses, setCourses] = useState([]); // Suponiendo que tienes datos de cursos

    return (
        <div className="container mx-auto flex flex-wrap">
            <Sidebar onFilterChange={(filter, value) => console.log(`Filtro: ${filter}, Valor: ${value}`)} />
            <CoursesGrid courses={courses} />
        </div>
    );
}

export default Courses;
