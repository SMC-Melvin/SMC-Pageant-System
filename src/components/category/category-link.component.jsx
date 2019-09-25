import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

const CategoryLink = ({ categories, match }) => {
  const { category: categoryParam } = match.params;
  return (
    <div className="category-link-main">
      <div className="category-link-container">
        <div className="category-link">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`${category.path}`}
              className={
                categoryParam === category.path
                  ? 'active'
                  : category.id === 1
                  ? 'disabled-link'
                  : ''
              }
            >
              <span className="category-link__inner">
                <span className="category-link__title">{category.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CategoryLink);
