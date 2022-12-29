<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-if="authenticated">{{ $t("home") }}</router-link>
      <router-link to="/login" v-if="!authenticated">{{ $t("Signin") }}</router-link>
      <a href="#" @click.prevent="signOut" v-if="authenticated">{{ $t("Signout") }}</a>

      <div class="dropdown">
        <span class="language__logo" v-if="getLanguage == 'KA'">
          <svg v-if="getLanguage == 'KA'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 213.33333 160"><defs><g id="c"><clipPath id="a"><path d="M-109 104a104 104 0 0 0 0-208h218a104 104 0 0 0 0 208z"/></clipPath><path id="b" clip-path="url(#a)" d="M-55 74a55 55 0 0 1 110 0V-74a55 55 0 0 1-110 0z"/><use xlink:href="#b" transform="rotate(90)" height="200" width="300"/></g></defs><path fill="#fff" d="M0 0h213.33v160H0z"/><path fill="#fff" d="M6.385 13.192h200.56v133.71H6.385z"/><path fill="red" d="M93.296 13.192v53.484H6.385v26.742h86.911v53.484h26.742V93.418h86.911V66.676h-86.911V13.192H93.296z"/><use xlink:href="#c" transform="translate(49.472 39.566) scale(.66855)" height="200" width="300" fill="red"/><use xlink:href="#c" transform="translate(163.86 120.53) scale(.66855)" height="200" width="300" fill="red"/><use xlink:href="#c" transform="translate(163.86 39.566) scale(.66855)" fill="red"/><use xlink:href="#c" transform="translate(49.472 120.53) scale(.66855)" fill="red"/></svg>
        </span>
        <span class="language__logo" v-if="getLanguage == 'EN'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clip-path="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
            </g>
            </svg>
        </span>
        <div class="dropdown-content">
          <p v-if="getLanguage === 'KA'" @click="changeLanguage('en')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
              </g>
            </svg>
            EN
          </p>
          <p v-if="getLanguage === 'EN'" @click="changeLanguage('ka')">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 213.33333 160"><defs><g id="c"><clipPath id="a"><path d="M-109 104a104 104 0 0 0 0-208h218a104 104 0 0 0 0 208z"/></clipPath><path id="b" clip-path="url(#a)" d="M-55 74a55 55 0 0 1 110 0V-74a55 55 0 0 1-110 0z"/><use xlink:href="#b" transform="rotate(90)" height="200" width="300"/></g></defs><path fill="#fff" d="M0 0h213.33v160H0z"/><path fill="#fff" d="M6.385 13.192h200.56v133.71H6.385z"/><path fill="red" d="M93.296 13.192v53.484H6.385v26.742h86.911v53.484h26.742V93.418h86.911V66.676h-86.911V13.192H93.296z"/><use xlink:href="#c" transform="translate(49.472 39.566) scale(.66855)" height="200" width="300" fill="red"/><use xlink:href="#c" transform="translate(163.86 120.53) scale(.66855)" height="200" width="300" fill="red"/><use xlink:href="#c" transform="translate(163.86 39.566) scale(.66855)" fill="red"/><use xlink:href="#c" transform="translate(49.472 120.53) scale(.66855)" fill="red"/></svg>
            KA
          </p>
        </div>
      </div>
    </div>
    <router-view />
  </div>


</template>

<script>
import { mapGetters, mapActions } from "vuex";
import i18n from "/src/locales/i18n.js"

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),

    getLanguage : function(){
      return (i18n.global.locale).toUpperCase();
    }
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
      changeLanguageAction : "lang"
    }),

    async signOut() {
      await this.signOutAction();

      this.$router.replace("/login");
    },

    changeLanguage(language){
      if ( language == "ka" ){
        this.changeLanguageAction('ka');
        i18n.global.locale = this.$store.state.language       
      }else{
        this.changeLanguageAction('en');
        i18n.global.locale = this.$store.state.language
      }

      localStorage.setItem('language', this.$store.state.language); 
    }
  },

  mounted() {
    this.changeLanguageAction(localStorage.getItem('language'));
    i18n.global.locale = this.$store.state.language 
  },
};
</script>
