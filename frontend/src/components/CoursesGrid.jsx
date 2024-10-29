// src/components/CoursesGrid.jsx
import React from 'react';
import CourseCard from './CourseCard';

function CoursesGrid({ courses }) {
    return (
        <section className="w-full md:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}

export default CoursesGrid;
