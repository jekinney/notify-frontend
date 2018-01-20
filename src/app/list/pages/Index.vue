<template>
    <div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'list-index',
        mounted () {
            this.getListings()
        },
        watch: {
            '$route': 'getListings'
        },
        computed: mapGetters({
            listings: 'list/listings'
        }),
        methods: mapActions({
            getListings: 'list/getListings'
        }),
    }
</script>

