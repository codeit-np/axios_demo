<template>
  <div>
    <!-- Hero Section -->
    <section class="py-10">
      <v-container>
        <v-row>
          <v-col align-self="center" class="flex flex-col gap-4">
            <h1 class="text-5xl font-bold">
              Develop your Coding Skills with Code IT
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
              libero eum ullam aliquid voluptate veritatis quis nisi eaque
              excepturi nulla maiores culpa delectus alias aliquam earum
              corporis non qui nostrum?
            </p>
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  color="red-darken-1"
                  text="Read More"
                  variant="flat"
                  class="w-1/4"
                ></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close Dialog"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
          <v-col>
            <v-img src="~/assets/images/HeroImage.webp"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Hero Section End -->
    <TimeLine />
    <!--  -->
  </div>
</template>

<script setup>
const a = ref("");
const b = ref("");
const c = ref("");

function add() {
  c.value = parseInt(a.value) + parseInt(b.value);
}
</script>
