<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Id</label>
                        <input type="number" v-model="id">
                    </div>
                    <div class="form-group">
                        <label>Mapel</label>
                        <input type="text" v-model="mapel">
                    </div>
                    <div class="form-group">
                        <label>Materi</label>
                        <input type="text" v-model="materi">
                    </div>
                    <div class="form-group">
                        <label>Waktu</label>
                        <input type="text" v-model="waktu">
                    </div>
                    <div class="form-group">
                         <input type="submit" class="btn btn-primary"/>
                    </div>
                    <button @click="removeItem">Delete Item</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  components: {
    name: 'admin'
  },
  data () {
    return {
      id: '',
      mapel: '',
      materi: '',
      waktu: ''
    }
  },
  methods: {
    addItem () {
      db.collection('tables').add({
        id: this.id,
        mapel: this.mapel,
        materi: this.materi,
        waktu: this.waktu
      })
          .then(docRef => this.$router.push('home'))
    },
    removeItem () {
      db.collection('tables').delete().then(function () {
        console.log('hahah')
      })
    }
  }
}
</script>
<style>

</style>
