const mutations = {
    SET_NODE_MAP(state, {nodes}) {
        state.nodes = nodes
    },
    UPDATE_NODE_STATUS(state,{id, status}) {
        const nodeMap = state.nodes;
        const node = nodeMap.get(id);
        node.status = status;
        nodeMap.set(id, node);
        state.nodes = nodeMap;
    },
    START_MULTI_SELECTING(state) {
        state.isMultiSelecting = true
    },
    STOP_MULTI_SELECTING(state) {
        state.isMultiSelecting = false
    },
    RESET_NODE_STATUS(state, {id}) {
        const nodeMap = state.nodes;
        const node = nodeMap.get(id);
        node.status = "default";
        nodeMap.set(id, node);
        state.nodes = nodeMap;
    }
}

export default mutations;