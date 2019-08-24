<template>
  <div class="hello">
    <h1 v-colorDerictive="'black'">{{ getFullMessage() }}</h1>
    <h1 v-colorDerictive="'black'">{{ msg }}</h1>
    <button @click="clicked">Click</button>
    <router-link to="/hello-ts">
      HelloTs
    </router-link>
     <router-link to="/">
      Hello
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { createDecorator } from 'vue-class-component';
import colorDerictive from '../color-derictive';
import { Prop } from 'vue-property-decorator'; 

const Log = (msg?: string) => { return createDecorator((component, key) => {
    console.log('Component: ', component);
    console.log('Key: ', key);

    console.log(msg);
  })
}

class HelloComp extends Vue {
  msg: string
}

@Component({
  directives: {
    colorDerictive
  }
})

export default class Hello extends HelloComp {
  message: string = 'Hello my near';
  name: 'paco';

  @Log('yooo')
  @Prop() msg: string;
  
  getFullMessage() {
    return `${this.message} ${this.msg}`
  }

  created() {
    console.log('created');
  }

  clicked() {
    console.log('clicked');
  }

  beforeRouteEnter(to, from, next) {
    console.log('Enter')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
