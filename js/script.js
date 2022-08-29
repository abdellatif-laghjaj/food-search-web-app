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
            this.recipes = data.meals
            console.log(this.recipes)
            this.clearSearch()
        })
        .catch(error => console.log(error))
    },
    clearRecipies(){
        this.recipes = []
    },
    validateSearch(){
        if(this.search_value.length > 0){
            this.getRecipies(this.api_url, this.search_value)
        }else{
            this.clearRecipies()
            alert('Please enter a search term')
        }
    },
    clearSearch(){
        this.search_value = ''
        this.clearRecipies()
    }
  },
}).mount('#app')