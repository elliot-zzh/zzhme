<template>
  <div class="slide-enter-content">
    <div
      v-for="item in projects"
      @click="jump('https://github.com/' + item.repoLink)"
      style="--start: 400ms"
    >
      <div
        class="base-block rounded-10px p-10px mt-2rem mb-2rem p-20px shadow-md bg-light-mid-gray hover:shadow-lg transition-240"
      >
        <div class="mb-0.9rem mt-0.5rem">
          <a
            :href="'https://github.com/' + item.repoLink"
            target="_blank"
            class="font-700 mono-more text-1.5rem flex items-center"
          >
            <span>
              {{ item.name }}
            </span>
            <span
              class="i-lucide-arrow-up-right-square ml-3px text-1.3rem transition-120 transition-ease-out op-65"
            ></span>
          </a>
        </div>
        <div>
          <a
            v-if="item.websiteLink !== undefined"
            :href="'https://' + item?.websiteLink"
            class="flex items-center"
          >
            <span
              class="i-lucide-flag-triangle-right mx-10px text-0.9rem transition-160"
            ></span>
            <span
              ><u>{{ item?.websiteLink }}</u></span
            >
            <span
              class="i-lucide-arrow-up-right-square ml-6px text-0.9rem transition-120 transition-ease-out op-0"
            ></span>
          </a>
        </div>
        <div class="mt-0.9rem ml-1.3rem" v-if="Array.isArray(item.description)">
          <div v-for="(line, index) in item.description" :key="index" class="m-3px">
            <template v-if="typeof line === 'string' && line.startsWith('#')">
              <b class="font-800">#</b>
              <em style="font-style: italic">{{ line.slice(1) }}</em>
            </template>
            <template v-else>
              {{ line }}
            </template>
          </div>
        </div>
        <div class="mt-0.9rem ml-1.3rem" v-else>
          <template v-if="typeof item.description === 'string' && item.description.startsWith('#')">
            <b>#</b>
            <em style="font-style: italic">{{ item.description.slice(1) }}</em>
          </template>
          <template v-else>
            {{ item.description }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../logics/projects'

const jump = (url: string) => {
  window.open(url)
}
</script>
<style scoped>
a:hover .i-lucide-arrow-up-right-square {
  opacity: 1;
  transform: translateX(5px);
}
a:hover .i-lucide-flag-triangle-right {
  transform: translateY(-3px);
}
</style>
