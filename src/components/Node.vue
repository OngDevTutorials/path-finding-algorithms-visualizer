<template>
  <div class="node" @click="handleNodeClick" :style="{

  }"
  :class="[nodeClass]"
  :id="boardNodeId">

  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.node.id,
            status: this.node.status,
            previousNode: null,
            path: null,
            direction: null,
            distance: Infinity,
            totalDistance: Infinity
        }
    },
    props: {
        boardNodeId: {
            require: true,
            type: String,
        },
        node: {
            type: Object,
            require: true,
        }
    },
    methods: {
        handleNodeClick: () => {
            console.log(this.id)
        },
        nodeClass: () => {
            return this.status
        },
    }
}
</script>

<style>
.unvisited{
    background-color: whitesmoke;
}
.visited{
    background-color: blue;
}
.wall{
    background-color: darkslategray;
}
.shortedPath{
    background-color: green;
}
</style>