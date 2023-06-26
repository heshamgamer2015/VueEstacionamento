<template>
    <div class="container text-center">
      <h2 class="mt-5">Bem vindo ao Estacionamento</h2>
      <h4 class="mt-4">Acesse os elementos acima para realizar as funções disponiveis</h4>
    </div>
    <div class="flex-esta" >
      <div class="objeto"> <img  class="carro-img" src="../assets/carro.png"  > </div>
      <div ><img  class="estacionamento-img" src="../assets/estacionamento-1.png" ></div>
  </div>
  </template>
<style>
 @keyframes moveRight {
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(750px);

  }
}
/*@keyframes moveRight { 
  0%   {top: 0px;}
  25%  {top: 200px;}
  75%  {top: 50px}
  100% {top: 100px;}
}
*/
.flex-esta{
  display: flex;
  justify-content: space-between;

}
.objeto {
    animation: moveRight 4s linear infinite; 
    z-index: 2;

  
}
.carro-img{
   width: 150px;
    height: 150px;
    margin: 0%;
    padding: 0%;
}
.estacionamento-img{
  transform: rotate(90deg);
  width: 400px;
  height: 400px;
  z-index: 1;
  
}

</style>

  <script lang="ts">
  
  import { defineComponent } from 'vue';
  

  export default defineComponent({
    name: 'Home',
    components: {
    
    }

    });
  </script>