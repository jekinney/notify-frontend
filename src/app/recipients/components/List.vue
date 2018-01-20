<template>
    <div>

        <table v-if="recipients.length > 0" class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="recipient in recipients">
                    <td>{{ recipient.name }}</td>
                    <td>{{ recipient.email }}</td>
                    <td>{{ recipient.cell_phone }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'RecipientList',
        props: {
            recipients: {
                default: []
            }
        }
    }
</script>

