<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import {cart, itemsCount} from "./CartStore.js"
  import IconButtom from "../components/IconButton.svelte"

  const dispatch = createEventDispatcher();
  
  onMount(async () => {
    
  });
  
</script>

<asside class="cart drawer">

  <IconButtom class="close-btn" on:click={() => dispatch('close')} icon="close" />

  {#if !$itemsCount}
    <div class="empty-cart">
      <i class="material-icons" style="font-size: 5rem">shopping_cart</i>
      <span>Your Cart is empty</span>
    </div>
  {:else}
      <span>There is {$itemsCount} item in your Cart</span>
  {/if}

</asside>

<style>
  .empty-cart {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
  }
</style>