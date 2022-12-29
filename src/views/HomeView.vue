<template>
  <div class="container m_top" v-if="!dbEmpty">

    <div class="input__wrapper search">
      <label for="search">{{ $t("search") }}</label>
      <input type="text" v-model="search">
    </div>

    <div class="table-wrapper">      
      <table>
        <thead>
          <tr>
            <th>{{ $t("country") }}</th>
            <th @click="filter('confirmed')" id="confirmed">
              {{ $t("confirmed") }}
            </th>
            <th @click="filter('recovered')" id="recovered">{{ $t("recovered") }}</th>
            <th @click="filter('death')" id="death">{{ $t("death") }}</th>
          </tr>
        </thead>
        <tbody v-if="statisticsLoaded">
          <tr v-for="cd in SearchStatistics" :key="cd.id">
            <td v-if="$store.state.language === 'en'">{{ cd.name_en }}</td>
            <td v-if="$store.state.language === 'ka'">{{ cd.name_ka }}</td>
            <td>{{ cd.confirmed }}</td>
            <td>{{ cd.recovered }}</td>
            <td>{{ cd.death }}</td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="flex">
      <div class="card">
        <header>{{ $t("confirmed") }}</header>
        <span>{{ totalStatistics.totalConfirmed }}</span>
      </div>
      <div class="card">
        <header>{{ $t("recovered") }}</header>
        <span>{{ totalStatistics.totalRecovered }}</span>
      </div>
      <div class="card">
        <header>{{ $t("death") }}</header>
        <span>{{ totalStatistics.totalDeath }}</span>
      </div>
    </div>
  </div>       

  <div v-if="dbEmpty" class="container m_top">
    Databases are empty.    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",

  data() {
    return {
      countryDetails: null,
      filteredBy: { filtered: null, order: null },
      search: '',
      statisticsLoaded : false,
      totalStatistics : "",
      dbEmpty : false
    };
  },

  methods: {
    filter: function (filterBy) {

      var confirmed_element = document.getElementById('confirmed');
      var recovered_element = document.getElementById('recovered');
      var death_element = document.getElementById('death');


      confirmed_element.classList.remove('asc'); confirmed_element.classList.remove('desc');
      recovered_element.classList.remove('asc'); recovered_element.classList.remove('desc');
      death_element.classList.remove('asc'); death_element.classList.remove('desc');

      if ( this.filteredBy.filtered == null ){
        this.filteredBy.filtered = filterBy;
        this.filteredBy.order = "descending";
      }

      if ( filterBy == "confirmed" ){

        if (this.filteredBy.order == "ascending"){
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "descending"

            confirmed_element.classList.add('desc');

            return b.confirmed - a.confirmed;
          });

          
        }
        else {
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "ascending"
  
            confirmed_element.classList.add('asc');

            return a.confirmed - b.confirmed;
          });
        }

      }

      
      else if ( filterBy == "recovered" ){

        if (this.filteredBy.order == "ascending"){
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "descending"
            recovered_element.classList.add('desc');
            return b.recovered - a.recovered;
          });

          
        }
        else{
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "ascending"
            recovered_element.classList.add('asc');
            return a.recovered - b.recovered;
          });
        }
      }

      else if ( filterBy == "death" ){

        if (this.filteredBy.order == "ascending"){
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "descending"
            death_element.classList.add('desc');
            return b.death - a.death;
          });

          
        }
        else{
          return this.countryDetails.sort((a, b) => {
            this.filteredBy.order = "ascending"
            death_element.classList.add('asc');
            return a.death - b.death;
          });
        }
      }

    },

  },

  computed: {
    SearchStatistics() {
      if ( this.$store.state.language == "en" ){
          return this.countryDetails.filter(hero => {
            return hero.name_en.toLowerCase().includes(this.search.toLowerCase()) || hero.confirmed.toString().toLowerCase().includes(this.search.toLowerCase()) || hero.recovered.toString().toLowerCase().includes(this.search.toLowerCase()) || hero.death.toString().toLowerCase().includes(this.search.toLowerCase())
          })
      }else{
        return this.countryDetails.filter(hero => {
            return hero.name_ka.toLowerCase().includes(this.search.toLowerCase()) || hero.confirmed.toString().toLowerCase().includes(this.search.toLowerCase()) || hero.recovered.toString().toLowerCase().includes(this.search.toLowerCase()) || hero.death.toString().toLowerCase().includes(this.search.toLowerCase())
          })
      }
          
        
    },

  },
  created() {
    axios.get("/api/get-statistics").then((response) => {
      this.statisticsLoaded = true
      this.countryDetails = response.data;
      if ( response.data.status == 'database is empty' ){
        this.dbEmpty = true
      }     
    });
    axios.get("/api/get-statistics-total").then((response) => {
      this.totalStatistics = response.data;

    });

  },
};
</script>
