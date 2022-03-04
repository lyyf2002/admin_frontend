<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
          <Category1></Category1>
      </el-col>
      <el-col :span="12">
          <Category></Category>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Category1 from "./Category1";
import Category from "./Category";
export default {
  name: "",
  components: {
    Category1,
    Category,
  },
};
</script>

<style scoped>
</style>
