<template>
<header class="rounded-md flex flex-col-reverse bg-gray-200/30 my-16 py-10 px-8 justify-between md:flex-row md:items-center dark:bg-gray-800">
      <div class="md:w-8/12">
        <div>
          <p v-if="$fetchState.pending">Trending Indonesia</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>
          <div v-else>
            <div>
            </div>
              <ul>
                <li v-for="item in trends" :key="item.data">
                <div v-for="(t, index) in item.trends" v-if="index === 0">  
                <div v-for="n in t">    
                  <div v-for="trending in t.data">
                    <a style="color: white;" :href="`https://twitter.com/search?q=${trending.name.replace('#','')}`">{{trending.name}}</a>
                  </div>    
                </div>    
                </div>
                </li>
              </ul>
          </div>
        </div>
        <button style="color:green;" @click="$fetch">Refresh</button>
      </div>
</header>

  <!-- <div>
    <p v-if="$fetchState.pending">Trending dalam satu jam...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 style="color: white;">Trending dalam Satu Jam</h1>
        <ul>
          <li v-for="item in trends" :key="item.data">
          <div v-for="(t, index) in item.trends" v-if="index === 0">  
          <div v-for="n in t">    
            <div v-for="trending in t.data">
               <p style="color:white;">{{trending.name}}</p>  
            </div>    
          </div>    
          </div>
          </li>
        </ul>
      <button style="color:white;" @click="$fetch">Refresh</button>
    </div>
  </div> -->
</template>
<script>
  export default {
    data() {
      return {
        trends: []
      }
    },
   methods:{
    myFunction: function () {
		
		this.message = this.message.replace("Canada", "France");
		
    }
	},
    async fetch() {
      this.trends = await fetch(
        'https://api-twitter-trends.herokuapp.com/trends?location=indonesia'
      ).then(res => res.json())
    }
  }
</script>