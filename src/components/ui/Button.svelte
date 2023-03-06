<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { variables } from "$lib/styleUtl";
  import Icon from "$components/ui/Icon.svelte";
  import Loader from "$components/ui/Loader.svelte";

  // Variables
  //*******************************************************************************
  const dispatch = createEventDispatcher();

  // State
  //*******************************************************************************
  let buttonClass: string = "";
  let loaderColor: string = "";
  let textColorVariant: string = "";
  let bgColorVariant: string = "";

  // Props
  //*******************************************************************************
  export let model: string = "bg";
  export let type: "button" | "submit" = "button";
  export let color: string = "primary";
  export let title: string = "";
  export let href: string = "";
  export let target: string = "";
  export let loading: boolean = false;
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let starticon: string = "";
  export let endicon: string = "";

  // Computed
  //*******************************************************************************
  $: {
    // buttonClass
    const arr = ["btn"];
    model && arr.push(model);
    loading && arr.push("connecting");
    active && arr.push("active");
    disabled && arr.push("disabled");
    color === "default" && arr.push("default");
    buttonClass = arr.join(" ");

    // loaderColor
    if (model?.includes("bg")) {
      loaderColor = color === "white" ? "primary" : "white";
    } else if (model?.includes("border")) {
      loaderColor = color === "white" ? "white" : color ? color : "primary";
    } else {
      loaderColor = "primary";
    }

    // textColorVariant
    if (model.includes("bg")) {
      textColorVariant =
        color === "white" ? variables.theme.bodyColor : "white";
    } else {
      textColorVariant = variables.color[color];
    }

    // bgColorVariant
    if (model.includes("border")) {
      bgColorVariant = variables.lightColor[color];
    } else {
      bgColorVariant = variables.color[color];
    }
  }

  // Methods
  //*******************************************************************************
  const onClick = (event: Event) => dispatch("click", event);
</script>

{#if href}
  <a
    {href}
    {target}
    class={buttonClass}
    style="
        --textColorVariant: {textColorVariant};
        --bgColorVariant: {bgColorVariant};
    "
    title={loading ? "通信中..." : title}
  >
    {#if loading}
      <Loader model="spin" color={loaderColor} />
    {:else}
      {#if starticon}<span class="icon"><Icon>{starticon}</Icon></span>{/if}
      <span class="text"><slot /></span>
      {#if endicon}<span class="icon"><Icon>{endicon}</Icon></span>{/if}
    {/if}
  </a>
{:else}
  <button
    {type}
    class={buttonClass}
    style="
        --textColorVariant: {textColorVariant};
        --bgColorVariant: {bgColorVariant};
    "
    aria-label={loading ? "通信中..." : title}
    {disabled}
    on:click={onClick}
  >
    {#if loading}
      <Loader model="spin" color={loaderColor} />
    {:else}
      {#if starticon}<span class="icon"><Icon>{starticon}</Icon></span>{/if}
      <span class="text"><slot /></span>
      {#if endicon}<span class="icon"><Icon>{endicon}</Icon></span>{/if}
    {/if}
  </button>
{/if}

<style lang="scss">
  @use "$styles/core/core" as *;

  @mixin blockIcon() {
    padding-left: $button-padding-x + $icon-size;
    padding-right: $button-padding-x + $icon-size;

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;

      &:first-child {
        left: calc($button-padding-x / 2);
      }

      &:last-child {
        right: calc($button-padding-x / 2);
      }
    }
  }

  @mixin blockBtn() {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    @include blockIcon;
  }

  @mixin longBtn() {
    min-width: 240px;
    @include blockIcon;
  }

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: $button-padding-x;
    flex: 0 0 auto;

    position: relative;
    z-index: 2;
    user-select: none;
    cursor: pointer;

    line-height: $icon-size;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: top;
    @include textKerning;

    color: inherit;
    border: $border-width solid transparent;
    box-shadow: $input-box-shadow;
    @include rounded;
    @include transition((color, background, border, box-shadow));

    // Default color
    background-color: $color-muted-bg;

    @include darkmode {
      background-color: $dark-color-muted-bg;
    }

    @include focusMouse {
      border-color: $color-border;

      @include darkmode {
        border-color: $dark-color-border;
      }
    }

    // Default size
    min-width: $input-height-md;
    font-size: $input-fontsize-md;
    padding: $input-padding-md $button-padding-x;

    &:active {
      transition: none;
      transform: scale(0.98);
      transform-origin: center bottom;
    }

    &.connecting {
      pointer-events: none;
    }

    &.disabled,
    &:disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.3;
      box-shadow: none;

      &:active {
        transform: none;
      }
    }

    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: calc($button-padding-x / 2);
    }

    .icon {
      flex: 0 0 auto;
      height: $icon-size;
      margin-left: calc($button-padding-x / -2);
      margin-right: calc($button-padding-x / -2);
    }

    // Model
    &.sm {
      min-width: $input-height-sm;
      font-size: $input-fontsize-sm;
      padding: $input-padding-sm $button-padding-x;

      ::v-deep(.font-icon) {
        transform: scale(0.75);
      }
    }

    &.lg {
      min-width: $input-height-lg;
      font-size: $input-fontsize-lg;
      padding: $input-padding-lg $button-padding-x;
    }

    &.rounded {
      border-radius: 9999px;
    }

    &.block {
      @include blockBtn;
    }

    &.blockUp {
      @include breakpointUp {
        @include blockBtn;
      }
    }

    &.blockDown {
      @include breakpointDown {
        @include blockBtn;
      }
    }

    &.long {
      @include longBtn;
    }

    &.longUp {
      @include breakpointUp {
        @include longBtn;
      }
    }

    &.longDown {
      @include breakpointDown {
        @include longBtn;
      }
    }

    &.icon {
      padding-left: 0;
      padding-right: 0;
    }

    &.switch {
      display: inline-flex;
      vertical-align: top;
      border-radius: 0;

      &:first-child {
        @include roundedLeft;
      }

      &:last-child {
        @include roundedRight;
      }

      &.active {
        background-color: $color-link-hover;
        color: white;
      }
    }

    // Color
    &.bg {
      &:not(.default) {
        background-color: var(--bgColorVariant);
        color: var(--textColorVariant);
      }

      &.default {
        background-color: $color-headings;
        color: $dark-color-body;
        border-color: transparent;

        @include darkmode {
          background-color: $dark-color-headings;
          color: $color-body;
        }

        @include focusMouse {
          background-color: $color-link-hover;
          color: white;
          border-color: darken($color-link-hover, 20%);
        }
      }
    }

    &.border {
      &:not(.default) {
        background-color: transparent;
        color: var(--textColorVariant);
        border-color: var(--textColorVariant);

        @include focusMouse {
          color: var(--textColorVariant);
          background-color: var(--bgColorVariant);
          border-color: var(--textColorVariant);
        }
      }

      &.default {
        background-color: transparent;
        color: $color-body;
        border-color: $color-body;

        @include darkmode {
          background-color: transparent;
          color: $dark-color-body;
          border-color: $dark-color-body;
        }

        @include focusMouse {
          color: $color-link-hover;
          border-color: $color-link-hover;
        }
      }
    }

    &.link {
      background-color: transparent;
      color: var(--textColorVariant);
      border-color: transparent;
      box-shadow: none !important;

      @include focusMouse {
        background-color: $color-muted-bg;
        color: var(--textColorVariant);
        border-color: transparent;

        @include darkmode {
          background-color: $dark-color-muted-bg;
        }
      }
    }
  }
</style>
