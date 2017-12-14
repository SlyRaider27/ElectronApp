var app = new Vue({
      el: "#app",
      data: {
        tasks: {
          items: []
        }
      },
      methods: {
        addTask(){
            var task = document.getElementById("taskPrompt").value;
            var len = this.tasks.items.length;
            this.tasks.items.push({taskName:task, completed:false, id:len});
        },
        completeThis(id) {
         this.tasks.items[id].completed = true;
        },
        deleteAll() {
          this.tasks.items = [];
        }
      }
    });

    document.getElementById("openFileButton").addEventListener('click', _=>{
        console.log(document.getElementById("openFileName").files[0].path)
    });