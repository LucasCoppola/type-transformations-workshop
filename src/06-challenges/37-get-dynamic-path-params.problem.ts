import { S } from 'ts-toolbelt'
import { Equal, Expect } from '../helpers/type-utils'

type UserPath = '/users/:id'

type UserOrganisationPath = '/users/:id/organisations/:organisationId'

type ExtractPathParams<T extends string> = {
	[I in S.Split<T, '/'>[number] as I extends `:${infer P}` ? P : never]: T[number]
}

type res = ExtractPathParams<UserOrganisationPath>
// 	  ^?

type tests = [
	Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
	Expect<Equal<ExtractPathParams<UserOrganisationPath>, { id: string; organisationId: string }>>
]
