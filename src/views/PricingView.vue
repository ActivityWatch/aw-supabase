<script setup lang="ts"></script>

<template lang="pug">
main
    div.mx-auto.px-4.w-full.max-w-xl.my-8
        div.text-center
            h1.text-3xl.font-bold.mb-4.text-center Pricing

            p.py-1 ActivityWatch is free and open-source software, and will always be free.

            p.py-1 It is fully self-hosted, and it never sends data to any third party.

            p.py-1 There are no features locked behind a paywall, and there are no ads.

        hr.my-8

        p.pt-4
            | #[i However],
            | we want to make sure that ActivityWatch flourishes for many years to come.
            | But to ensure that, we need it to become a financially sustainable software project.
            | This means having enough revenue to support a full-time developer.
        p.pt-4
            | #[i Therefore], we offer a few different pricing plans, and suggest you support the project if you have the means.

    div.border.border-gray-400.rounded-lg.shadow-md.mt-8.p-4
        table.table-auto.border-collapse.w-full
            thead
                tr.text-2xl.font-bold
                    th
                    th Free
                    th Supporter
                    th Professional
                    th Believer
            tbody.text-center
                tr
                    td
                    td Most popular!
                    td
                    td
                    td Best value!
                tr
                    th Description
                    td For everyone, forever.
                    td For generous users.
                    td For professionals.
                    td For believers.
                tr
                    th Price
                    td Free
                    td 5 USD / month
                    td 15 USD / month
                    td 100 USD / year
                tr
                    th Features
                    td Everything
                    td Everything
                    td Everything
                    td Everything
                tr
                    th Support
                    td Community
                    td Community
                    td Email
                    td Email
                tr
                    th Recognition
                    td None
                    td #[a(href="https://activitywatch.net/sponsors/") Website]
                    td #[a(href="https://activitywatch.net/sponsors/") Website]
                    td #[a(href="https://activitywatch.net/sponsors/") Website]

    div.mt-8.max-w-xl.mx-auto
        p
            b Note
        p The subscriptions are not yet available, but will be soon. If you want to support the project in the meantime, you can do so by #[a(href="https://activitywatch.net/donate/") donating].

    div.mt-8.max-w-xl.mx-auto
        p
            b Note
        p Subscriptions are offered by Superuser Labs Lund AB, a company founded by Erik Bjäreholt, the lead developer of ActivityWatch. The prices are VAT inclusive.
</template>

<style lang="scss" scoped>
tr {
  td {
    padding: 0.5rem 1rem;
  }
}
tbody {
  th {
    text-align: left;
  }
}
</style>
