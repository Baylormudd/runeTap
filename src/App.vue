<template>
  <div id="app">
    <div class="container">
      <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Rune-Flick
      </h1>
      <h2 class="subtitle">
        Practice your OSRS prayer flicking
      </h2>
    </div>
  </div>
</section>
      <div class="columns">
      <div class="column">    
      <router-view name="a"/>
      </div>
        <div class="column">    
      <router-view/>
            </div>
        <div class="column">    
      <router-view name="b"/>
            </div>
      </div>
    </div>
   
     

  </div>
</template>


<style lang="scss">
</style>
<script>
export default {
  
}
</script>