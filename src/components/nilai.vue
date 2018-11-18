<template>
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
              <router-link to="utama">
            <div class="item">
              <img src="../assets/house.png" alt="">
                <p>Halaman Utama</p>
            </div>
              </router-link>
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
            <div class="item active">
              <img src="../assets/nilai_a.png" alt="">
              <p>Nilai Siswa</p>
            </div>
            </router-link>
            <router-link to="pelanggaran">
            <div class="item">
              <img src="../assets/pelanggaran.png" alt="">
              <p>Pelanggaran Siswa</p>
            </div>
            </router-link>
            <div class="item">
              <img src="../assets/bayar.png" alt="">
              <p>Informasi Spp</p>
            </div>
          </div>
        </div>
        <div class="content">
          <router-view></router-view> 
          <div class="first">
            <div class="head1">
              <p class="activ">Ulangan Harian</p>
              <p>Ulangan Tengah Semester</p>
              <p>Ulangan Akhir Semester</p>
            </div>
            <div class="hasil"
              v-for="hasil in hasils" v-bind:key="hasil.mapel"        
            >
              <p>{{hasil.mapel}}</p>
              <p>{{hasil.uh_1}}</p>
              <p>{{hasil.uh_2}}</p>
              <p>{{hasil.uh_3}}</p>
            </div>
          </div>
        <div class="second">
            <div class="head2">
              <p>Grafik Perkembangan Siswa</p>
              </div>
              <div class="cards">
                <div class="card">

                </div>
                <div class="card">

                </div>
              </div>
            
          </div>
    </div>
    </div>
</template>

 <script>
    export default {
      name: 'nilai',
      components: {
      },
      data(){
        return { 
          hasils:[
            {
              mapel: 'Pendidikan Agama',
              uh_1: 'UH :1 90',
              uh_2: 'UH :2 80',
              uh_3: 'UH :3 85'
            },
            {
              mapel : 'PKn',
              uh_1 : 'UH : 1 78',
              uh_2 : 'UH : 2 85',
              uh_3 : 'UH : 3 80',
            },
            {
mapel : 'Matematika',
              uh_1 : 'UH : 1 90',
              uh_2 : 'UH : 2 85',
              uh_3 : 'UH : 3 70',
            },
            {
            mapel : 'Bahasa Indonesia',
              uh_1 : 'UH : 1 80',
              uh_2 : 'UH : 2 95',
              uh_3 : 'UH : 3 80',
            },
            {
            mapel : 'Bahasa Inggris',
              uh_1 : 'UH : 1 100',
              uh_2 : 'UH : 2 75',
              uh_3 : 'UH : 3 90',
            },
            {
            mapel : 'Bahasa Jawa',
              uh_1 : 'UH : 1 50',
              uh_2 : 'UH : 2 70',
              uh_3 : 'UH : 3 80',
            },
             {
            mapel : 'KK1',
              uh_1 : 'UH : 1 90',
              uh_2 : 'UH : 2 95',
              uh_3 : 'UH : 3 90',
            },
             {
            mapel : 'KK2',
              uh_1 : 'UH : 1 80',
              uh_2 : 'UH : 2 75',
              uh_3 : 'UH : 3 95',
            },
             {
            mapel : 'KK3',
              uh_1 : 'UH : 1 100',
              uh_2 : 'UH : 2 85',
              uh_3 : 'UH : 3 90',
            },
             {
            mapel : 'KK4',
              uh_1 : 'UH : 1 80',
              uh_2 : 'UH : 2 90',
              uh_3 : 'UH : 3 85',
            },
             {
            mapel : 'KK5-A',
              uh_1 : 'UH : 1 90',
              uh_2 : 'UH : 2 100',
              uh_3 : 'UH : 3 80',
            },
             {
            mapel : 'KK5-B',
              uh_1 : 'UH : 1 70',
              uh_2 : 'UH : 2 65',
              uh_3 : 'UH : 3 80',
            },
          ]
        }
      },
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
    display: flex;
    width: 100%;
    padding: 40px;
    position: relative;
    flex-direction: row;
  }
  .content > div{
      background: white;
  }
   .main {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .calendar-holder {
      width: 50%;
    }
    .form-holder {
      width: 65%;
    }
    .form-holder > h3 {
      color: orangered;
      text-transform: uppercase;
      font-size: 16px;
      text-align: left;
      margin-left: 30px;
      margin-bottom: 10px;
    }
    .first{
      min-height: 100vh;
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .first .head1{
      display: flex;
      flex-direction: row;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .first .head1 p{
      font-size: 20px;
      font-weight: 400;
      padding: 60px 60px 30px 60px;
    }
    .hasil{
      display: grid;
      grid-template-columns: repeat(4, 25%);
      border: 1px solid black;
      margin-top: 20px;
      height: 60px;
      justify-content: center;
      align-items: center;
      width: 80%;
    }
    .hasil p{
      font-size: 18px;
      margin-left: 20px;
    }
    .activ{
      margin-bottom: 20px;
      border-bottom: 3px solid  #508EEC;
      
    }
    .second{
      width: 30%;
      background-color: red;
      min-height: 100vh;
      padding: 30px;
      display: flex;
      flex-direction: column;
      
    }
    .cards .card:nth-child(1){
      width: 100%;
      height: 300px;
      background-image: url('../assets/biru.png');
      margin-top: 50px;
    }
    .cards .card:nth-child(2){
      width: 100%;
      height: 300px;
      margin-top: 50px;
      background-image: url('../assets/merah.png')
    }
      .second .head2 p{
      font-size: 20px;
      font-weight: 400;
      padding: 60px 60px 30px 60px;
    }
</style>
