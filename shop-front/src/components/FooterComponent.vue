<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="info">
          <a href="">mail@mail.ru</a>
        </div>
        <div class="social">
          <a href="" class="social__icon telegram">
            <svg class="footer__svg" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"/>
            </svg>
          </a>
          <a class="social__icon vk">
            <svg class="footer__svg" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z"/></svg>
          </a>
          <a href="" class="social__icon instagram">
            <svg class="footer__svg" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="Instagram">
                <g>
                  <path d="M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"/>
                  <path d="M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z"/>
                  <circle cx="17.2" cy="6.83" r="1.075"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.footer{
  background-color: rgb(16,16,16);
}
.footer p, .footer a{
  color: #fff;
}
.footer__row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
}
.info{
  display: flex;
  flex-direction: column;
}
.info a{
  margin-right: 10px;
  font-size: 22px;
  transition: all ease .5s;
}
.info a:hover{
  color: white;
}
.footer svg{
  fill: white;
  transition: all ease .5s;
}
.info a:hover .footer svg{
  fill: #fff;
}
.social{
  display: flex;
}
.social__icon{
  background: none;
  border-radius: 10px;
  border: 2px solid rgb(30,30,30);
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease .5s;
  padding: 8px;
  position: relative;
  overflow: hidden;
}
.telegram:hover{
  background-color: #28a4e4;
}
.vk:hover{
  background-color: #0a7cff;
}
.instagram:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  opacity: 0;
  transition: opacity 0.5s;
}
.instagram > svg{
  position: relative;
  z-index: 1;
}
.instagram:hover:after {
  opacity: 1;
}
.social__icon:hover .footer svg{
  border: none;
}
.info a:hover{
  background-color: rgb(16,16,16);
}

</style>