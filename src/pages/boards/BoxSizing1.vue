<template>
  <div class='scroll'>
    <div class='flex'>
      <div class='item'></div>
      <div class='item'></div>
      <div class='item'></div>
      <div class='item'></div>
      <div class='item'></div>
      <div class='item'></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
*{margin: 0; padding: 0; box-sizing: border-box;}

.scroll{
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: lightblue;
}

.flex{
  display: flex;
  padding: 10px;
  width: fit-content;
}

.item{
  width: 250px;
  height: 300px;
  background-color: tomato;
}
</style>