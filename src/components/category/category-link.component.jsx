import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as LockIcon } from './icons/lock.svg';
import './style.scss';

const CategoryLink = ({
  categories,
  match,
  isTopCandidateAlreadyDeclared,
  onCategoryClick
}) => {
  const { category: categoryParam } = match.params;
  return (
    <div className="category-link-main">
      <div className="category-link-container">
        <div className="category-link">
          {categories.map(category => (
            <Link
              onClick={onCategoryClick}
              key={category.id}
              to={`${category.path}`}
              className={
                categoryParam === category.path
                  ? 'active'
                  : category.id === 1
                  ? 'disabled-link'
                  : isTopCandidateAlreadyDeclared && category.id !== 7
                  ? 'disabled-link'
                  : ''
              }
            >
              <div className="category-link__inner">
                <div className="category-link__title">
                  {category.name}{' '}
                  {categoryParam !== category.path &&
                  ((isTopCandidateAlreadyDeclared && category.id !== 7) ||
                    category.id === 1) ? (
                    <LockIcon />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CategoryLink);
