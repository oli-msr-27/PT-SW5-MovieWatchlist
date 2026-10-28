<script>
  let { movie } = $props();
</script>

<div>
  <img src={movie.Poster} alt="" class="img-fluid" />
  <div class="MovieCardInfo">
    <a class="fw-bold" href={"/movies/" + movie._id}>
            {movie.Title}
          </a>
    <div>Jahr: {movie.Year}</div>
    <div>Dauer: {movie.Duration} Minuten</div>
  </div>
</div>

<style>
  div {
    background-color: rgb(93, 93, 93);
  }

  .MovieCardInfo {
    padding: 10px;
    color: white;
  }

  .MovieCardInfo a {
    color: white;
  }
</style>
