<template>
  <div class="container">
    <div class="group">
      <div class="episode-card" v-for="episode in episodes" :key="episode.id">
        <div class="episode-header">{{ episode.title }}</div>
        <div class="episode-content">
          <span class="taskline"
            v-for="task in tasks"
            :key="task.id"
          >{{ task.name }}</span>
        </div>
        <div class="episode-footer">{{ episode.position }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [
        {
          id: 1,
          title: "List 1",
          position: 1
        },
        {
          id: 2,
          title: "List 2",
          position: 2
        },
        {
          id: 3,
          title: "List 3",
          position: 3
        },
        {
          id: 4,
          title: "List 4",
          position: 4
        },
        {
          id: 5,
          title: "List 5",
          position: 5
        },
        {
          id: 6,
          title: "List 6",
          position: 6
        }
      ],
      tasks: [
        {
          id: 1,
          name: "Push Up"
        },
        {
          id: 2,
          name: "Squats"
        },
        {
          id: 3,
          name: "Jumping Jack"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex; 
  height: calc(100vh - 80px); 
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  border: 1px rgba(255, 255, 255, 0.000);
}

.group {
  position: relative;
  display: flex; 
  flex-direction: row;
  background-color: blue;
  width: fit-content;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  float: left;
}

.episode-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  min-width: 300px;
  margin: 10px;
  background-color: cornflowerblue;
  border-radius: 10px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: black;
  overflow: scroll;
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