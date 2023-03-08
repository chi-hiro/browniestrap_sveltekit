<script>
  import { onMount } from "svelte";
  import Skelton from "$components/ui/Skelton.svelte";
  import Button from "$components/ui/Button.svelte";
  import Icon from "$components/ui/Icon.svelte";
  import Loader from "$components/ui/Loader.svelte";
  import { pagetop, pageback } from "$lib/mixins";
  import { reveal } from "$lib/reveal";

  //*******************************************************************************
  // Hooks
  //*******************************************************************************
  onMount(async () => {
    reveal();
  });
</script>

<svelte:head>
  <title>Demo</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="section_type" class="section border-t reveal">
  <div class="container">
    <h2 class="section-heading">TYPO</h2>

    <h1>h1. 見出し</h1>
    <h2>h2. 見出し</h2>
    <h3>h3. 見出し</h3>
    <h4>h4. 見出し</h4>
    <h5>h5. 見出し</h5>
    <h6>h6. 見出し</h6>

    <hr />

    <h3 class="section-heading-sm">
      <span class="reveal reveal-cover">早い話、速いです。</span>
    </h3>
    <p class="lead">iPhoneなら5Gを<br />最大限に使えます</p>
    <p>
      iPhoneの5Gは超高速です。映画のダウンロードは一瞬。ビデオのストリーミングは一段と高画質。HDのFaceTime通話は携帯電話ネットワークで楽しめます。データの遅延も大幅に少なくなるでしょう。しかもiPhone
      12は、より幅広いサービスエリアを世界中でカバーするので、より多くの場所で5Gが使えます。
    </p>
    <p>
      広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。
    </p>

    <p class="text-lg">
      広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。
    </p>
    <p class="text-sm">
      広角カメラと超広角カメラの両方で、ナイトモードが使えるようになりました。暗い場所でも見たことがないほど美しい写真を撮れます。新しい広角カメラは光を27パーセントも多く取り込むので、太陽の下でも月明かりの下でも、一段と精細であざやかな一枚を撮影できます。
    </p>

    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li><a href="#top">Integer molestie lorem at massa</a></li>
    </ul>

    <ol class="list-chart">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
    </ol>

    <p>
      You can use the mark tag to <mark>highlight</mark> text. <code>code</code>
    </p>

    <blockquote class="blockquote">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <small
        >Someone famous in <cite title="Source Title">Source Title</cite></small
      >
    </blockquote>
  </div>
</section>

<section class="section-cover text-center reveal-group snap-start">
  <div class="container text-white reveal reveal-fade-up">
    <h2 class="section-heading">COVER SECTION</h2>
    <p>背景に画像を入れた段落</p>
    <p><Button model="border md" color="white" title="ボタン" /></p>
  </div>

  <span
    class="embed embed-1by1 lg:embed-21by9 section-cover-bg overlay reveal reveal-fade-back"
    style="background-image:url(/dummy/dummy2.webp)"
  />
</section>

<section class="section-grid border-t reveal">
  <div class="grid lg:grid-cols-2 reveal-group">
    <div class="lg:grid-span-1 section-grid-body reveal reveal-fade-up">
      <div class="container">
        <h2 class="section-heading text-left">GRID SECTION</h2>
        <p>
          「ストーリー」モードでは、元の世界に戻るために、仲間を増やしながら、各ステージのプチゲームやボスに挑戦します。各ステージでは、仲間の中からゲームに参加するキャラクターたちを選びます。
        </p>
        <p>
          キャラクターごとにアクションが異なるので、ステージの特徴やチームのバランスを考えたキャラクター選択が重要になります。
        </p>
        <p>
          Joy-Conをおすそわけすれば、全てのステージで2人同時プレイも可能です。ストーリーを進めていくことで、他のモードも遊べるようになりますよ。
        </p>
      </div>
    </div>

    <div class="lg:grid-span-1 section-grid-img reveal reveal-mask-left">
      <figure class="embed embed-4by3">
        <img src="/dummy/dummy5.webp" alt="" loading="lazy" />
      </figure>
    </div>
  </div>
</section>

<section id="section_skelton" class="section border-t">
  <div class="container">
    <h2 class="section-heading">SKELTON</h2>

    <div class="grid grid-cols-2 gap-40px">
      <div>
        <Skelton ratio={[16, 9]} animate={true} addClass="mb-1" />
        <Skelton model="text" line={3} animate={true} />
      </div>

      <div>
        <div class="flex items-center gap-0.5 mb-1">
          <Skelton model="rounded" width="48px" height="48px" animate={true} />
          <Skelton model="text" line={1} width="80px" animate={true} />
        </div>
        <Skelton model="h1" width="60%" animate={true} addClass="mb-1" />
        <Skelton model="text" line={7} animate={true} />
      </div>
    </div>
  </div>
