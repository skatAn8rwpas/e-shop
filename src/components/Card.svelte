<div class="card">
  <header></header>

  <main>
    <img src="/images/buddha-beans-coffee-co-cbd-coffee-2-768x768.jpg" alt="Buddha beans coffee">
  </main>

  <footer class="actions">
    <button>Add to cart</button>
  </footer>
</div>

<style>

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 350px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .actions {
    height: 64px;
  }

  .actions button {
    background: black;
    color: white;
    padding: 8px 16px;
    font-size: 1.2em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .actions button:hover,
  .actions button:focus,
  .actions button:focus-within {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
  .actions button:active {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  }
</style>