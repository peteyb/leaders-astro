<template>
  <div id="breadcrumbs">
    <div v-if="ancestors.length > 0">
      <h2 class="sr-only">You are here:</h2>
      <div class="page-breadcrumbs">
        <span class="link-breadcrumbs">
          <template v-for="(ancestor, index) in ancestors" :key="ancestor.id">
            <span>
              <a :href="`${ancestor.url}`">
                <span>{{ ancestor.title }} </span>
              </a>
            </span>
            <span class="divider" :key="index">:</span>
          </template>

          <span v-if="currentPage.meta.showInMenus" class="breadcrumbs-current">
            <a :href="`${currentPage.slug}`">
              <span>{{ currentPage.title }}</span>
            </a>
          </span>
        </span>
      </div>
    </div>
    <!-- <script v-html="jsonLD" type="application/ld+json"></script> -->
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import type { Page } from "../models/wagtail";

const props = defineProps({
  currentPage: { type: Object as PropType<Page>, required: true },
  breadcrumbs: { type: Array as () => Array<Page>, default: [] },
});

const ancestors = computed(() => {
  return props.breadcrumbs.slice(1).filter((x) => x.showInMenus);
});
</script>

<style lang="css" scoped>
.container {
  padding-top: 1.5rem;
}

.link-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--font-small);
}
.link-breadcrumbs .breadcrumbs-current {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  margin: -1px;
}

a {
  --link-default-text-decoration: none;
}

.divider {
  margin: 0px 5px 0px 5px;
  position: relative;
  width: 14px;
  height: 11px;
  background-image: url(../images/icons/arrows/key-arrow-right.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
}
</style>
