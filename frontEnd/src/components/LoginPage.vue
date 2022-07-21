<template>

  <div id="loginBg">
   <main>
      <div id="moonPic"></div>

<div class="grid-container">
    <vue-phone-number-input v-model="vuePhone.phone" v-bind="vuePhone.props" size="lg"></vue-phone-number-input>

</div>




   </main>
  </div>
  

  
</template>


<script>

import Vue from "vue";
import VueTelInput from "vue-tel-input";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";


Vue.use(VueTelInput);
Vue.component("vue-phone-number-input", VuePhoneNumberInput);




    export default {
      name: "LoginPage",
      data() {
    return {
      vueTel: {
        phone: "",
        props: {
          preferredCountries: ["CA","US"],
          placeholder: "Enter your phone",
          mode: "international",
          inputOptions: {
            showDialCode: true
          },
          disabledFormatting: false,
          wrapperClasses: "country-phone-input"
        }
      },
      vuePhone: {
        phone: "",
        props: {
          clearable: true,
          fetchCountry: true,
          preferredCountries: ["CA","US"],
          noExample: false,
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:"
          }
        }
      }
    };
  }
  }

      
    

</script>

<style>
 /*the black background */
#loginBg { 
  background: black no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}



#moonPic{
    background-image: url('/public/loginBg.png');
    background-size: 100%;
    width: 330px;
    height: 330px;
    background-repeat: no-repeat;
    position:fixed;
    top:15%;
    left: 41%;
}


/*the box for inputting phone number and its reagion */
.grid-container {

width: 337px;
height: 40px;
background: #020000;
border:none;
border-radius: 10px;
position: absolute;
top: 55%;
left: 41.2%;



}
/*for now, cannot display a two row phone validation, this the grid is deleted in template*/
/*keep the style for later */
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  position:relative;
  height: 52%;
  font-size: 30px;
  margin: -1px;}
  
.country-phone-input .dropdown:focus {
  outline: none;
  color: grey;
}
  
#ph-input{
  height: 160px;
  width:340px;

}

</style>