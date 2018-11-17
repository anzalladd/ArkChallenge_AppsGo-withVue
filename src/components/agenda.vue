<template>
    <div class="cont">
        <div class="sidebar">
            <div class="profile">
              <b-img rounded="circle" blank width="75" height="75" blank-color="#777" alt="img" class="s-3" />
              <span>
                <p>Bernadaely</p>
                <p>Ortu Andika</p>
                </span>
            </div>
            <div class="items">
              <router-link to="utama">
            <div class="item">
              <img src="../assets/house.png" alt="">
                <p>Halaman Utama</p>
            </div>
              </router-link>
            <router-link to="/agenda">
            <div class="item active">
              <img src="../assets/calendar_a.png" alt="">
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
            <div class="item">
              <img src="../assets/nilai.png" alt="">
              <p>Nilai Siswa</p>
            </div>
            <div class="item">
              <img src="../assets/pelanggaran.png" alt="">
              <p>Pelanggaran Siswa</p>
            </div>
            <div class="item">
              <img src="../assets/bayar.png" alt="">
              <p>Informasi Spp</p>
            </div>
          <b-btn variant="primary lg" @click="logout">Log Out</b-btn>
          </div>
        </div>
        <div class="content">
          <router-view></router-view>
          <h3 style="text-align: center;padding:90px">Senin,12 November 2017</h3>
          <table class="table">
            <tr>
            <th>Jam ke</th>
            <th>Waktu Kbm</th>
            <th>Mata Pelajaran</th>
            <th>Materi Pelajaran</th>
            </tr>
            <tr v-for="table in tables" v-bind:key="table.id">
              <td>{{table.id}}</td>
              <td>{{table.waktu}}</td>
              <td>{{table.mapel}}</td>
              <td>{{table.materi}}</td>
            </tr>
            <tr>
              <th>Extrakurikuler</th>
              <th colspan="3">Waktu</th>
            </tr>
            <tr v-for="extra in extras" v-bind:key="extra.id">
              <td>{{extra.extrakulikuler}}</td>
              <td colspan="3">{{extra.waktu}}</td>
            </tr>
          </table>
        </div>
    </div>
   
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'agenda',
  data () {
    return {
      tables: [
        {
          id: 1,
          waktu: '07.00 - 08.30',
          mapel: 'KK2(Database)',
          materi: 'Instalasi Postgre'
        },
        {
          id: 2,
          waktu: '08.30 - 09.00',
          mapel: 'Istirahat',
          materi: '---'
        },
        {
          id: 3,
          waktu: '09.00 - 12.00',
          mapel: 'KK3(OOP)',
          materi: 'Constructor'
        },
        {
          id: 4,
          waktu: '12.00 - 13.00',
          mapel: 'Istirahat',
          materi: '---'
        },
        {
          id: 5,
          waktu: '13.00 - 14.30',
          mapel: 'B. Jawa',
          materi: 'Aksara Jawa'
        },
        {
          id: 6,
          waktu: '14.30 - 16.00',
          mapel: 'PJOK',
          materi: 'Penilaian Baseball'
        },
        
        
      ],
      extras: [
        {
          extrakulikuler: 'basket',
          waktu: '16.00 - 18.00'
        }
      ]
  }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
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
    grid-column: 2/3;
    width: 100%;
    position: relative;
  }
  .table{
    background-color: #EEEEEE;
    text-align: center;
    width: 80%;
    margin: 20px auto;
    border: 5px solid #eee;
  }
  .table td{
    background-color: white;
    border: 5px solid #eee;
  }
</style>
