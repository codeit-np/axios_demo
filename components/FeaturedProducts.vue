<template>
  <SfScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div
      v-for="p in products"
      :key="p"
      class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
    >
      <div class="relative">
        <SfLink href="#" class="block">
          <img
            :src="p.image"
            :alt="i"
            class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
            width="146"
            height="146"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div class="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href="#" variant="secondary" class="no-underline">{{
          p.title
        }}</SfLink>
        <span class="block mt-2 font-bold">{{ price }}</span>
      </div>
    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
</template>

<script  setup>
import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from "@storefront-ui/vue";
const products = await useFetch("https://fakestoreapi.com/products?limit=5");
// const products = Array.from(Array(10), (_, i) => ({
//   id: i.toString(),
//   name: "Athletic mens walking sneakers",
//   price: "$2,345.99",
//   img: {
//     src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
//     alt: "White sneaker shoe",
//   },
// }));
</script>

