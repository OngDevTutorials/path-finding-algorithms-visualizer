<template>
  <div
    class="node"
    @mouseup="handleMouseUpNode()"
    @mousedown.prevent="handleMouseDownNode()"
    @mouseover="handleMouseOverNode()"
    :style="{}"
    :class="nodeClass"
    :id="node.id"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_NODE_STATUS, RESET_NODE_STATUS } from "../store/mutationTypes";
export default {
  data() {
    return {
      previousNode: null,
      path: null,
      direction: null,
      distance: Infinity,
      totalDistance: Infinity,
      isBusy: false,
      previousStatus: ""
    };
  },
  props: {
    node: {
      type: Object,
      require: true,
    },
    width: {
      type: Number,
      require: true,
    },
  },
  computed: {
    ...mapGetters(["boardState", "currentDesignNodeType", "isMultiSelecting"]),
    nodeClass() {
      return this.node.status;
    },
  },
  methods: {
    handleMouseDownNode() {
        this.previousStatus = this.node.status;
      if (this.boardState === "design") {
        this.updateNodeStatus();
      }
    },
    handleMouseOverNode() {
      if (
        this.boardState === "design" &&
        this.isMultiSelecting &&
        this.node.status !== this.currentDesignNodeType
      ) {
        this.updateNodeStatus();
      }
    },
    handleMouseUpNode(){
        if(this.boardState === "design" && !this.isMultiSelecting){
            if(this.previousStatus === this.currentDesignNodeType) {
                this.resetNodeStatus();
            }else{
                this.updateNodeStatus();
            }
        }
    },
    updateNodeStatus() {
      this.$store.commit(UPDATE_NODE_STATUS, {
        id: this.node.id,
        status: this.currentDesignNodeType,
      });
    },
    resetNodeStatus() {
        this.$store.commit(RESET_NODE_STATUS, {
        id: this.node.id
      });
    }
  },
};
</script>

<style>
.unvisited, .default {
  background-color: whitesmoke;
}
.visited {
  background-color: blue;
}
.wall {
  background-color: darkslategray;
}
.shortedPath {
  background-color: green;
}
.node {
  height: 100%;
  transition: 0.3s ease-in-out;
  border: 0.5px solid lightgrey;
}
</style>