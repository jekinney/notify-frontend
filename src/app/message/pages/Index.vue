<template>
    <div>

        <header>
            <h2>All Text Messages</h2>
        </header>

        <message-list></message-list>

    </div>    
</template>

<script>
    import MessageList from '@/app/message/components/list'

    export default {
        name: 'MessageIndex'
    }
</script>

