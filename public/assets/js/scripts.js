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
    catalogItems: [],

    contacts: {},

    isCallbackActive: false,
    modalEmail: '',
    modalMessage: '',

    formError: {}
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
    },
    async getContacts() {
      try {
        let { data } = await api.get('contacts');
        this.contacts = data;
      } catch (error) {
        console.error(error);
      }
    },

    onToggleCallback() {
      this.isCallbackActive = !this.isCallbackActive;
    },
    async onSubmit() {
      let token = window.grecaptcha_token;
      if (!token) return;

      try {
        const { modalEmail, modalMessage } = this;
        let params = {
          email: modalEmail,
          message: modalMessage,
          captcha: token
        };
        
        let { data } = await api.post('callback', params);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  
  mounted() {
    this.getCatalogItems();
    this.getContacts();
  },
});
