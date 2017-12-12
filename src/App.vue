<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from 'components/m-header'
import mFooter from 'components/m-footer'

export default {
  name: 'app',
  components: {
    mHeader,
    mFooter
  }
}
</script>

<style>
#app {
	
}
</style>
