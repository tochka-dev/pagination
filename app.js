var appId = 'd8dda2b6aaf371648afc087a1714f10d4dd1d45c53f04eaa582fda1042dc8be3'

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  methods: {
    fetchPhotos: function(page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

        this.photos = response.data

        this.totalPhotos = parseInt(response.headers.get('x-total'))

        this.currentPage = page

      }, console.log)
    }
  },
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})