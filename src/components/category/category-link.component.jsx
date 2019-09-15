import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

const CategoryLink = ({ categories, match }) => {
  const { category: categoryParam } = match.params;
  debugger;
  const defaultLinkStyle = 'btn btn-tabs';

  return (
    <div className="category-link-main">
      {/* <div className="col-md-12">
        <div className="row">
          {categories.map(category => (
            <div key={category.id} className="col-md-2">
              <Link
                to={`${category.path}`}
                className={
                  categoryParam === category.path
                    ? `${defaultLinkStyle} active`
                    : `${defaultLinkStyle}`
                }
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div> */}
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
