<template>
    <section>

        <header>
            <h1 class="title">{{ message.name }}</h1>
            <h4 class="subtitle"></h4>
        </header>

        <article>
            <p v-text="message.body"></p>
        </article>

        <recipient-list :recipients.sync="message.recipients"></recipient-list>

    </section>
</template>

<script>
    import RecipientList from '@/app/recipients/components/List'

    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'ShowMessage',
        mounted () {
            this.setUpPage()
        },
        watch: {
            '$route': 'setUpPage'
        },
        computed: {
            ...mapGetters({
                message: 'message/message'
            })
        },
        methods: {
            ...mapActions({
                getMessage: 'message/getMessage'
            }),
            setUpPage () {
                return this.getMessage( this.$router.params.messageId )
            }
        },
        components: {
            RecipientList
        }
    }
</script>

