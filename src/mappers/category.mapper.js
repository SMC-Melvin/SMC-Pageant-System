export function categoryBuilderForUI(category) {
  return (
    category && {
      id: category.Id,
      name: category.Name,
      path: category.Name && category.Name.toLowerCase().replace(/ /g, '-')
    }
  );
}
