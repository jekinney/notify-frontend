<template>
    <div>

        <section class="columns">
		
			<div class="column is-4 has-text-centered">

                <header>
                    <h2>Last Ten Emails</h2>
                </header>

	  			<email-list limit="10"></email-list>

			</div>
			
			<div class="column is-4 has-text-centered">
                
                <header>
                    <h2>Last 10 Text Messages</h2>
                </header>

                <message-list limit="10"></message-list>

			</div>

            <div class="column is-4 has-text-centered">
	  			
                <header>
                    <h2>Last 10 Recipient List</h2>
                </header>

                <recipient-list limit="10"></recipient-list>

			</div>

	    </section>

    </div>
</template>

<script>
    import EmailList from '@/app/email/components/list'
    import MessageList from '@/app/message/components/list'
    import RecipientList from '@/app/list/components/List'
    
    export default {
        name: 'Dashboard',
        components: {
            EmailList,
            MessageList,
            RecipientList
        }
    }
</script>
