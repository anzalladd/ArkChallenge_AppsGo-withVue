<template>

  <div class="cont">
    <div class="head">
      <h1>Selamat Datang</h1>
      <div class="ket">
      <p>"Pentingnya Menjaga hubungan</p>
      <p>antara orang tua dan guru"</p>
      </div>
    </div>
    <div class="button">
     <router-link to="/buat">
     <b-button   varsiant="primary lg" class="btn">Buat Akun</b-button>
     </router-link>
     <router-link to="/login">
        <b-button  variant="primary lg" class="btn_masuk">Masuk</b-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  .cont{
    background: url('../assets/bg_landing.png');
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: color-burn;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
  }
  .head{
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    -webkit-transform:scale(1.1,1); /* Safari and Chrome */
    -moz-transform:scale(1.1,1); /* Firefox */
    -ms-transform:scale(1.1,1); /* IE 9 */
    -o-transform:scale(1.1,1); /* Opera */
    transform:scale(1,1); 
  }
  .head h1{
    font-size: 80px;

  }
  .ket{
    margin-top: 21px;
  }
  .ket p{
  color: white;
  text-align: center;
  font-size: 40px;
  }
  .button{
    margin-top: 100px;
  
  }
  .btn{
    padding: 22px 73px 22px 73px;
    font-size: 26.5px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 3px;
  }
  .btn_masuk{
    padding: 22px 96px 22px 96px;
    font-size: 26.5px;
    margin-right: 35px;
    background-color:#508EEC;
    color: white;
    margin-left: 35px;
  }

  
</style>
