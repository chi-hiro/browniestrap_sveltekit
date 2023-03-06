<script>
  import Button from "$components/ui/Button.svelte";
  import Icon from "$components/ui/Icon.svelte";
  import Loader from "$components/ui/Loader.svelte";
  import { pagetop, pageback } from "$lib/mixins";
</script>

<svelte:head>
  <title>Demo</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="section_button" class="section border-t">
  <div class="container">
    <h2 class="section-heading">Button</h2>

    <h3 class="section-heading-sm">Bg</h3>
    <div class="flex flex-wrap gap-0.5">
      <Button model="bg md blockDown rounded" color="primary">Primary</Button>
      <Button model="bg md blockDown rounded" color="secondary"
        >Secondary</Button
      >
      <Button model="bg md blockDown rounded" color="success">Success</Button>
      <Button model="bg md blockDown rounded" color="info">Info</Button>
      <Button model="bg md blockDown rounded" color="warning">Warning</Button>
      <Button model="bg md blockDown rounded" color="danger">Danger</Button>
      <Button model="bg md blockDown rounded" color="white">White</Button>
      <Button model="bg md blockDown rounded" color="default">Default</Button>
    </div>

    <h3 class="section-heading-sm">Border</h3>
    <div class="flex flex-wrap gap-0.5">
      <Button model="border md blockDown rounded" color="primary"
        >Primary</Button
      >
      <Button model="border md blockDown rounded" color="secondary"
        >Secondary</Button
      >
      <Button model="border md blockDown rounded" color="success"
        >Success</Button
      >
      <Button model="border md blockDown rounded" color="info">Info</Button>
      <Button model="border md blockDown rounded" color="warning"
        >Warning</Button
      >
      <Button model="border md blockDown rounded" color="danger">Danger</Button>
      <Button model="border md blockDown rounded" color="white">White</Button>
      <Button model="border md blockDown rounded" color="default"
        >Default</Button
      >
    </div>

    <h3 class="section-heading-sm">Other</h3>
    <div class="flex flex-wrap gap-0.5">
      <Button model="link md blockDown" color="primary">link primary</Button>
      <Button model="bg md blockDown" color="primary" disabled={true}
        >disabled</Button
      >
      <Button model="bg md long" color="primary" loading={true}
        >bg loading</Button
      >
      <Button model="border md long" color="primary" loading={true}
        >border loading</Button
      >
    </div>

    <h3 class="section-heading-sm">Icon</h3>
    <div class="flex flex-wrap gap-0.5 items-center">
      <Button model="sm bg blockDown" color="primary" starticon="shopping_cart">
        starticon
      </Button>

      <Button
        model="sm border blockDown"
        color="primary"
        endicon="shopping_cart"
      >
        endicon
      </Button>

      <Button model="md bg blockDown" color="info" starticon="shopping_cart">
        starticon
      </Button>

      <Button model="md border blockDown" color="info" endicon="shopping_cart">
        endicon
      </Button>

      <Button model="lg bg blockDown" color="warning" starticon="shopping_cart">
        starticon
      </Button>

      <Button
        model="lg border blockDown"
        color="warning"
        endicon="shopping_cart"
      >
        endicon
      </Button>
    </div>

    <div class="flex flex-wrap gap-0.5 items-center mt-1">
      <Button model="md long bg" color="primary" starticon="chevron_left">
        long starticon
      </Button>

      <Button model="md long bg" color="primary" endicon="chevron_right">
        long endicon
      </Button>

      <Button model="sm icon bg rounded" color="danger">
        <Icon>close</Icon>
      </Button>

      <Button model="md icon border rounded" color="success">
        <Icon>arrow_forward</Icon>
      </Button>
    </div>

    <h3 class="section-heading-sm">Handling test</h3>
    <div class="flex flex-wrap gap-0.5 items-center">
      <Button model="sm bg blockDown" color="info" on:click={pageback}>
        History Back
      </Button>

      <Button model="sm bg blockDown" color="info" on:click={pagetop}>
        Page Top
      </Button>
    </div>
  </div>
</section>

<section id="section_loader" class="section border-t">
  <div class="container">
    <h2 class="section-heading">Loader</h2>

    <div class="grid grid-cols-3 gap-1">
      <div class="p-20px bg-muted">
        <h3 class="section-heading-sm text-center">dot</h3>
        <Loader model="dot" rounded={true} />
      </div>

      <div class="p-20px bg-dark">
        <h3 class="section-heading-sm text-center text-white">spin</h3>
        <Loader model="spin" color="white" />
      </div>

      <div class="p-20px bg-muted">
        <h3 class="section-heading-sm text-center">circle</h3>
        <Loader model="circle" progress={26} />
      </div>

      <div class="p-20px bg-muted col-span-3">
        <h3 class="section-heading-sm text-center">line</h3>
        <Loader model="line" color="warning" />
      </div>

      <div class="p-20px bg-muted col-span-3">
        <h3 class="section-heading-sm text-center">bar</h3>
        <Loader model="bar" progress={50} color="success" rounded={true} />
      </div>
    </div>
  </div>
</section>
