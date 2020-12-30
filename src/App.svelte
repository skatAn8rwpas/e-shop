<script>
  import { onMount } from "svelte";
  import {cart} from "./cart/CartStore.js"

  import IconButton from "./components/IconButton.svelte";
  import Hero from "./components/Hero.svelte";
  import Card from "./components/Card.svelte";
  
  import CartDrawer from "./cart/CartDrawer.svelte";
  
  let date;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;

    // cart.add({ id: 1, name: "coffe beans", price: 15 })
  });

  function openCartDrawer() {
    document.body.setAttribute('cart-is-open', '');
  }
  
  function closeCartDrawer() {
    document.body.removeAttribute('cart-is-open');
  }
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
      <IconButton on:click={openCartDrawer} icon="shopping_cart" />
    </div>
  </div>

</header>

<CartDrawer on:close="{closeCartDrawer}"/>

<main class="content" on:click="{closeCartDrawer}">
  <Hero />

  <section class="products">
    <h1>Products</h1>
    <Card />
  </section>
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
    background-color: var(--header-bg-color);
    top: 0;
    height: 64px;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px -1px 0 0 rgb(0 0 0 / 20%);
    backdrop-filter: saturate(180%) blur(5px);
  }

  header .raw {
    position: absolute;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    /* max-width: 1024px; */
    margin: auto;
  }
  header .raw .col:nth-child(2) { color: rgba(0,0,0, 0.4); }
  header .raw .col span:hover { color: rgba(0,0,0, 0.8); }

</style>