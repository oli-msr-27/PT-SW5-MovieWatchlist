<script>
  import ComponentMoviePoster from "#lib/components/ComponentMoviePoster.svelte";
  
  let {data} = $props();

</script>
<div class="container text-left">
  <div class="row align-items-start">
  <div class="col-12">
    <br>
    <p>Daten und Bilder generiert mit Gemini</p>
    <a class="btn btn-primary" href="/movies/create">Add a Movie</a>
    <br><br>
  </div>
  </div>
</div>

<div class="container text-left">
  <div class="row align-items-start">
    {#each data.movies as movie}
      <div class="col-3">
        <ComponentMoviePoster {movie}></ComponentMoviePoster>
      </div>
    {/each}
  </div>
</div>

<style>
    p {
        font-style: italic;
    }
</style>
