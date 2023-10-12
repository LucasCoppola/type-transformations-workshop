import { Equal, Expect } from '../helpers/type-utils'

type Route =
	| {
			route: '/'
			search: {
				page: string
				perPage: string
			}
	  }
	| { route: '/about' }
	| { route: '/admin' }
	| { route: '/admin/users' }

type RoutesObject = { [R in Route as R['route']]: R extends { search: any } ? R['search'] : never }

type tests = [
	Expect<
		Equal<
			RoutesObject,
			{
				'/': {
					page: string
					perPage: string
				}
				'/about': never
				'/admin': never
				'/admin/users': never
			}
		>
	>
]
