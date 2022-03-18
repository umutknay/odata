<template>
 <ui5-table class="demo-table" id="table">
      <ui5-table-column popin-text="UserName">
        <ui5-label> UserName</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="FirstName">
        <ui5-label>FirstName</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="LastName">
        <ui5-label>LastName</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="MiddleName">
        <ui5-label>MiddleName</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="Gender">
        <ui5-label>Gender</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="Age">
        <ui5-label>Age</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="Emails">
        <ui5-label>Emails</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="FavoriteFeature" style="width: 200px;">
        <ui5-label>FavoriteFeature</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="Features">
        <ui5-label>Features</ui5-label>
      </ui5-table-column>
      <ui5-table-column popin-text="AddressInfo">
        <ui5-label>AddressInfo</ui5-label> 
      </ui5-table-column>
       <ui5-table-column popin-text="HomeAddress">
        <ui5-label>HomeAddress</ui5-label> 
      </ui5-table-column>
      <ui5-table-row v-for="row in peopleData" :key="row.UserName"> 
        <ui5-table-cell>
          <span>{{ row.UserName }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.FirstName }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.LastName }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.MiddleName ==  null ? 'null' : '' }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.Gender }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.Age ==  null ? 'null' : '' }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.Emails[0] }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.FavoriteFeature }}</span>
        </ui5-table-cell> 
        <ui5-table-cell>
          <span>{{ row.Features.length > 0 ? 'asd' : '-' }}</span>
        </ui5-table-cell>
        <ui5-table-cell>
          <p>{{ row.AddressInfo[0]?.Address}}</p>
          <p>{{ row.AddressInfo[0]?.City?.Name}}</p>
          <p>{{ row.AddressInfo[0]?.City?.CountryRegion}}</p>
          <p>{{ row.AddressInfo[0]?.City?.Region}}</p>
        </ui5-table-cell>
        <ui5-table-cell>
          <span>{{ row.HomeAddress ==  null ? 'null' : '-'}}</span>
        </ui5-table-cell>
      </ui5-table-row>
      
    </ui5-table>
    <ui5-button design="Emphasized" v-if="current" v-on:click="fetchData(current-1)">GERİ</ui5-button>
    <ui5-button design="Emphasized" v-if="current < 5" class="back-button"  v-on:click="fetchData(current + 1)">İLERİ</ui5-button>
</template>

<script>

 
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Label";
import axios from 'axios';

export default {
  
    name: "App",
    data() {
      return {
        peopleData: [],  
        current: 0,
      };
    },
    mounted: function () {  
      this.fetchData(0,5);  
},
    methods: {
          fetchData: function (page = 0,size = 5) {
            // ApiConnection.getPeoples().then((response) =>  { 
            //   console.log(response)
            //   this.peopleData = response.value; 
            this.current = page;
               const headers = { "Content-Type": "application/json" };
                axios.get("https://services.odata.org/TripPinRESTierService/People?$skip="+page+"&$top="+size+"", { headers })
                  .then(response => {
                    this.peopleData = response?.data?.value;
                  });
             
          },
        },
      }
      

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .back-button{
   position: relative;
   margin-left: 15px;
   
 }
 .ui5-table-cell {
   width: 100px;
   min-width: 100px;
 }
</style>
