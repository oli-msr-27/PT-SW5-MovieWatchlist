<script>
  let { data } = $props();
</script>

<div class="container">
  <br>
    <a href="/movies">Back</a>
  <h2>{data.movie.Title}</h2>
  <div class="row align-items-start">
    <div class="col-3">
      <img src={data.movie.Poster} alt="" class="img-fluid" />
    </div>
    <div class="col-3">
      <p>Jahr: {data.movie.Year}</p>
      <p>Dauer: {data.movie.Duration} Minuten</p>
      <p>Cast:</p>
      <ul>
        {#each data.movie.Actors as actor}
          <li>{actor}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
