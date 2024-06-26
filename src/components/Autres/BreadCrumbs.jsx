import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex list-none p-0">
                {crumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2"> ⏩ </span>}
                        {crumb.path ? (
                            <Link to={crumb.path} className="text-blue-600 hover:underline">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span>{crumb.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
