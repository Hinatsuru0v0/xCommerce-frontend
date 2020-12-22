<template>
  <div class="specification-container" v-if="productInfo['specifications']">
    <div
      class="specification-item"
      v-for="(specification, index) in productInfo['specifications']"
      :key="index"
    >
      <h3 class="specifications-name">{{ specification.name }}</h3>
      <div
        class="specification-column"
        v-for="(item, n) in specification['items']"
        :key="n"
        @click="handleSpecificationChange(item.value, index, $event, n)"
      >
        <label>
          <input
            type="radio"
            :disabled="!item.isShow"
            class="specification-choice"
          />
        </label>
        <label
          class="specification-label"
          :class="[
            item.isShow ? '' : 'invalid',
            subIndex[index] === n ? 'active' : ''
          ]"
          >{{ item.value }}</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XProductSpecification",
  props: {
    product: Object,
    userSelected: Object
  },
  data() {
    return {
      productInfo: {},
      itemDifferences: {},
      subIndex: []
    };
  },
  created() {
    this.initializeData();
  },
  watch: {
    product() {
      this.initializeData();
    }
  },
  methods: {
    initializeData() {
      this.productInfo = this.product;
      for (let i in this.productInfo["differences"]) {
        this.itemDifferences[
          this.productInfo["differences"][i]["specification"]
        ] = this.productInfo["differences"][i];
      }
      this.checkSpecification();
    },
    handleSpecificationChange(item, n, event, index) {
      if (this.userSelected.selectedArray[n] !== item) {
        this.userSelected.selectedArray[n] = item;
        this.subIndex[n] = index;
      } else {
        this.userSelected.selectedArray[n] = "";
        this.subIndex[n] = -1;
      }
      this.checkSpecification();
    },
    checkSpecification() {
      let options = this.productInfo["specifications"];
      let i = 0;
      let checkedResult = [];
      for (i in options) {
        checkedResult[i] = this.userSelected.selectedArray[i]
          ? this.userSelected.selectedArray[i]
          : "";
      }
      for (i in options) {
        let lastCharacter = checkedResult[i];
        for (let j in options[i]["items"]) {
          checkedResult[i] = options[i]["items"][j].value;
          options[i]["items"][j].isShow = this.isValid(checkedResult);
        }
        checkedResult[i] = lastCharacter;
      }
      if (this.itemDifferences[checkedResult]) {
        this.userSelected.choosePrice =
          this.itemDifferences[checkedResult]["price"] || 0;
        this.userSelected.id =
          this.itemDifferences[checkedResult]["id"] || null;
      }
      this.$forceUpdate();
    },
    isValid(checkedResult) {
      for (let i in checkedResult) {
        if (checkedResult[i] === "") {
          return true;
        }
      }
      if (this.itemDifferences[checkedResult] === undefined) {
        return false;
      }
      return this.itemDifferences[checkedResult]["stock"] !== 0;
    }
  }
};
</script>

<style scoped>
h3,
label,
fieldset {
  margin: 0;
  padding: 0;
}
.specification-item {
  margin-top: 17px;
}
.specifications-name {
  font-size: 17px;
  line-height: 1.52947;
  font-weight: 600;
  margin-top: 22px;
}
.specification-column {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0;
  min-height: 2px;
  display: flex;
  margin-top: 0.82353rem;
  max-width: 28.82353rem;
}
.specification-column:first-child {
  margin-top: 9px;
}
.specification-column:last-child {
  margin-bottom: 4px;
  padding-bottom: 0;
}
.specification-choice {
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.specification-label {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 4.88235rem;
  padding: 0.70588rem 0.88235rem;
  text-align: center;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  text-indent: 0;
  font-size: 17px;
  line-height: 1.23543;
  font-weight: 400;
}
.active {
  border-color: #0070c9;
  position: relative;
  border-width: 0.17765rem;
  padding: 0.64706rem;
}
.invalid {
  background-color: #ccc;
  opacity: 0.4;
  color: #000;
  pointer-events: none;
}
</style>
