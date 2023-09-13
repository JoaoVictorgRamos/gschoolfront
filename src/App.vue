<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: Montserrat;
}
input,
textarea {
  border-radius: 4px;
  border: 1px solid rgba(229, 229, 229, 0.93);
  padding: 15px;
  transition: all 0.3s;
  font-size: 1rem;
  &:focus,
  &:hover {
    outline: none;
  }
}
button {
  display: block;
  padding: 15px 30px;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}
[data-anima="top"] {
  animation: showTop 0.5s forwards;
}
@keyframes showTop {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
