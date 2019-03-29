Module.register("MMM-Test", {
  defaults: {},
  start: function () {},
  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.innerHTML = "Hello, World1!"
    return element
  },
  notificationReceived: function() {},
  socketNotificationReceived: function() {},
})

/*var Test;
Module.register("MMM-Test", {
    defaults: {},
    start: function (){
        Test = this;
        this.count = 0
    },
  
  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.innerHTML = "Hello, World! " + this.config.foo
    var subElement = document.createElement("p")
    subElement.innerHTML = "Count:" 
    subElement.id = "COUNT"
    element.appendChild(subElement)
    return element
  },
  
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      
      var elem = document.getElementById("COUNT")*/
      /*
      elem.addEventListener("click", () => {
        this.sendNotification('CHANGE_POSITIONS', ...
    ...
    },
    */
   /*
      elem.addEventListener("click", () => {
        elem.innerHTML = "startt"
        this.sendNotification('CHANGE_POSITIONS', 
        modules = {
          'clock':{
              visible: 'true',
              position: 'middle_center',
          },
      }
  )
      }) 
      
        break
    }
  },
})*/
