import { toastStore } from './stores'
import type { ToastSettings } from './types'

export const writeSuccess: ToastSettings = {
	message:
		'Data recording was successful.',
	background: 'bg-success',
	classes: '',
	timeout: 7000
}
export const writeError: ToastSettings = {
	message:
		'Data recording was successful.',
	background: 'bg-danger',
	classes: 'text-muted',
	timeout: 7000
}

export const toastSuccess = {
	writeSuccess: () => toastStore.trigger(writeSuccess),
	writeError: () => toastStore.trigger(writeError)
}
