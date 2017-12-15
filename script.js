const { ipcRenderer } = require('electron');
var app = new Vue({
  el: "#app",
  data: {
    tasks: {
      items: []
    }
  },
  methods: {
    addTask() {
      var task = document.getElementById("taskPrompt").value;
      var len = this.tasks.items.length;
      this.tasks.items.push({ taskName: task, completed: false, id: len });
    },
    completeThis(id) {
      this.tasks.items[id].completed = true;
    },
    deleteAll() {
      this.tasks.items = [];
    }
  }
});
//open file ipc
document.getElementById("openFileButton").addEventListener('click', _ => {
  var path = (document.getElementById("openFileName").files[0].path);
  ipcRenderer.send("open", path);
});
ipcRenderer.on('openRen', (event, items) => {
  app.tasks.items = items;
});
// Here is the logic for the menu. Again, 
//JQuery was being a butt so I tried my best and this logic by all means should work.
//I have added console logs so you can see they should be working.
ipcRenderer.on('modal-open', (event) => {
  console.log("Modal open! I WORK!");
  $("#modal3").modal("show");
});
ipcRenderer.on('modal-addTask', (event) => {
  console.log("Modal Add Task! I WORK!")
  $("#modal1").modal("show");
});
ipcRenderer.on('modal-deleteAll', (event) => {
  console.log("Model delete! I WORK!")
   $("#modal2").modal("show");
});