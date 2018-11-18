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
            <div class="item active">
              <img src="../assets/absen_a.png" alt="">
              <p>Absensi Siswa</p>
            </div>
            </router-link>
            <router-link to="nilai">
            <div class="item">
              <img src="../assets/nilai.png" alt="">
              <p>Nilai Siswa</p>
            </div>
            </router-link>
              <router-link to="pelanggaran">
            <div class="item">
              <img src="../assets/pelanggaran.png" alt="">
              <p>Pelanggaran Siswa</p>
            </div>
            </router-link>
       <router-link to="spp">
            <div class="item">
              <img src="../assets/bayar.png" alt="">
              <p>Informasi Spp</p>
            </div>
            </router-link>
          </div>
        </div>
        <div class="content">
          <router-view></router-view> 
          <div class="main">
          <div class="calendar-holder">
            <calendar :events="events" />
            
          </div>
        </div>
    </div>
    </div>
</template>

 <script>
    import Calendar from './Calendar.vue'
    import EventForm from './EventForm.vue'
    import Pusher from 'pusher-js';
    export default {
      name: 'calender',
      components: {
        Calendar,
        EventForm
      },
      data(){
        return {
          events: [{
            title     :  'Ijin',
            start     : '2018-11-09',
            cssClass  : 'blue',
            YOUR_DATA : {}
          },
          {
            title     : 'Sakit',
            start     : '2018-11-13',
            end       : '2018-11-15',
            cssClass  : ['orange']
          }] 
        }
      },
        created(){
        const pusher = new Pusher('b5945df4e03f80ba788f', {
          cluster: 'ap1',
          encrypted: true,
        });
        const channel = pusher.subscribe('schedule');
        channel.bind('new-event', (data) => {
          this.events = [
            ...this.events,
            data
          ];
        })
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
    grid-gap: 50px;
    width: 100%;
    padding: 40px;
    position: relative;
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

</style>
