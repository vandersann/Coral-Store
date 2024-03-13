    // src/components/CategoryFilter.tsx
    import React from 'react';

    interface CategoryFilterProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
    }

    const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
    return (
        <div>
        <h3>Categorias</h3>
        <ul>
            {categories.map((category) => (
            <li key={category} onClick={() => onSelectCategory(category)}>
                {category}
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default CategoryFilter;
