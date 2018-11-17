
    <template>
      <full-calendar :events="events" />
    </template>

    <script>
    import FullCalendar from 'vue-fullcalendar';
    export default {
      name: 'Calendar',
      props: ['events'],
      components: {
        FullCalendar
      }
    }
    </script>

    <style>
    .red {
      background: rgb(235, 77, 77) !important;
      color: whitesmoke !important;
    }
    .blue {
      background: rgb(59, 59, 163) !important;
      color: whitesmoke !important;
    }
    .orange {
      background: orange !important;
      color: white !important;
    }
    .green {
      background: rgb(49, 155, 49) !important;
      color: white !important;
    }
    .blue,
    .orange,
    .red,
    .green {
      font-size: 30px;
      font-weight: bold;
      text-transform: capitalize;
  
    }
    .event-item {
      padding: 2px 0 2px 4px !important;
      height: 80px;
    }
    </style>