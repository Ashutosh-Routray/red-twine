<template>
  <div class="sidebarcomponent">
    <div>
      <AkCut class="icon" />
    </div>
    <div>
      <BxPaste class="icon" />
    </div>
    <div>
      <FlFilledPersonAccounts class="icon" />
    </div>
    <div>
      <AnTwotoneBank class="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BxPaste } from "@kalimahapps/vue-icons";
import { AkCut } from "@kalimahapps/vue-icons";
import { FlFilledPersonAccounts } from "@kalimahapps/vue-icons";
import { AnTwotoneBank } from "@kalimahapps/vue-icons";
</script>

<style>
.sidebarcomponent {}

.icon {
  font-size: 2.5rem;
}
</style>