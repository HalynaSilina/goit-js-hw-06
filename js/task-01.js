const categoriesRefs = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRefs.length}`);

categoriesRefs.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
  });