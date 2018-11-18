<template>
<div>
    <div class="cont">
        <div class="sidebar">
            <div class="profile">
              <b-img rounded="circle" blank width="75" height="75" blank-color="#777" alt="img" class="s-3" />
              <span>
                <p>Sefiraa</p>
                <p>Ortu Raisa</p>
                </span>
            </div>
            <div class="items">
            <div class="item active">
              <img src="../assets/house_a.png" alt="">
                <p>Halaman Utama</p>
            </div>
            <router-link to="/agenda">
            <div class="item">
              <img src="../assets/calendar.png" alt="">
              <p>
                Agenda Harian Siswa
              </p>
            </div>
            </router-link>
            <router-link to="calendar">
            <div class="item">
              <img src="../assets/absen.png" alt="">
              <p>Absensi Siswa</p>
            </div>
            </router-link>
            <router-link to="nilai">
            <div class="item">
              <img src="../assets/nilai.png" alt="">
              <p>Nilai Siswa</p>
            </div>
            </router-link>
            <div class="item">
              <img src="../assets/pelanggaran.png" alt="">
              <p>Pelanggaran Siswa</p>
            </div>
            <div class="item">
              <img src="../assets/bayar.png" alt="">
              <p>Informasi Spp</p>
            </div>
            </div>
        </div>
        <div class="content">
          <router-view></router-view>
          <div class="head">
              <img src="../assets/telkom.png" alt="">
              <div class="namasekolah">
                  <h1>SMK TELKOM SANDY PUTRA PUWOKERTO</h1>
              </div>
          </div>
          <div class="body">
              <div class="judul">
                  <p>Prestasi Sekolah</p>
                  <p>Oktober 2018</p>
              </div>
              <hr>
              <div class="berita">
                  <p>Juara 1 dan 2 INVOVEST Bidang Lomba "Web Design Competition" tahun 2018</p>
                  <img src="../assets/gambarBerita.png" alt="">
                  <p>Dua dari lima tim yang dikirimkan SMK Telkom Purwokerto memperoleh gelar 
juara di penyelenggaraan INVOFEST 2018. Kedua tim berhasil meraih titel juara 
pertama dan kedua. </p>
              </div>
          </div>
          <div class="list">
              <h1>Daftar Guru Mapel</h1>
              <hr>
              <table class="tabel">
                  <tr v-for="guru in gurus" v-bind:key="guru.id">
                      <td>{{guru.nama}}</td>
                      <td>{{guru.mapel}}</td>
                  </tr>
              </table>
          </div>
          <div class="link">
              <p>Perkembangan Siswa</p>
              <b-btn variant="primary md" class="btnn">></b-btn>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'haha',
    data(){
        return{
            gurus: [
              {
                  id: 1,
                  nama: 'Mr.Amir',
                  mapel: 'KK-1'
              },
              {
                  id: 2,
                  nama: 'Mrs.Yuni',
                  mapel: 'KK-2'
              },
              {
                  id: 3,
                  nama: 'Mrs.Lulu',
                  mapel: 'KK-3'
              },
              {
                  id: 4,
                  nama: 'Mr.Aic',
                  mapel: 'KK-4'
              },
              {
                  id: 5,
                  nama: 'Mrs.Iis',
                  mapel: 'KK-5A'
              },
              {
                  id: 6,
                  nama: 'Mr.Dar',
                  mapel: 'KK-5B'
              },
              {
                  id: 7,
                  nama: 'Mrs.Yulita',
                  mapel: 'B.Indonesia',
              },
              {
                  id: 8,
                  nama: 'Mr.Taufik',
                  mapel: 'B.Inggris'
              },
              {
                  id: 9,
                  nama: 'Mr.Andhang',
                  mapel: 'B.jawa'
              },
              {
                  id: 10,
                  nama: 'Mr.Jemy',
                  mapel: 'PPKN'
              },
              {
                  id: 11,
                  nama: 'Mr.Bas',
                  mapel: 'Matematika'
              }
          ]
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Nunito:600');
  *{
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;

  }
  .cont{
    display: grid;
    width: 100%;
    grid-template-columns: 19% 81%;
    min-height: 100vh;
  }
  .sidebar{
    display: flex;
    grid-column: 1/2;
    flex-direction: column;
    position: absolute;
    min-height: 100vh;
    padding: 45px 100px 0 0;
  }
  .sidebar > .profile{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 50px;
  }
  .sidebar > .profile > span{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: center;
  }
  .sidebar > .profile > span > p:nth-child(1){
    font-size: 26px;
  }
  .sidebar > .profile > span > p:nth-child(2){
    font-size: 19px;
  }
  .sidebar > .items{
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    position: absolute;
    width: 100%;
    margin-top: 100px;
  }
  .item{
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 50px;
  
  }
  .item p{
    font-size: 19px;
    font-weight: 600;
    color:#7e7c7c;
    
  }
  .items img{
    width: 30px;
    height: 30px;
    margin-right: 40px;
  }
  .item:hover{
    cursor: pointer;
    background-color: #f8fcff;
    border-left: 3px solid #508EEC;
    color: #508EEC;

  }
  .active{
    background-color: #f8fcff;
    border-left: 3px solid #508EEC;
    color: #508EEC;
  }
  .content{
    background-color: #f7fafc;
    min-height: 100vh;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 60% 30%;
    grid-template-rows: 20% 55% 15%;
    grid-gap: 50px; 
    width: 100%;
    padding: 40px;
    position: relative;
  }
  .content > div{
      background: white;
  }
  .head{
      grid-column: 1/2;
      grid-row: 1/2;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 60px;
  }
  .head img{
      width: 85px;
      height: 85px;
  }
  .namasekolah{
      padding-left: 30px;
      width: 65%;
      color: #5E5E5E;
  }
  .body{
      grid-column: 1/2;
      grid-row: 2/4;

  }
  .body .judul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      padding: 40px 60px;
    
  }
  .body .judul p:nth-child(1){
      font-weight: 600;
      font-size: 26px
  }
  .body .judul p:nth-child(2){
      font-size: 19px;
  }
  .body .berita{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      color: #5E5E5E;
  }
  .body .berita p{
      float: left;
      padding: 30px 0;
      width: 85%;
      font-size: 19px;
  }
  .body .berita img{
      width: 85%;
      height: 350px;
  }
  hr{
      width: 85%;
      margin: auto auto;
      border: 1px solid rgba(145, 165, 206, 0.5);
  }
  .list{
      grid-column: 2/3;
      grid-row: 1/3;
      background: red;
      min-height: 100px;
  }
  .link{
      grid-column: 2/3;
      grid-row: 3/4;
      background: green;
  }
  .list h1 {
      padding: 50px;
  }
  .tabel{
      height: 80%;
      width: 85%;
      margin:10px 35px;
  }
  .tabel tr td:nth-child(2){
      float: right;
  }
  .tabel tr td:nth-child(1){
      float: left;
  }
  .link{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
  }
  .link p{
      font-size: 26px;
      font-weight: 600;
      color: #5e5e5e;
  }
  .link .btnn{
      padding: 1px 33px;
      background-color: #508EEC;
      color: #fff;
      border-radius: 21px;
      font-size: 26px;
  }
</style>
