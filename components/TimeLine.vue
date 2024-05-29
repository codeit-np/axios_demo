<template>
  <section class="bg-gray-100">
    <v-container>
      <h1 class="text-center text-4xl pb-4">Our Evaluation</h1>
      <p class="text-center pb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nesciunt
        minus eaque harum aspernatur consequatur nobis explicabo odio reiciendis
        vel amet fuga modi, dolore optio quidem sapiente cumque consectetur
        quos.
      </p>
      <v-timeline direction="horizontal" line-inset="12">
        <v-timeline-item>
          <template v-slot:opposite> IT Training </template>
          Professionl IT Training
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite> Project Work </template>
          Project Work
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite> Internship </template>
          Lorem ipsum dolor sit amet.
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite> Job Placement </template>
          Lorem ipsum dolor sit amet.
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>