<template>
  <div>
    <b-alert variant="success" :show="showDismissibleAlert" dismissible>{{ message }}</b-alert>
  </div>
</template>

<script>
export default {
  props: ['message', 'showDismissibleAlert'],
};

const obj = {
  foo: {
    bar: {
      baz() {
        return 42;
      },
    },
  },
};
const baz = obj?.foo?.bar?.baz(); // 42
const safe = obj?.qux?.baz(); // undefined
const safe2 = obj?.foo.bar.qux?.(); // undefined
console.log('baz = ', baz, ' safe = ', safe, ' safe2 = ', safe2);
</script>
