<template>
  <div>
    <form>
      <label>
        <span>输入</span>
        <input type="text" :value="a" @input="(e) => (b = e.target.value)" />
      </label>
      <button @click="onSave" class="submit">提交</button>
    </form>
    <div>{{ a }}</div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return { b: null };
  },
  created() {
    this.$store.commit("fetchA");
  },
  computed: {
    a() {
      return this.$store.state.a;
    },
  },
  methods: {
    onSave() {
      this.$store.commit("saveA", this.b);
    },
  },
};
</script>

<style lang="sass" scoped>
.submit
  color: red
</style>