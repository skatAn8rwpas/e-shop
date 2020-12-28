<script>
  import { onMount } from "svelte";
  let date;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<div class="banner">
  <span>banner content</span>
</div>

<header>

  <div class="raw">
    <div class="col">
      <span>e-shop</span>
    </div>
    <div class="col">
      <span>link_1</span>
      <span>link_2</span>
      <span>link_3</span>
    </div>
    <div class="col">
      <button>cart</button>
    </div>
  </div>

</header>

<asside class="cart drawer">

  <button>x</button>

  <span>Cart is empty</span>

</asside>

<main>
  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <br />
  <h2>The date according to Node.js is:</h2>
  <p>{date ? date : 'Loading date...'}</p>

  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <br />
  <h2>The date according to Node.js is:</h2>
  <p>{date ? date : 'Loading date...'}</p>
</main>

<style>
  .banner {
    display: flex;
    align-items: center;
    background-color: #0f0f0f;
    color: white;
    height: 24px;
  }
  header {
    --header-bg-color: rgba(254, 254, 254, .8);
    --header-border: 1px solid rgba(000, 000, 000, .4);
    
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    background-color: var(--header-bg-color);
    height: 64px;
    border-bottom: var(--header-border);
    backdrop-filter: saturate(180%) blur(5px);
  }

  header .raw {
    display: flex;
    flex: 1;
    justify-content: space-between;
    max-width: 1024px;
    margin: auto;
  }
  header .raw .col:nth-child(2) { color: rgba(0,0,0, 0.4); }
  header .raw .col span:hover { color: rgba(0,0,0, 0.8); }


  .drawer {
    width: 360px;
    background: #0f0f0f;
  }
</style>