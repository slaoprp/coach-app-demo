<template>
  <div class="container">
    <div class="group-wrapper">
      <div class="group-card">
        <div class="episode-wrapper"
          v-for="episode in episodes"
          :key="episode.id"
        >
          <div class="episode-card">
            <div class="episode-header">{{ episode.title }}</div>
            <div class="episode-content">
              <span class="taskline"
                v-for="task in tasks"
                :key="task.id"
              >
                {{ task.name }}
              </span>
            </div>
            <div class="episode-footer">{{ episode.position }}</div>
          </div>
        </div>
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
          groupId: 1,
          id: 1,
          title: "Day One",
          position: 1
        },
        {
          groupId: 2,
          id: 1,
          title: "Day Two",
          position: 2
        },
        {
          groupId: 3,
          id: 1,
          title: "Day Three",
          position: 3
        }
      ],
      tasks: [
        {
          episodeId: 1,
          id: 1,
          name: 'Push Up',
        },
        {
          episodeId: 1,
          id: 2,
          name: 'Jumping Jack',
        },
        {
          episodeId: 1,
          id: 3,
          name: 'Jump Squats',
        }
      ]
    }
  },
  computed: {
    tasksFilterByEpisodeId() {
      this.episodes.map((episode) => {
        const tasks = this.tasks.filter((task) => {
          if (task.episodeId === episode.id) {
            return true
          };
        });
        return ({
          episodeId: episode.id,
          tasks: tasks
        })
      })
    }
  }
  
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
  padding: 3px;
  float: left;
}
.group-card {
  position: relative;
  display: flex;
  flex-direction: row;
  /* border: 1px #ccc solid; */
  border-radius: 10px;
  text-align: center;
  width: auto;
  height: auto;
  margin: 3px;
}

.episode-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 300px;
  height: 100%;
  padding: 3px;
  float: left;
}

.episode-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 300px;
  height: auto;
  margin: 3px;
}

.episode-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40px;
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
  min-height: 40px;
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
  min-height: 40px;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
}
</style>