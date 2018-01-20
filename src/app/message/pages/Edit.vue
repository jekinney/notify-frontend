<template>
    <div>

        <header>
            <h1 class="title has-text-centered">Update Text Message</h1>
        </header>

        <form @submit.prevent="submit">

            <div class="columns">

                <div class="field column">
                    <label class="label">Name</label>
                    <div class="control">
                        <input type="text" v-model="message.name" class="input" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Send Date</label>
                    <div class="control">
                        <input type="text" v-model="message.end_date" class="input" placeholder="02/07/2018" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Send Time</label>
                    <div class="control">
                        <input type="text" v-model="message.end_time" class="input" placeholder="2:00" required>
                    </div>
                </div>

                <div class="field column is-1">
                    <label class="label">AM or PM</label>
                    <div class="select">
                        <select v-model="message.time_day" required>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="columns">
                
                <div class="field column">
                    <label class="label">
                        Message 
                        <span class="has-text-danger">Max 300 characters</span>
                        <span>{{ message.body.length }} characters used</span>
                    </label>
                    <textarea v-model="message.body" class="textarea"></textarea>
                </div>

            </div>

             <div class="columns">
                
                <div class="field column has-text-right">
                    <button type="submit" class="button is-link">Save</button>
                </div>

            </div>

        </form>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'CreateTextMessage',
        data () {
            return {
                updatedMessage: {
                    name: '',
                    body: '',
                    send_date: '',
                    send_time: '',
                    time_of_day: 'am'
                },
                errors: [],
                submiting: false
            }
        },
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
                getMessage: 'message/getMessage',
                submitUpdate: 'message/submitUpdate'
            }),
            setUpPage () {
                this.getMessage( this.$router.param.messageId )

                return this.updatedMessage = {
                    name: this.message.name,
                    body: this.message.body,
                    send_date: this.message.send_date,
                    send_time: this.message.send_time,
                    time_of_day: this.message.time_of_day
                }

            },
            submit () {
                return this.submitUpdate( this.updatedMessage, this )
            }
        }
    }
</script>

