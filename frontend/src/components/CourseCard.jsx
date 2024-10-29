// src/components/CourseCard.jsx
import React from 'react';

function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={course.imageUrl} alt={course.title} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <p className="text-gray-900 font-bold">{course.price}</p>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Comienza Ahora</button>
            </div>
        </div>
    );
}

export default CourseCard;
