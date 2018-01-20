<template>
    <div>
        <form @submit.prevent="submit">
            <div class="columns">

                <div class="field column">
                    <label class="label">Name</label>
                    <div class="control">
                        <input type="text" v-model="listing.name" class="input" placeholder="List Name" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Expires Date</label>
                    <div class="control">
                        <input type="text" v-model="listing.expires_date" class="input" placeholder="02/07/2018" required>
                    </div>
                </div>

                <div class="field column is-2">
                    <label class="label">Expires Time</label>
                    <div class="control">
                        <input type="text" v-model="listing.expires_time" class="input" placeholder="2:00" required>
                    </div>
                </div>

                <div class="field column is-1">
                    <label class="label">AM or PM</label>
                    <div class="select">
                        <select v-model="listing.time_of_day" required>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </div>
                </div>

            </div>

            <recipient-list :recipients.sync="recipients"></recipient-list>

            <div class="field">

                <div class="has-text-left">

                    <button type="button" class="button is-danger" @click="showUpload">Upload Recipients</button>

                </div>

                <div class="has-text-right">

                    <button type="submit" class="button is-link">Save</button>

                </div>

            </div>

        </form>

        <recipient-upload :show.sync="uploadModal" @close-upload="closeUpload"></recipient-upload>
    </div>
</template>

<script>
    import RecipientList from '@/app/recipients/components/List'
    import RecipientUpload from '@/app/recipients/components/UploadModal'

    import { mapActions } from 'vuex'

    export default {
        name: 'ListCreate',
        data () {
            return {
                errors: [],
                listing: {
                    name: '',
                    expires_date: '',
                    expires_time: '',
                    time_of_day: 'am'
                },
                recipients: [],
                submiting: false,
                uploadModal: true
            }
        },
        components: {
            RecipientList,
            RecipientUpload
        },
        methods: {
            ...mapActions({
                postNewList: 'list/postNewListing',
            }),
            submit () {
                this.submiting = true
                this.postNewList(
                    { list: this.listing },
                    { context: this }
                )
            },
            showUpload () {
                return this.uploadModal = true
            },
            closeUpload () {
                return this.uploadModal = false
            }
        }
    }
</script>

