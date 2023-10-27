<script setup lang="ts">
import NodeService from '@/service/NodeService';
const treeValue = ref();
const selectedTreeValue = ref();
const treeTableValue = ref();
const selectedTreeTableValue = ref();
const nodeService = new NodeService();

onMounted(() => {
  nodeService.getTreeNodes().then(data => (treeValue.value = data));
  nodeService.getTreeTableNodes().then(data => (treeTableValue.value = data));
});
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Tree</h5>
        <Tree v-model:selectionKeys="selectedTreeValue" :value="treeValue" selection-mode="checkbox"></Tree>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h5>TreeTable</h5>
        <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue" selection-mode="checkbox">
          <template #header>FileSystem</template>
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>
    </div>
  </div>
</template>
