
import Vue from 'vue';
import VueMqtt from 'vue-mqtt';
import 'bootstrap';
Vue.use(VueMqtt, 'mqtt://localhost:9001', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)});
var enc = new TextDecoder("utf-8");
var app = new Vue({
    el: '#app',
    data: {
      error: false,
      messages:[],
      publishTopic: '',
      publishPayload: ''
    },
    mounted(){
      console.log("mounted");
      this.$mqtt.subscribe('#');
      this.$root.$mqtt.on("message", function(topic, message) {
        var self = this;
        message = new TextDecoder("utf-8").decode(message);
        console.log("topic:"+topic+", message: "+message);
        var found = false;
        for(var i=0;i<self.messages.length;i++){
          if(self.messages[i].topic == topic){
            self.messages[i].payload = message;
            found = true;
          }
        }
        if(!found){
          self.messages.push({topic:topic,payload:message});
        }
      }.bind(this));
    },
    methods: {
      publish: function(){
        this.$mqtt.publish(this.publishTopic,this.publishPayload);
      }
    }
  });
