<template>
  <section class="register">
    <form class="form-register">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .form-register {
    box-shadow: 0 0 20px 0 #ccc;
    padding: 60px 20px;
    max-width: 500px;
    width: 100%;
    border-radius: 10px;
  }
</style>