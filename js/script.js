const { createApp } = Vue

createApp({
  data() {
    return {
        search_value: '',
        recipes: [],
        api_url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    }
  },
  methods: {
    getRecipies(url, search){
        fetch(`${url}${search}`)
        .then(response => response.json())
        .then(data => {
            data.meals.forEach(meal => {
                this.recipes.push({
                    id: meal.idMeal,
                    name: meal.strMeal,
                    image: meal.strMealThumb,
                    category: meal.strCategory,
                    area: meal.strArea,
                    instructions: meal.strInstructions,
                    ingredients: [
                        meal.strIngredient1,
                        meal.strIngredient2,
                        meal.strIngredient3,
                        meal.strIngredient4,
                        meal.strIngredient5,
                        meal.strIngredient6,
                        meal.strIngredient7,
                        meal.strIngredient8,
                        meal.strIngredient9,
                        meal.strIngredient10,
                    ],
                    measures: [
                        meal.strMeasure1,
                        meal.strMeasure2,
                        meal.strMeasure3,
                        meal.strMeasure4,
                        meal.strMeasure5,
                    ]
                })
            })
            console.log(this.recipes)
            this.clearSearch()
        })
        .catch(error => console.log(error))
    },
    validateSearch(){
        if(this.search_value.length > 0){
            this.getRecipies(this.api_url, this.search_value)
        }else{
            alert('Please enter a search term')
        }
    },
    clearSearch(){
        this.search_value = ''
    }
  },
}).mount('#app')