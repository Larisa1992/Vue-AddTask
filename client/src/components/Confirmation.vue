<template>
  <div>
    <b-alert variant="success" :show="showDismissibleAlert" dismissible>{{ message }}</b-alert>
  </div>
</template>

<script>
export default {
  props: ['message', 'showDismissibleAlert'],
};
</script>
