<template>
    <table class="table">
        <thead>
            <tr>
                <th colspan="4" class="has-text-right">
                    <router-link :to="{ name: 'EmailCreate' }">New Email</router-link>
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Completed</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'UpcomingEmails'
    }
</script>

