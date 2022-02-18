<template>
  <div
    class="info-card"
    :style="isVisible && backgroundImageGenerated"
    v-show="isVisible"
  >
    <div class="info-card-content">
      <div class="info-card-logo-background"
           v-show="isVisible"
      >
        <div class="info-card-logo shadow"><i :class="[logo, 'logoFA']"></i></div>
      </div>
      <div class="info-card-title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import GeoPattern from 'geopattern'

export default {
  name: 'InfoCard',
  props: ['title','logo'],
  data() {
    return {
      test:"ABC",
      isVisible:false
    }
  },
  mounted: function () {
    //console.log('The props are also available in JS:', this);
    this.isVisible=true
  },
  computed: {
    backgroundImageGenerated () {
      var pattern = GeoPattern.generate(Math.random().toString());
      //var pattern = GeoPattern.generate(this.title);
      return {'background-image' : pattern.toDataUrl()}
    }
  }
}
</script>

<style scoped>

.info-card {
  height: 16rem;
  width: 16rem;

  text-align: center;
  background-color:darkgrey;
  display:table;
  color:white;
}

div.info-card:hover {
  color:#FFC107;
}

.info-card-content {
  height:100%;
  display: table-cell;
  vertical-align: middle;
  align-content: center;
  text-align: center;
}
.info-card-title {
  font-weight: 700;
  font-size: 3rem;
  color:inherit;
  height:fit-content;
  text-shadow:
   -1px -1px 5px black,
    1px -1px 5px black,
    -1px 1px 5px black,
     1px 1px 5px black;
}
.info-card-logo{
  color:inherit;
  height:fit-content;
  width:fit-content;
  stroke:black;
  stroke-width: 5px;
}

.logoFA {
  font-size: 7rem;
}

.svg-inline--fa{ /* outline logo */
  stroke: black;
  stroke-width: 2px;
}

.shadow {
  -webkit-filter: drop-shadow( 10px 10px 5px rgba(0, 0, 0, .9));
  filter: drop-shadow( 10px 10px 5px rgba(0, 0, 0, .9));
}
.info-card-logo-background {
  background-color:rgba(102, 102, 102, 0.55);
  padding:25px;
  border-radius: 20px;
  display: inline-block;
}

</style>