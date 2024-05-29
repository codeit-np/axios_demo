<template>
  <div>
    <v-container>
      <nav class="flex items-center gap-6">
        <div>
          <v-img
            width="180px"
            src="https://codeit.com.np/storage/01HYTEZP4QQVATVMF33WTG1J4Z.webp"
            lazy-src="https://codeit.com.np/storage/01HYTEZP4QQVATVMF33WTG1J4Z.webp"
          ></v-img>
          <div>Inspiring Youth Since 2017</div>
        </div>

        <div class="flex-1 position-relative">
          <input
            type="search"
            placeholder="What do you want to learn today?"
            class="border px-4 py-2 w-full rounded-xl focus:border focus:border-green-500"
          />
          <v-icon
            icon="mdi-magnify"
            class="position-absolute top-2 right-3"
          ></v-icon>
        </div>

        <div class="position-relative">
          <div>Upcoming Classes</div>
          <div
            class="w-4 h-4 bg-orange-600 text-xs flex justify-center items-center text-white rounded position-absolute -top-2 -right-4"
          >
            4
          </div>
        </div>

        <div class="flex gap-2">
          <v-btn variant="tonal" color="red-lighten-1">Student Portal</v-btn>
          <v-btn variant="flat" color="red-darken-1">Student Portal</v-btn>
        </div>
      </nav>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>