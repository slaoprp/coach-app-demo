<template>
  <div class="container">
    <div class="group-wrapper">
      <div class="group-card">
        <div class="episode-wrapper">
          <div class="episode-card">
            <div class="episode-header">Episode 1</div>
            <div class="episode-content">
              <span class="taskline">Task 1</span>
              <span class="taskline">Task 2</span>
              <span class="taskline">Task 3</span>
              <span class="taskline">Task 4</span>
            </div>
            <div class="episode-footer">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100vw;
  height: calc(100vh - 80px);
  border: 1px;
}
.group-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 100%;
  height: auto;
  padding: 10px;
  float: left;
}
.group-card {
  position: relative;
  display: flex;
  flex-direction: row;
  border: 1px #ccc solid;
  border-radius: 10px;
  text-align: center;
  width: auto;
  height: auto;
  margin: 5px;
}

.episode-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 300px;
  height: 100%;
  padding: 10px;
  float: left;
}

.episode-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 300px;
  height: auto;
  margin: 5px;
  background-color: darkcyan;
}

.episode-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  background-color: green;
  border-radius: 10px 10px 0px 0px;
  color: white;
}

.episode-content {
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: black;
  padding: 0px 10px 10px 10px;
}

.episode-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  background-color: green;
  border-radius: 0px 0px 10px 10px;
  color: white;
}

.taskline {
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
}
</style>