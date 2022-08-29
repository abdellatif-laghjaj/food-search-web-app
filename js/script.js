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
    getRecipies(search){
        fetch(`${api_url}${search}`)
        .then(response => response.json())
        .then(data => {
            this.recipes = data.meals
            this.clearSearch()
        })
        .catch(error => console.log(error))
    },
    clearRecipies(){
        this.recipes = []
    },
    validateSearch(){
        if(this.search_value.length > 0){
            this.getRecipies(this.search_value)
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