import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

Directory.propTypes = {
  categories: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    category: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};

Directory.defaultProps = {
  categories: [],
};

export default Directory;
