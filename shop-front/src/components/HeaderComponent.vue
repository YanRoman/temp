<template>
  <header>
    <div class="container">
      <div class="header__row">
        <div class="nav-mobile">
          <button :class="{active : isActive}" @click="isActive = !isActive" class="burger">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div class="nav">
          <ul>
            <li><a href="#/">yanare</a></li>
            <li><a href="#/about">О нас</a></li>
            <li><a href="#">контакты</a></li>
          </ul>
        </div>
        <div class="header__actions"><a href="">HEART</a></div>
      </div>
    </div>
    <ul class="mobile-ul" :class="{ noActiveMenu : !isActive}">
      <li><a href="#/">yanare</a></li>
      <li><a href="#/about">О нас</a></li>
      <li><a href="#">контакты</a></li>
    </ul>
  </header>
</template>
<script>
  export default {
    name: "HeaderComponent",
    data() {
      return{
        isActive: false
      };
    }
  }
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
a{
  display: block;
  text-transform: uppercase;
  padding: 22px 10px;
  transition: all ease 1s;
  &:hover{
    background-color: rgba(199, 196, 196, 0.7);
  }
}
header{
  position: fixed;
  z-index: 4;
  background-color: rgba(255,255,255,0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  width: 100%;
  .header__row{
    display: flex;
    justify-content: space-between;
  }
}
.nav-mobile{
  display: none;
}
.nav{
  ul{
    display: flex;
  }
}
.burger{
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  padding: 32px 16px;
  background-color: rgba(255,255,255,0.2);
  span{
    margin: 0;
    padding: 0;
    left: 0;
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    display: block;
    transition: all ease .8s;
    &:nth-child(1){
      transform: translateY(-10px);
    }
    &:nth-child(2){
      opacity: 1;
    }
    &:nth-child(3){
      transform: translateY(10px);
    }
  }
}
.active span:nth-child(1){
  transform: translateY(0) rotate(45deg);
}
.active span:nth-child(2){
  opacity: 0;
}
.active span:nth-child(3){
  transform: translateY(0) rotate(-45deg);
}
.mobile-ul{
  position: absolute;
  z-index: 2;
  background-color: rgba(255,255,255,0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  width: 50%;
  transition: all ease 1s;
}
.noActiveMenu{
  transform: translateX(-150%);
}
@media screen and (max-width: 576px) {
  .nav-mobile{
    display: block;
  }
  .nav{
    display: none;
  }
}
</style>