<script>
  export let icon = "face"
</script>

<button on:click>
  <span class="material-icons">{icon}</span>
</button>

<style>
  button {
    display: inline-flex;
    background-color: transparent;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    outline: none;
  }

  button:focus {
    border: 2px solid black;
  }


</style>