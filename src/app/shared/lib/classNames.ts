type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean }

export function classNames(...args: ClassValue[]): string {
	return args
		.reduce<string[]>((classes, arg) => {
			if (!arg) return classes

			if (typeof arg === 'string' || typeof arg === 'number') {
				return [...classes, String(arg)]
			}

			if (typeof arg === 'object') {
				const objectClasses = Object.entries(arg)
					.filter(([, value]) => Boolean(value))
					.map(([key]) => key)
				return [...classes, ...objectClasses]
			}

			return classes
		}, [])
		.join(' ')
}

