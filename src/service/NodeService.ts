export default class NodeService {
  async getTreeTableNodes() {
    const res = await fetch('demo/data/treetablenodes.json');
    const d = await res.json();
    return d.root;
  }

  async getTreeNodes() {
    const res = await fetch('demo/data/treenodes.json');
    const d = await res.json();
    return d.root;
  }
}
