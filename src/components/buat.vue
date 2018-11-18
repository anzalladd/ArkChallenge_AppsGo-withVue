<template>
    <div class="cont">
      <div class="card">
        <div class="head">
          <p>Buat Akun Baru Anda</p>
        </div>
        <form method="post">
        <div class="input">
          <label>Email</label>
          <b-form-input type="email" class="inpt"
          v-model="email"
          ></b-form-input>
          <label>Password</label>
          <b-form-input type="password" class="inpt"
          v-model="password"
          ></b-form-input>
          <label>Token</label>
           <b-form-input type="text" class="inpt" v-model="token"></b-form-input>
        </div>
        <div class="forget">
          <p>Sudah punya akun ?
              <router-link to="./login">
               <span id="blue">Masuk</span>
              </router-link>
               </p>
        </div>
        <div class="sub">
          <b-button variant="primary lg" class="btn"
          @click="register"
          >Daftar</b-button>
        </div>
        </form>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data  () {
    return {
      email: '',
      password: '',
      token: ''
    }
  },
  methods: {
    register: function () {
      if (this.token === 'GGWP0704') {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert('Akun anda sudah terbuat')
          this.$router.replace('login')
        },
        function (err) {
          alert('Opps' + err.message)
        }
      )
      } else {
        alert('token salah')
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}
.cont{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../assets/bg_landing.png');
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: color-burn;
  background-size: cover;
  background-repeat: no-repeat;
}
.card{
  padding: 50px 101px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}
.card > .head p{
 font-size: 50px;
 padding-bottom: 90px;
}
.inpt{
  border-right: none;
  border-top: none;
  border-left: none;
  border-radius: 0;
  outline: none;
  width: 720px;
  padding: 30px;
}
.input label{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  margin-top: 15px;
}
.forget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 720px;
  margin-top: 5px;
}
.forget p{
  font-size: 20px;
}
#blue{
  color: #669cee;
}
.sub .btn{
  padding: 16px 0;
  width: 720px;
  margin-top: 100px;
  font-size: 37px;
  font-weight: bold;
  background-color: #508EEC;
}
</style>
