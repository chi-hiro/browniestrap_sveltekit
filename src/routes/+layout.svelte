<script>
  import "$styles/app.scss";
  import Header from "./Header.svelte";
  import Footer from "$components/web/Footer.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
