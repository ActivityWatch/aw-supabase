<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template lang="pug">
WelcomeItem
  template(#icon)
    SupportIcon
  template(#heading) Support ActivityWatch
  | As a free and open-source project, ActivityWatch relies on users supporting it with a subscription. You can help us by
  a(
href="/pricing",
target="_blank",
rel="noopener") subscribing to a plan
    | , or by
    a(
href="https://activitywatch.net/donate",
target="_blank",
rel="noopener") donating.

WelcomeItem
  template(#icon)
    ToolingIcon
  template(#heading) Tooling

WelcomeItem
  template(#icon)
    DocumentationIcon
  template(#heading) Documentation

WelcomeItem
  template(#icon)
    EcosystemIcon
  template(#heading) Ecosystem

WelcomeItem
  template(#icon)
    CommunityIcon
  template(#heading) Community
  ul.list-unstyled
      li
          a.link(href="https://forum.activitywatch.net")
              | Forum
      li
          a.link(href="")
              | Discord
</template>
