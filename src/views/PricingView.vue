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

    div.border.border-gray-400.rounded-lg.shadow-md.mt-8.p-5
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
                    th
                    //th Description
                    //td For everyone, forever.
                    td 
                      div.inline-block.text-green-900.font-bold.px-2.py-1.bg-green-200.rounded-xl
                        | Most popular!
                    td.font-bold.text-slate-700
                      | For happy users
                    td.font-bold.text-slate-700
                      | For professionals
                    td
                      div.inline-block.text-yellow-900.font-bold.px-2.py-1.bg-yellow-200.rounded-xl
                        | Best value!
                tr
                    // spacing
                    td
                tr
                    th Price
                    td Free
                    td 5 USD / month
                    td 20 USD / month
                    td 50 USD / year
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
                tr
                    // spacing
                    td
                tr
                    // call to action
                    // TODO: update with stripe checkout
                    td
                    td
                        div.inline-block.px-4.py-2.bg-slate-100.rounded-xl.shadow.text-sm.text-slate-600
                            | You already have it!
                    td
                      a(href="https://activitywatch.net/donate/")
                        div.inline-block.px-4.py-2.border.border-green-400.bg-green-200.rounded-xl.shadow.ring-green-500(class="hover:ring-2")
                          | Subscribe
                    td
                      a(href="https://activitywatch.net/donate/")
                        div.inline-block.px-4.py-2.border.border-yellow-500.bg-yellow-300.rounded-xl.shadow.ring-yellow-500(class="hover:ring-2")
                          | Subscribe
                    td
                      a(href="https://activitywatch.net/donate/")
                        div.inline-block.px-4.py-2.border.border-slate-500.bg-slate-700.rounded-xl.shadow.ring-slate-800.text-white.font-bold(class="hover:ring")
                          | Believe

    div.mt-8.max-w-xl.mx-auto.text-sm.text-gray-500.text-center
        | The prices include VAT for EU customers.

    div.mt-8.max-w-xl.mx-auto
        p
            b Note
        p The subscriptions are not yet available, but will be soon. If you want to support the project in the meantime, you can do so by #[a(href="https://activitywatch.net/donate/") donating].

    div.mt-8.max-w-xl.mx-auto
        p
            b Note
        p Subscriptions are offered by Superuser Labs Lund AB, a company founded by Erik Bjäreholt, the lead developer of ActivityWatch. To learn more about the company, visit #[a(href="https://superuserlabs.org/" target="_blank") superuserlabs.org].

</template>

<style lang="scss" scoped>
tr {
  td {
    padding: 0.6rem 1rem;
  }
}
tbody {
  th {
    text-align: left;
  }
}
</style>
