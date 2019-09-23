import React, { FC } from 'react';
import { navigate } from '@reach/router';
import './FactCategory.scss';

interface IFactCategoryProps {
    category: string;
}

const FactCategory: FC<IFactCategoryProps> = (props) => {
    const { category } = props;

    const onClick = () => {
        navigate(`fact/${category}`);
    };
    return (
        <li className="fact-category" onClick={onClick}>
            {category}
        </li>
    );
};

export default FactCategory;
