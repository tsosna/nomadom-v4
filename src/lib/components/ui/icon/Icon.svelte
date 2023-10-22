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
		MoreHorizontal,
		Globe, 
		Home,
		RotateCcw,
		User
	} from 'lucide-svelte'
	import { Logo } from './'
</script>

<slot {Sun} {Moon} {Mail} {Languages} {Facebook} {Instagram} {Twitter} 
{Phone} {Flower} {Leaf} {Sprout} {Shrub} {Trees} {Menu} {PanelRightOpen
} {MoreHorizontal} {Globe} {Logo} {Home} {RotateCcw} {User}/>
