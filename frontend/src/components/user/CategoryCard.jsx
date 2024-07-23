import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div className="whitespace-nowrap flex items-center gap-5 px-3 py-2 bg-white rounded-xl border border-gray-200">
            <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mr-4"
                style={{ backgroundColor: category.bg_color }}
            >
                <img src={category.icon} alt={category.name} className="w-8 h-8" />
            </div>

            <div className="flex flex-col">
                <p className="uppercase font-semibold sm:text-[#1e4e40]">{category.name}</p>

                <Link to={category.link} className="text-sm text-red-400 mt-1">
                    Show All &raquo;
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;

