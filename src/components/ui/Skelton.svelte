<script lang="ts">
  import { variables } from "$lib/styleUtl";

  //*******************************************************************************
  // Props
  //*******************************************************************************
  export let model: string = "";
  export let animate: boolean = false;
  export let line: number = 1;
  export let ratio: number[] = [1, 1];
  export let addClass: string = "";
  export let width: string = "";
  export let height: string = "";

  //*******************************************************************************
  // State
  //*******************************************************************************
  let skeltonClass: string = "";
  let heightStyle: string = height;

  //*******************************************************************************
  // Computed
  //*******************************************************************************
  $: {
    // skeltonClass
    const arr = ["skelton"];
    model && arr.push(model);
    ratio && arr.push(`embed embed-${ratio[0]}by${ratio[1]}`);
    animate && arr.push("animate");
    addClass && arr.push(addClass);
    skeltonClass = arr.join(" ");

    // heightStyle
    if (model === "text" && line) {
      heightStyle = `${
        variables.base.fontSize * line +
        (variables.base.fontSize * variables.base.lineHeight -
          variables.base.fontSize) *
          (line - 1)
      }px`;
    }
  }
</script>

<span class={skeltonClass} style="width: {width}; height: {heightStyle}" />

<style lang="scss">
  @use "$styles/core/core" as *;

  $skelton-bg: rgba(0, 0, 0, 0.1);
  $skelton-bg-dark: rgba(255, 255, 255, 0.1);

  @keyframes skeltonAnime {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .skelton {
    display: block;
    background-color: $skelton-bg;

    @include darkmode {
      background-color: $skelton-bg-dark;
    }

    &.animate {
      animation: skeltonAnime 1s linear infinite;
    }

    &.rounded {
      border-radius: 9999px;
    }

    &.text {
      min-height: $font-base-size;
      background-color: transparent;
      background-image: repeating-linear-gradient(
        0deg,
        $skelton-bg,
        $skelton-bg $font-base-size,
        transparent $font-base-size,
        transparent ($font-base-size * $font-base-line-height)
      );

      @include darkmode {
        background-color: transparent;
        background-image: repeating-linear-gradient(
          0deg,
          $skelton-bg-dark,
          $skelton-bg-dark $font-base-size,
          transparent $font-base-size,
          transparent ($font-base-size * $font-base-line-height)
        );
      }
    }

    &.h1 {
      height: $font-heading-h1-sm;

      @include breakpointUp {
        height: $font-heading-h1;
      }
    }

    &.h2 {
      height: $font-heading-h2-sm;

      @include breakpointUp {
        height: $font-heading-h2;
      }
    }

    &.h3 {
      height: $font-heading-h3-sm;

      @include breakpointUp {
        height: $font-heading-h3;
      }
    }

    &.h4 {
      height: $font-heading-h4-sm;

      @include breakpointUp {
        height: $font-heading-h4;
      }
    }

    &.h5 {
      height: $font-heading-h5-sm;

      @include breakpointUp {
        height: $font-heading-h5;
      }
    }

    &.h6 {
      height: $font-heading-h6-sm;

      @include breakpointUp {
        height: $font-heading-h6;
      }
    }
  }
</style>
