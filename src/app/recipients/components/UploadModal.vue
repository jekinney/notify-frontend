<template>
    <div class="modal" :class="{ 'is-active': show }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Upload Recipients</p>
                <button class="delete" aria-label="close" @click="close"></button>
            </header>
            <section class="modal-card-body">
                <input type="file" class="input" @change="upload">
            </section>
            <footer class="modal-card-foot">
                <button class="button" @click="close">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'RecipientsUploadModal',
        props: {
            show: {
                default: false
            }
        },
        data () {
            return {
                file: null
            }
        },
        methods: {
            upload (event) {

            },
            close () {
                this.$emit('close-upload');
            }
        },

    }
</script>

