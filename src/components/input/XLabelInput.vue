<template>
  <div class="x-label-input">
    <label>
      <input
        :type="data.type"
        class="input-component"
        v-model="data.content"
        @input="checkInputContent"
      />
      <span
        class="input-label"
        :class="{
          'input-has-content': status,
          'input-no-content': !status
        }"
        >{{ label }}</span
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "XLabelInput",
  props: {
    data: Object,
    label: String
  },
  data() {
    return {
      status: false
    };
  },
  methods: {
    checkInputContent() {
      this.status = this.data.content.length > 0;
    }
  }
};
</script>

<style>
.x-label-input .input-no-content {
  font-size: 17px;
  line-height: 1.23536;
  top: 1.05882rem;
  letter-spacing: 0;
}
.x-label-input .input-has-content,
.x-label-input .input-component:focus ~ .input-label {
  font-size: 12px;
  line-height: 1.33337;
  top: 0.58824rem;
  letter-spacing: -0.01em;
}
</style>

<style scoped>
.x-label-input {
  position: relative;
}
.x-label-input .input-component {
  height: 3.29412rem;
  width: 100%;
  color: #1d1d1f;
  font-size: 17px;
  line-height: 1.23536;
  margin-top: 1px;
  margin-bottom: 0.82353rem;
  padding: 1.05882rem 0.94118rem 0;
  box-sizing: border-box;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  text-overflow: ellipsis;
  text-align: left;
}
.x-label-input .input-label {
  color: #86868b;
  position: absolute;
  pointer-events: none;
  left: 1rem;
  max-width: calc(100% - 32px);
  transition-timing-function: ease-in;
  transition-duration: 0.125s;
  white-space: nowrap;
  overflow: hidden;
}
</style>
