<template lang="pug">
div.flex.flex-column
  // center
  div(style="width: 32px").flex-none.align-center.ml-8.mt-8
    slot(name="icon")
  div.flex-grow.p-4
    h3.font-bold.text-lg
      slot(name="heading")
    slot
</template>
