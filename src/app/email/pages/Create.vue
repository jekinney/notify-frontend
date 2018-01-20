<template>
    <div>

        <header>
            <h1 class="title has-text-centered">Create a New Email</h1>
        </header>

        <form @submit.prevent="submit">

            <div class="columns">

                <div class="field column">
                    <label class="label">Name</label>
                    <div class="control">
                        <input type="text" v-model="email.name" class="input" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Send Date</label>
                    <div class="control">
                        <input type="text" v-model="email.end_date" class="input" placeholder="02/07/2018" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Send Time</label>
                    <div class="control">
                        <input type="text" v-model="email.end_time" class="input" placeholder="2:00" required>
                    </div>
                </div>

                <div class="field column is-1">
                    <label class="label">AM or PM</label>
                    <div class="select">
                        <select v-model="email.time_day" required>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </div>
                </div>

            </div>

             <div class="columns">
                
                <div class="field column">
                    <label class="label">
                        Subject
                        <span class="has-text-danger">Max 200 characters</span>
                        <span>{{ email.subject.length }} characters used</span>
                    </label>
                    <input type="text" v-model="email.subject" class="input" required>
                </div>

            </div>

            <div class="columns">
                
                <div class="field column">
                    <label class="label">Email Body</label>
                    <textarea v-model="email.body" class="textarea" required></textarea>
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
    export default {
        name: 'CreateEmailMessage',
        data () {
            return {
                email: {
                    name: '',
                    body: '',
                    subject: '',
                    send_date: '',
                    send_time: '',
                    time_of_day: 'am'
                },
                errors: [],
                submiting: false
            }
        },
        methods: {
            submit () {

            }
        }
    }
</script>