</section>

<section id="section_button" class="section border-t">
  <div class="container">
    <h2 class="section-heading">BUTTON</h2>

    <h3 class="section-heading-sm">Bg</h3>
    <div class="flex flex-wrap gap-0.5 bg-muted p-1">
      <Button model="bg md blockDown rounded" color="primary" title="Primary" />
      <Button
        model="bg md blockDown rounded"
        color="secondary"
        title="Secondary"
      />
      <Button model="bg md blockDown rounded" color="success" title="Success" />
      <Button model="bg md blockDown rounded" color="info" title="Info" />
      <Button model="bg md blockDown rounded" color="warning" title="Warning" />
      <Button model="bg md blockDown rounded" color="danger" title="Danger" />
      <Button model="bg md blockDown rounded" color="white" title="White" />
      <Button model="bg md blockDown rounded" color="default" title="Default" />
    </div>

    <h3 class="section-heading-sm">Border</h3>
    <div class="flex flex-wrap gap-0.5 bg-muted p-1">
      <Button
        model="border md blockDown rounded"
        color="primary"
        title="Primary"
      />
      <Button
        model="border md blockDown rounded"
        color="secondary"
        title="Success"
      />
      <Button
        model="border md blockDown rounded"
        color="success"
        title="Success"
      />
      <Button model="border md blockDown rounded" color="info" title="Info" />
      <Button
        model="border md blockDown rounded"
        color="warning"
        title="Warning"
      />
      <Button
        model="border md blockDown rounded"
        color="danger"
        title="Danger"
      />
      <Button model="border md blockDown rounded" color="white" title="White" />
      <Button
        model="border md blockDown rounded"
        color="default"
        title="Default"
      />
    </div>

    <h3 class="section-heading-sm">Other</h3>
    <div class="flex flex-wrap gap-0.5 bg-muted p-1">
      <Button model="link md blockDown" color="primary" title="Link" />

      <Button
        model="bg md blockDown"
        color="primary"
        title="Disabled"
        disabled={true}
      />

      <Button
        model="bg md long"
        color="primary"
        title="Bg Loading"
        loading={true}
      />

      <Button
        model="border md long"
        color="primary"
        title="Border Loading"
        loading={true}
      />
    </div>

    <h3 class="section-heading-sm">Icon</h3>
    <div class="flex flex-wrap gap-0.5 items-center bg-muted p-1">
      <Button
        model="sm bg blockDown"
        color="primary"
        title="StartIcon"
        starticon="shopping_cart"
      />

      <Button
        model="sm border blockDown"
        color="primary"
        title="EndIcon"
        endicon="shopping_cart"
      />

      <Button
        model="md bg blockDown"
        color="info"
        title="StartIcon"
        starticon="shopping_cart"
      />

      <Button
        model="md border blockDown"
        color="info"
        title="EndIcon"
        endicon="shopping_cart"
      />

      <Button
        model="lg bg blockDown"
        color="warning"
        title="StartIcon"
        starticon="shopping_cart"
      />

      <Button
        model="lg border blockDown"
        color="warning"
        title="EndIcon"
        endicon="shopping_cart"
      />
    </div>

    <div class="flex flex-wrap gap-0.5 items-center mt-1 bg-muted p-1">
      <Button
        model="md long bg"
        color="primary"
        title="long"
        starticon="chevron_left"
      />

      <Button
        model="md long bg"
        color="primary"
        title="long"
        endicon="chevron_right"
      />

      <Button model="sm icon bg rounded" title="Close" color="danger">
        <Icon>close</Icon>
      </Button>

      <Button model="md icon border rounded" title="Next" color="success">
        <Icon>arrow_forward</Icon>
      </Button>
    </div>

    <h3 class="section-heading-sm">Handling test</h3>
    <div class="flex flex-wrap gap-0.5 items-center">
      <Button
        model="sm bg blockDown"
        color="info"
        title="History Back"
        on:click={pageback}
      />

      <Button
        model="sm bg blockDown"
        color="info"
        title="Page Top"
        on:click={pagetop}
      />
    </div>
  </div>
</section>

<section id="section_loader" class="section border-t">
  <div class="container">
    <h2 class="section-heading">LOADER</h2>

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
