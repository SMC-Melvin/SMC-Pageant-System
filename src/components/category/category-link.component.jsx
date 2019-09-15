import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

const CategoryLink = ({ categories, match }) => {
  const { category: categoryParam } = match.params;
  return (
    <div className="category-link-main">
      <div class="category-link-container">
        <div class="category-link">
          {categories.map(category => (
            <Link
              to={`${category.path}`}
              className={categoryParam === category.path ? 'active' : ''}
            >
              <span class="category-link__inner">
                <span class="category-link__title">{category.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CategoryLink);
