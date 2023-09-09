<script lang="ts">
	import {
		Sun,
		Moon,
		Mail,
		Languages,
		Facebook,
		Instagram,
		Twitter,
		Phone,
		Flower,
		Leaf,
		Sprout,
		Shrub,
		Trees,
		Menu,
		PanelRightOpen,
		MoreHorizontal
	} from 'lucide-svelte'
	import { Logo } from './'

	const I = {
		Sun,
		Moon,
		Mail,
		Languages,
		Logo,
		Facebook,
		Instagram,
		Twitter,
		Phone,
		Flower,
		Leaf,
		Sprout,
		Shrub,
		Trees,
		Menu,
		PanelRightOpen,
		MoreHorizontal
	}
</script>

<slot {I} />
