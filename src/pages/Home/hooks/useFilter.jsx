
const useFilter = (currentData, filterValues) => {
  const totalFilter = (currentData, filterValues) => {
    const { categoryId, sort, searchValue } = filterValues;
    return currentData
      .filter(({ category }) =>
        filterValues.categoryId === 'all' ? true : category === categoryId,
      )
      .filter(({ name }) => (name.toLowerCase().includes(searchValue.toLowerCase()) ? true : false))
      .sort((firstItem, secondItem) => {
        switch (sort.sortProperty) {
          case 'name':
            return firstItem.name.localeCompare(secondItem.name);
          case 'priceAsc':
            return parseFloat(firstItem.price) - parseFloat(secondItem.price);
          case 'priceDesc':
            return parseFloat(secondItem.price) - parseFloat(firstItem.price);
          case 'all':
            return true;
        }
      });
  };

  return totalFilter;
};

export default useFilter;