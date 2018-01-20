<template>
    <table class="table is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th colspan="6" class="has-text-right">
                    <router-link :to="{ name: 'ListCreate' }">Add Recipient List</router-link>
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Recipients</th>
                <th>Emails</th>
                <th>Texts</th>
                <th>Expires</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="list in listings">
                <td>{{ list.name }}</td>
                <td>{{ list.recipients_count }}</td>
                <td>{{ list.emails_count }}</td>
                <td>{{ list.messages_count }}</td>
                <td>{{ list.expires_at }}</td>
                <td>
                    <router-link :to="{ name: 'list.edit', params: {listId: list.id} }">Edit</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'RecipientList',
        props: ['limit'],
        mounted () {
            this.getListing()
        },
        watch: {
            '$route': 'getlisting'
        },
        computed: {
            ...mapGetters({
                listings: 'list/listings'
            }),
        },
        methods: {
            ...mapActions({
                getListings: 'list/getListings'
            }),
            getListing () {
                return this.getListings( this.limit )
            }
        }
    }
</script>


