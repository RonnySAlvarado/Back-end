
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'apple', value: 5, 'categoryId': 1},
        {id: 2, name: 'broccoli', value: 5, 'categoryId': 2},
        {id: 3, name: 'spaghetti', value: -4, 'categoryId': 3},
        {id: 4, name: 'chicken', value: 4, 'categoryId': 4},
        {id: 5, name: 'cheese', value: -4, 'categoryId': 5},
        {id: 6, name: 'avocado', value: 4, 'categoryId': 6},
        {id: 7, name: 'cake', value: -4, 'categoryId': 7},
        {id: 8, name: 'banana', value: 1, 'categoryId': 1},
        {id: 9, name: 'kiwi', value: 1, 'categoryId': 1},
        {id: 10, name: 'strawberry', value: 1, 'categoryId': 1},
        {id: 11, name: 'orange', value: 1, 'categoryId': 1},
        {id: 12, name: 'mango', value: 1, 'categoryId': 1}, 
        {id: 13, name: 'steak', value: 1, 'categoryId': 4},
        {id: 14, name: 'pork', value: 1, 'categoryId': 4},
        {id: 15, name: 'turkey', value: 1, 'categoryId': 4},
        {id: 16, name: 'salami', value: 1, 'categoryId': 4},
        {id: 17, name: 'fish', value: 1, 'categoryId': 4},
        {id: 18, name: 'carrot', value: 1, 'categoryId': 2},
        {id: 19, name: 'cabbage', value: 1, 'categoryId': 2},
        {id: 20, name: 'celery', value: 1, 'categoryId': 2},
        {id: 21, name: 'tomato', value: 1, 'categoryId': 2},
        {id: 22, name: 'potato', value: 1, 'categoryId': 2},
        {id: 23, name: 'milk', value: 1, 'categoryId': 5},
        {id: 24, name: 'butter', value: 1, 'categoryId': 5},
        {id: 25, name: 'sour cream', value: 1, 'categoryId': 5},
        {id: 26, name: 'buttermilk', value: 1, 'categoryId': 5},
        {id: 27, name: 'yogurt', value: 1, 'categoryId': 5},


      ]);
    });
};