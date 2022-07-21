<template>

  <div id="start">
    <main>
    <button id="b"><b>Start</b></button>
    </main>

  </div>
  

  
</template>


<script>
    export default {
      name: "StartPage"
      };
</script>

<style>
* {
  margin:0;
  padding:0;

}

#start{
  background-image: url('/public/starterBg.png');
  background-size: cover;
  background-position: bottom;
}

main {
  min-height:100vh; 
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