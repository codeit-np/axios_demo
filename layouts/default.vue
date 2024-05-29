<template>
  <v-app>
    <header>
      <Menu />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </v-app>
</template>