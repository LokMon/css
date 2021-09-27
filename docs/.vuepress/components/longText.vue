<style scoped lang="scss">
.long-text-container {
  width: 200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  height: 100px;

  white-space: pre-line;
  word-wrap: break-word;
}
</style>

<template>
  <div class="long-text-container">
    <span>文字长度超出不折行一般发生在最后一个字符是英文单词或连写的数字，使用以上设置会使单词折断。</span>
  </div>
</template>

<script>
export default {
  name: "longText",
  data() {
    return {};
  }
};
</script>
