<template>
    <div id="dashboard">
        <h3>Dashboard</h3>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus">

                </i>
            </router-link>
        </div>
    </div>
</template>


<script>
import db from '../Firebase/firebaseInit'
export default {
    name: "dashboard",
    data () {
        return {
            employess: []
        }
    },
    created () {
        db.collection('employees').get()
        .then(querySnapShoot => {
            querySnapShoot.forEach(doc => {
                console.log(doc.data())
                const data = {
                    doc
                }
            });
        })
    }
}
</script>
