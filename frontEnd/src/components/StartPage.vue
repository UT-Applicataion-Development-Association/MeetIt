<template>
  <div class="background">
    <button id="b"><b>Start</b></button>


  </div>
  

  
</template>


<script>
    export default {
      name: "StartPage"
      
    }

</script>

<style>

html { 
  background: url(/public/starterBg.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#b{
  background-color:white;
  border-radius: 35px;
  position: absolute;
  left: 43%;
  top: 80%;
  padding: 10px 120px;
  border: none;
  font-size: 25px;
} 

</style>