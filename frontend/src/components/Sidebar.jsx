// src/components/Sidebar.jsx
import React from 'react';

function Sidebar({ onFilterChange }) {
    return (
        <aside className="w-full md:w-1/4 px-4 py-6">
            <h2 className="font-semibold text-xl mb-4">Filtros Aplicados</h2>
            <div className="mb-6">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Categoría</label>
                <select
                    id="category"
                    className="block w-full p-2 border border-gray-300 rounded"
                    onChange={e => onFilterChange('category', e.target.value)}
                >
                    <option value="mathematics">Matemáticas</option>
                    <option value="biology">Biología</option>
                    <option value="software">Software</option>
                </select>
            </div>
            {/* Agregar más filtros según sea necesario */}
        </aside>
    );
}

export default Sidebar;
