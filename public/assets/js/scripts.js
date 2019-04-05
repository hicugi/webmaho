Vue.use(VueScrollTo);

const api = axios.create({
  baseURL: `http://api.webmaho.${ location.host.indexOf('webmaho') > -1 ? 'com' : 'localhost' }/`,
});

const app = new Vue({
  el: '#app',

  components: {
    VueScrollTo,
  },

  data: {
    isNavActive: false,

    isCatalogLoading: true,
    catalogItems: []
  },

  methods: {
    onNavToggle() {
      this.isNavActive = !this.isNavActive;
    },
    
    onScrollTo(el) {
      VueScrollTo.scrollTo(el);
    },

    async getCatalogItems() {
      try {
        let { data } = await api.get('catalog');
        let { items } = data;

        this.catalogItems = items;
      } catch (error) {
        console.error(error);
      }

      this.isCatalogLoading = false;
    }
  },
  
  mounted() {
    this.getCatalogItems();
  },
});
