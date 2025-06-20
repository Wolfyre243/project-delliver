/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model userprofile
 *
 */
export type userprofile = $Result.DefaultSelection<Prisma.$userprofilePayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model mission
 *
 */
export type mission = $Result.DefaultSelection<Prisma.$missionPayload>
/**
 * Model missioncategory
 *
 */
export type missioncategory =
  $Result.DefaultSelection<Prisma.$missioncategoryPayload>
/**
 * Model sessions
 *
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model usermissioncompletion
 *
 */
export type usermissioncompletion =
  $Result.DefaultSelection<Prisma.$usermissioncompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const visibility: {
    private: 'private'
    public: 'public'
    restricted: 'restricted'
  }

  export type visibility = (typeof visibility)[keyof typeof visibility]
}

export type visibility = $Enums.visibility

export const visibility: typeof $Enums.visibility

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Userprofiles
 * const userprofiles = await prisma.userprofile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Userprofiles
   * const userprofiles = await prisma.userprofile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  )
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.userprofile`: Exposes CRUD operations for the **userprofile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Userprofiles
   * const userprofiles = await prisma.userprofile.findMany()
   * ```
   */
  get userprofile(): Prisma.userprofileDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.mission`: Exposes CRUD operations for the **mission** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Missions
   * const missions = await prisma.mission.findMany()
   * ```
   */
  get mission(): Prisma.missionDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.missioncategory`: Exposes CRUD operations for the **missioncategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Missioncategories
   * const missioncategories = await prisma.missioncategory.findMany()
   * ```
   */
  get missioncategory(): Prisma.missioncategoryDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.sessions.findMany()
   * ```
   */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.usermissioncompletion`: Exposes CRUD operations for the **usermissioncompletion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Usermissioncompletions
   * const usermissioncompletions = await prisma.usermissioncompletion.findMany()
   * ```
   */
  get usermissioncompletion(): Prisma.usermissioncompletionDelegate<
    ExtArgs,
    ClientOptions
  >
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    userprofile: 'userprofile'
    User: 'User'
    mission: 'mission'
    missioncategory: 'missioncategory'
    sessions: 'sessions'
    usermissioncompletion: 'usermissioncompletion'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'userprofile'
        | 'user'
        | 'mission'
        | 'missioncategory'
        | 'sessions'
        | 'usermissioncompletion'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      userprofile: {
        payload: Prisma.$userprofilePayload<ExtArgs>
        fields: Prisma.userprofileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userprofileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userprofileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findFirst: {
            args: Prisma.userprofileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userprofileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findMany: {
            args: Prisma.userprofileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          create: {
            args: Prisma.userprofileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          createMany: {
            args: Prisma.userprofileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userprofileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          delete: {
            args: Prisma.userprofileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          update: {
            args: Prisma.userprofileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          deleteMany: {
            args: Prisma.userprofileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userprofileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userprofileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          upsert: {
            args: Prisma.userprofileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          aggregate: {
            args: Prisma.UserprofileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserprofile>
          }
          groupBy: {
            args: Prisma.userprofileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserprofileGroupByOutputType>[]
          }
          count: {
            args: Prisma.userprofileCountArgs<ExtArgs>
            result:
              | $Utils.Optional<UserprofileCountAggregateOutputType>
              | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      mission: {
        payload: Prisma.$missionPayload<ExtArgs>
        fields: Prisma.missionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.missionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.missionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          findFirst: {
            args: Prisma.missionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.missionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          findMany: {
            args: Prisma.missionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>[]
          }
          create: {
            args: Prisma.missionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          createMany: {
            args: Prisma.missionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.missionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>[]
          }
          delete: {
            args: Prisma.missionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          update: {
            args: Prisma.missionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          deleteMany: {
            args: Prisma.missionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.missionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.missionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>[]
          }
          upsert: {
            args: Prisma.missionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.missionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.missionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      missioncategory: {
        payload: Prisma.$missioncategoryPayload<ExtArgs>
        fields: Prisma.missioncategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.missioncategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.missioncategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          findFirst: {
            args: Prisma.missioncategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.missioncategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          findMany: {
            args: Prisma.missioncategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>[]
          }
          create: {
            args: Prisma.missioncategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          createMany: {
            args: Prisma.missioncategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.missioncategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>[]
          }
          delete: {
            args: Prisma.missioncategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          update: {
            args: Prisma.missioncategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          deleteMany: {
            args: Prisma.missioncategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.missioncategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.missioncategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>[]
          }
          upsert: {
            args: Prisma.missioncategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missioncategoryPayload>
          }
          aggregate: {
            args: Prisma.MissioncategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissioncategory>
          }
          groupBy: {
            args: Prisma.missioncategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissioncategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.missioncategoryCountArgs<ExtArgs>
            result:
              | $Utils.Optional<MissioncategoryCountAggregateOutputType>
              | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      usermissioncompletion: {
        payload: Prisma.$usermissioncompletionPayload<ExtArgs>
        fields: Prisma.usermissioncompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usermissioncompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usermissioncompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          findFirst: {
            args: Prisma.usermissioncompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usermissioncompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          findMany: {
            args: Prisma.usermissioncompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>[]
          }
          create: {
            args: Prisma.usermissioncompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          createMany: {
            args: Prisma.usermissioncompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usermissioncompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>[]
          }
          delete: {
            args: Prisma.usermissioncompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          update: {
            args: Prisma.usermissioncompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          deleteMany: {
            args: Prisma.usermissioncompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usermissioncompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usermissioncompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>[]
          }
          upsert: {
            args: Prisma.usermissioncompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usermissioncompletionPayload>
          }
          aggregate: {
            args: Prisma.UsermissioncompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsermissioncompletion>
          }
          groupBy: {
            args: Prisma.usermissioncompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsermissioncompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.usermissioncompletionCountArgs<ExtArgs>
            result:
              | $Utils.Optional<UsermissioncompletionCountAggregateOutputType>
              | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userprofile?: userprofileOmit
    user?: UserOmit
    mission?: missionOmit
    missioncategory?: missioncategoryOmit
    sessions?: sessionsOmit
    usermissioncompletion?: usermissioncompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mission: number
    sessions: number
    usermissioncompletion: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | UserCountOutputTypeCountMissionArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    usermissioncompletion?:
      | boolean
      | UserCountOutputTypeCountUsermissioncompletionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: missionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sessionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsermissioncompletionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: usermissioncompletionWhereInput
  }

  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    usermissioncompletion: number
  }

  export type MissionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usermissioncompletion?:
      | boolean
      | MissionCountOutputTypeCountUsermissioncompletionArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountUsermissioncompletionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: usermissioncompletionWhereInput
  }

  /**
   * Count Type MissioncategoryCountOutputType
   */

  export type MissioncategoryCountOutputType = {
    mission: number
  }

  export type MissioncategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | MissioncategoryCountOutputTypeCountMissionArgs
  }

  // Custom InputTypes
  /**
   * MissioncategoryCountOutputType without action
   */
  export type MissioncategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MissioncategoryCountOutputType
     */
    select?: MissioncategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissioncategoryCountOutputType without action
   */
  export type MissioncategoryCountOutputTypeCountMissionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: missionWhereInput
  }

  /**
   * Models
   */

  /**
   * Model userprofile
   */

  export type AggregateUserprofile = {
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  export type UserprofileAvgAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type UserprofileSumAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
  }

  export type UserprofileMinAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    exercise_duration: string | null
  }

  export type UserprofileMaxAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
    updated_at: Date | null
    exercise_duration: string | null
  }

  export type UserprofileCountAggregateOutputType = {
    profile_id: number
    user_id: number
    first_name: number
    last_name: number
    created_at: number
    updated_at: number
    exercise_duration: number
    history: number
    _all: number
  }

  export type UserprofileAvgAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type UserprofileSumAggregateInputType = {
    profile_id?: true
    user_id?: true
  }

  export type UserprofileMinAggregateInputType = {
    profile_id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
    exercise_duration?: true
  }

  export type UserprofileMaxAggregateInputType = {
    profile_id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
    exercise_duration?: true
  }

  export type UserprofileCountAggregateInputType = {
    profile_id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
    exercise_duration?: true
    history?: true
    _all?: true
  }

  export type UserprofileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which userprofile to aggregate.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userprofiles to fetch.
     */
    orderBy?:
      | userprofileOrderByWithRelationInput
      | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned userprofiles
     **/
    _count?: true | UserprofileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserprofileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserprofileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserprofileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserprofileMaxAggregateInputType
  }

  export type GetUserprofileAggregateType<T extends UserprofileAggregateArgs> =
    {
      [P in keyof T & keyof AggregateUserprofile]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUserprofile[P]>
        : GetScalarType<T[P], AggregateUserprofile[P]>
    }

  export type userprofileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userprofileWhereInput
    orderBy?:
      | userprofileOrderByWithAggregationInput
      | userprofileOrderByWithAggregationInput[]
    by: UserprofileScalarFieldEnum[] | UserprofileScalarFieldEnum
    having?: userprofileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserprofileCountAggregateInputType | true
    _avg?: UserprofileAvgAggregateInputType
    _sum?: UserprofileSumAggregateInputType
    _min?: UserprofileMinAggregateInputType
    _max?: UserprofileMaxAggregateInputType
  }

  export type UserprofileGroupByOutputType = {
    profile_id: number
    user_id: number
    first_name: string
    last_name: string
    created_at: Date | null
    updated_at: Date | null
    exercise_duration: string
    history: string[]
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  type GetUserprofileGroupByPayload<T extends userprofileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserprofileGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof UserprofileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
            : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
        }
      >
    >

  export type userprofileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      profile_id?: boolean
      user_id?: boolean
      first_name?: boolean
      last_name?: boolean
      created_at?: boolean
      updated_at?: boolean
      exercise_duration?: boolean
      history?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['userprofile']
  >

  export type userprofileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      profile_id?: boolean
      user_id?: boolean
      first_name?: boolean
      last_name?: boolean
      created_at?: boolean
      updated_at?: boolean
      exercise_duration?: boolean
      history?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['userprofile']
  >

  export type userprofileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      profile_id?: boolean
      user_id?: boolean
      first_name?: boolean
      last_name?: boolean
      created_at?: boolean
      updated_at?: boolean
      exercise_duration?: boolean
      history?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['userprofile']
  >

  export type userprofileSelectScalar = {
    profile_id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercise_duration?: boolean
    history?: boolean
  }

  export type userprofileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'profile_id'
    | 'user_id'
    | 'first_name'
    | 'last_name'
    | 'created_at'
    | 'updated_at'
    | 'exercise_duration'
    | 'history',
    ExtArgs['result']['userprofile']
  >
  export type userprofileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type userprofileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type userprofileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $userprofilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'userprofile'
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        profile_id: number
        user_id: number
        first_name: string
        last_name: string
        created_at: Date | null
        updated_at: Date | null
        exercise_duration: string
        history: string[]
      },
      ExtArgs['result']['userprofile']
    >
    composites: {}
  }

  type userprofileGetPayload<
    S extends boolean | null | undefined | userprofileDefaultArgs,
  > = $Result.GetResult<Prisma.$userprofilePayload, S>

  type userprofileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    userprofileFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserprofileCountAggregateInputType | true
  }

  export interface userprofileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['userprofile']
      meta: { name: 'userprofile' }
    }
    /**
     * Find zero or one Userprofile that matches the filter.
     * @param {userprofileFindUniqueArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userprofileFindUniqueArgs>(
      args: SelectSubset<T, userprofileFindUniqueArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Userprofile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userprofileFindUniqueOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userprofileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, userprofileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Userprofile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userprofileFindFirstArgs>(
      args?: SelectSubset<T, userprofileFindFirstArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Userprofile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userprofileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userprofileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Userprofiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userprofiles
     * const userprofiles = await prisma.userprofile.findMany()
     *
     * // Get first 10 Userprofiles
     * const userprofiles = await prisma.userprofile.findMany({ take: 10 })
     *
     * // Only select the `profile_id`
     * const userprofileWithProfile_idOnly = await prisma.userprofile.findMany({ select: { profile_id: true } })
     *
     */
    findMany<T extends userprofileFindManyArgs>(
      args?: SelectSubset<T, userprofileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Userprofile.
     * @param {userprofileCreateArgs} args - Arguments to create a Userprofile.
     * @example
     * // Create one Userprofile
     * const Userprofile = await prisma.userprofile.create({
     *   data: {
     *     // ... data to create a Userprofile
     *   }
     * })
     *
     */
    create<T extends userprofileCreateArgs>(
      args: SelectSubset<T, userprofileCreateArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Userprofiles.
     * @param {userprofileCreateManyArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userprofileCreateManyArgs>(
      args?: SelectSubset<T, userprofileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Userprofiles and returns the data saved in the database.
     * @param {userprofileCreateManyAndReturnArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Userprofiles and only return the `profile_id`
     * const userprofileWithProfile_idOnly = await prisma.userprofile.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userprofileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, userprofileCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Userprofile.
     * @param {userprofileDeleteArgs} args - Arguments to delete one Userprofile.
     * @example
     * // Delete one Userprofile
     * const Userprofile = await prisma.userprofile.delete({
     *   where: {
     *     // ... filter to delete one Userprofile
     *   }
     * })
     *
     */
    delete<T extends userprofileDeleteArgs>(
      args: SelectSubset<T, userprofileDeleteArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Userprofile.
     * @param {userprofileUpdateArgs} args - Arguments to update one Userprofile.
     * @example
     * // Update one Userprofile
     * const userprofile = await prisma.userprofile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userprofileUpdateArgs>(
      args: SelectSubset<T, userprofileUpdateArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Userprofiles.
     * @param {userprofileDeleteManyArgs} args - Arguments to filter Userprofiles to delete.
     * @example
     * // Delete a few Userprofiles
     * const { count } = await prisma.userprofile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userprofileDeleteManyArgs>(
      args?: SelectSubset<T, userprofileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userprofileUpdateManyArgs>(
      args: SelectSubset<T, userprofileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles and returns the data updated in the database.
     * @param {userprofileUpdateManyAndReturnArgs} args - Arguments to update many Userprofiles.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Userprofiles and only return the `profile_id`
     * const userprofileWithProfile_idOnly = await prisma.userprofile.updateManyAndReturn({
     *   select: { profile_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userprofileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, userprofileUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Userprofile.
     * @param {userprofileUpsertArgs} args - Arguments to update or create a Userprofile.
     * @example
     * // Update or create a Userprofile
     * const userprofile = await prisma.userprofile.upsert({
     *   create: {
     *     // ... data to create a Userprofile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userprofile we want to update
     *   }
     * })
     */
    upsert<T extends userprofileUpsertArgs>(
      args: SelectSubset<T, userprofileUpsertArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileCountArgs} args - Arguments to filter Userprofiles to count.
     * @example
     * // Count the number of Userprofiles
     * const count = await prisma.userprofile.count({
     *   where: {
     *     // ... the filter for the Userprofiles we want to count
     *   }
     * })
     **/
    count<T extends userprofileCountArgs>(
      args?: Subset<T, userprofileCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserprofileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserprofileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserprofileAggregateArgs>(
      args: Subset<T, UserprofileAggregateArgs>
    ): Prisma.PrismaPromise<GetUserprofileAggregateType<T>>

    /**
     * Group by Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userprofileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userprofileGroupByArgs['orderBy'] }
        : { orderBy?: userprofileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, userprofileGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetUserprofileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the userprofile model
     */
    readonly fields: userprofileFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for userprofile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userprofileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    User<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the userprofile model
   */
  interface userprofileFieldRefs {
    readonly profile_id: FieldRef<'userprofile', 'Int'>
    readonly user_id: FieldRef<'userprofile', 'Int'>
    readonly first_name: FieldRef<'userprofile', 'String'>
    readonly last_name: FieldRef<'userprofile', 'String'>
    readonly created_at: FieldRef<'userprofile', 'DateTime'>
    readonly updated_at: FieldRef<'userprofile', 'DateTime'>
    readonly exercise_duration: FieldRef<'userprofile', 'String'>
    readonly history: FieldRef<'userprofile', 'String[]'>
  }

  // Custom InputTypes
  /**
   * userprofile findUnique
   */
  export type userprofileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findUniqueOrThrow
   */
  export type userprofileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findFirst
   */
  export type userprofileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userprofiles to fetch.
     */
    orderBy?:
      | userprofileOrderByWithRelationInput
      | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findFirstOrThrow
   */
  export type userprofileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userprofiles to fetch.
     */
    orderBy?:
      | userprofileOrderByWithRelationInput
      | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findMany
   */
  export type userprofileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofiles to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userprofiles to fetch.
     */
    orderBy?:
      | userprofileOrderByWithRelationInput
      | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userprofiles.
     */
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile create
   */
  export type userprofileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to create a userprofile.
     */
    data: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
  }

  /**
   * userprofile createMany
   */
  export type userprofileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userprofile createManyAndReturn
   */
  export type userprofileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userprofile update
   */
  export type userprofileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to update a userprofile.
     */
    data: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
    /**
     * Choose, which userprofile to update.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile updateMany
   */
  export type userprofileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update userprofiles.
     */
    data: XOR<
      userprofileUpdateManyMutationInput,
      userprofileUncheckedUpdateManyInput
    >
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to update.
     */
    limit?: number
  }

  /**
   * userprofile updateManyAndReturn
   */
  export type userprofileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * The data used to update userprofiles.
     */
    data: XOR<
      userprofileUpdateManyMutationInput,
      userprofileUncheckedUpdateManyInput
    >
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userprofile upsert
   */
  export type userprofileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The filter to search for the userprofile to update in case it exists.
     */
    where: userprofileWhereUniqueInput
    /**
     * In case the userprofile found by the `where` argument doesn't exist, create a new userprofile with this data.
     */
    create: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
    /**
     * In case the userprofile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
  }

  /**
   * userprofile delete
   */
  export type userprofileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter which userprofile to delete.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile deleteMany
   */
  export type userprofileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which userprofiles to delete
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to delete.
     */
    limit?: number
  }

  /**
   * userprofile without action
   */
  export type userprofileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
  }

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    username: string
    email: string
    password: string
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean
      username?: boolean
      email?: boolean
      password?: boolean
      is_verified?: boolean
      created_at?: boolean
      updated_at?: boolean
      mission?: boolean | User$missionArgs<ExtArgs>
      sessions?: boolean | User$sessionsArgs<ExtArgs>
      usermissioncompletion?: boolean | User$usermissioncompletionArgs<ExtArgs>
      userprofile?: boolean | User$userprofileArgs<ExtArgs>
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean
      username?: boolean
      email?: boolean
      password?: boolean
      is_verified?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean
      username?: boolean
      email?: boolean
      password?: boolean
      is_verified?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'user_id'
    | 'username'
    | 'email'
    | 'password'
    | 'is_verified'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['user']
  >
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | User$missionArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    usermissioncompletion?: boolean | User$usermissioncompletionArgs<ExtArgs>
    userprofile?: boolean | User$userprofileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User'
    objects: {
      mission: Prisma.$missionPayload<ExtArgs>[]
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      usermissioncompletion: Prisma.$usermissioncompletionPayload<ExtArgs>[]
      userprofile: Prisma.$userprofilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: number
        username: string
        email: string
        password: string
        is_verified: boolean | null
        created_at: Date | null
        updated_at: Date | null
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User']
      meta: { name: 'User' }
    }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    mission<T extends User$missionArgs<ExtArgs> = {}>(
      args?: Subset<T, User$missionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$missionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$sessionsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    usermissioncompletion<
      T extends User$usermissioncompletionArgs<ExtArgs> = {},
    >(
      args?: Subset<T, User$usermissioncompletionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$usermissioncompletionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    userprofile<T extends User$userprofileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$userprofileArgs<ExtArgs>>
    ): Prisma__userprofileClient<
      $Result.GetResult<
        Prisma.$userprofilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<'User', 'Int'>
    readonly username: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly is_verified: FieldRef<'User', 'Boolean'>
    readonly created_at: FieldRef<'User', 'DateTime'>
    readonly updated_at: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mission
   */
  export type User$missionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    where?: missionWhereInput
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    cursor?: missionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?:
      | sessionsOrderByWithRelationInput
      | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * User.usermissioncompletion
   */
  export type User$usermissioncompletionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    where?: usermissioncompletionWhereInput
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    cursor?: usermissioncompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | UsermissioncompletionScalarFieldEnum
      | UsermissioncompletionScalarFieldEnum[]
  }

  /**
   * User.userprofile
   */
  export type User$userprofileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    where?: userprofileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }

  /**
   * Model mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    mission_id: number | null
    creator_id: number | null
    timespan: number | null
  }

  export type MissionSumAggregateOutputType = {
    mission_id: number | null
    creator_id: number | null
    timespan: number | null
  }

  export type MissionMinAggregateOutputType = {
    mission_id: number | null
    creator_id: number | null
    category_id: string | null
    mission_text: string | null
    visibility: $Enums.visibility | null
    is_community: boolean | null
    timespan: number | null
    created_at: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    mission_id: number | null
    creator_id: number | null
    category_id: string | null
    mission_text: string | null
    visibility: $Enums.visibility | null
    is_community: boolean | null
    timespan: number | null
    created_at: Date | null
  }

  export type MissionCountAggregateOutputType = {
    mission_id: number
    creator_id: number
    category_id: number
    mission_text: number
    visibility: number
    is_community: number
    timespan: number
    created_at: number
    _all: number
  }

  export type MissionAvgAggregateInputType = {
    mission_id?: true
    creator_id?: true
    timespan?: true
  }

  export type MissionSumAggregateInputType = {
    mission_id?: true
    creator_id?: true
    timespan?: true
  }

  export type MissionMinAggregateInputType = {
    mission_id?: true
    creator_id?: true
    category_id?: true
    mission_text?: true
    visibility?: true
    is_community?: true
    timespan?: true
    created_at?: true
  }

  export type MissionMaxAggregateInputType = {
    mission_id?: true
    creator_id?: true
    category_id?: true
    mission_text?: true
    visibility?: true
    is_community?: true
    timespan?: true
    created_at?: true
  }

  export type MissionCountAggregateInputType = {
    mission_id?: true
    creator_id?: true
    category_id?: true
    mission_text?: true
    visibility?: true
    is_community?: true
    timespan?: true
    created_at?: true
    _all?: true
  }

  export type MissionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which mission to aggregate.
     */
    where?: missionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missions to fetch.
     */
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: missionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned missions
     **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
    [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }

  export type missionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: missionWhereInput
    orderBy?:
      | missionOrderByWithAggregationInput
      | missionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: missionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    mission_id: number
    creator_id: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community: boolean | null
    timespan: number
    created_at: Date | null
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends missionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MissionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MissionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >

  export type missionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      mission_id?: boolean
      creator_id?: boolean
      category_id?: boolean
      mission_text?: boolean
      visibility?: boolean
      is_community?: boolean
      timespan?: boolean
      created_at?: boolean
      missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
      usermissioncompletion?:
        | boolean
        | mission$usermissioncompletionArgs<ExtArgs>
      _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['mission']
  >

  export type missionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      mission_id?: boolean
      creator_id?: boolean
      category_id?: boolean
      mission_text?: boolean
      visibility?: boolean
      is_community?: boolean
      timespan?: boolean
      created_at?: boolean
      missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['mission']
  >

  export type missionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      mission_id?: boolean
      creator_id?: boolean
      category_id?: boolean
      mission_text?: boolean
      visibility?: boolean
      is_community?: boolean
      timespan?: boolean
      created_at?: boolean
      missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['mission']
  >

  export type missionSelectScalar = {
    mission_id?: boolean
    creator_id?: boolean
    category_id?: boolean
    mission_text?: boolean
    visibility?: boolean
    is_community?: boolean
    timespan?: boolean
    created_at?: boolean
  }

  export type missionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'mission_id'
    | 'creator_id'
    | 'category_id'
    | 'mission_text'
    | 'visibility'
    | 'is_community'
    | 'timespan'
    | 'created_at',
    ExtArgs['result']['mission']
  >
  export type missionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    usermissioncompletion?: boolean | mission$usermissioncompletionArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type missionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type missionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    missioncategory?: boolean | missioncategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $missionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'mission'
    objects: {
      missioncategory: Prisma.$missioncategoryPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      usermissioncompletion: Prisma.$usermissioncompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        mission_id: number
        creator_id: number
        category_id: string
        mission_text: string
        visibility: $Enums.visibility
        is_community: boolean | null
        timespan: number
        created_at: Date | null
      },
      ExtArgs['result']['mission']
    >
    composites: {}
  }

  type missionGetPayload<
    S extends boolean | null | undefined | missionDefaultArgs,
  > = $Result.GetResult<Prisma.$missionPayload, S>

  type missionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<missionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionCountAggregateInputType | true
  }

  export interface missionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['mission']
      meta: { name: 'mission' }
    }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {missionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends missionFindUniqueArgs>(
      args: SelectSubset<T, missionFindUniqueArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {missionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends missionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, missionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends missionFindFirstArgs>(
      args?: SelectSubset<T, missionFindFirstArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends missionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, missionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     *
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     *
     * // Only select the `mission_id`
     * const missionWithMission_idOnly = await prisma.mission.findMany({ select: { mission_id: true } })
     *
     */
    findMany<T extends missionFindManyArgs>(
      args?: SelectSubset<T, missionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Mission.
     * @param {missionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     *
     */
    create<T extends missionCreateArgs>(
      args: SelectSubset<T, missionCreateArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Missions.
     * @param {missionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends missionCreateManyArgs>(
      args?: SelectSubset<T, missionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {missionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Missions and only return the `mission_id`
     * const missionWithMission_idOnly = await prisma.mission.createManyAndReturn({
     *   select: { mission_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends missionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, missionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Mission.
     * @param {missionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     *
     */
    delete<T extends missionDeleteArgs>(
      args: SelectSubset<T, missionDeleteArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Mission.
     * @param {missionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends missionUpdateArgs>(
      args: SelectSubset<T, missionUpdateArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Missions.
     * @param {missionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends missionDeleteManyArgs>(
      args?: SelectSubset<T, missionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends missionUpdateManyArgs>(
      args: SelectSubset<T, missionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {missionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Missions and only return the `mission_id`
     * const missionWithMission_idOnly = await prisma.mission.updateManyAndReturn({
     *   select: { mission_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends missionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, missionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Mission.
     * @param {missionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends missionUpsertArgs>(
      args: SelectSubset<T, missionUpsertArgs<ExtArgs>>
    ): Prisma__missionClient<
      $Result.GetResult<
        Prisma.$missionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
     **/
    count<T extends missionCountArgs>(
      args?: Subset<T, missionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MissionAggregateArgs>(
      args: Subset<T, MissionAggregateArgs>
    ): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends missionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: missionGroupByArgs['orderBy'] }
        : { orderBy?: missionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, missionGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetMissionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the mission model
     */
    readonly fields: missionFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__missionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    missioncategory<T extends missioncategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, missioncategoryDefaultArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      | $Result.GetResult<
          Prisma.$missioncategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    User<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    usermissioncompletion<
      T extends mission$usermissioncompletionArgs<ExtArgs> = {},
    >(
      args?: Subset<T, mission$usermissioncompletionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$usermissioncompletionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the mission model
   */
  interface missionFieldRefs {
    readonly mission_id: FieldRef<'mission', 'Int'>
    readonly creator_id: FieldRef<'mission', 'Int'>
    readonly category_id: FieldRef<'mission', 'String'>
    readonly mission_text: FieldRef<'mission', 'String'>
    readonly visibility: FieldRef<'mission', 'visibility'>
    readonly is_community: FieldRef<'mission', 'Boolean'>
    readonly timespan: FieldRef<'mission', 'Int'>
    readonly created_at: FieldRef<'mission', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * mission findUnique
   */
  export type missionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter, which mission to fetch.
     */
    where: missionWhereUniqueInput
  }

  /**
   * mission findUniqueOrThrow
   */
  export type missionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter, which mission to fetch.
     */
    where: missionWhereUniqueInput
  }

  /**
   * mission findFirst
   */
  export type missionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter, which mission to fetch.
     */
    where?: missionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missions to fetch.
     */
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for missions.
     */
    cursor?: missionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * mission findFirstOrThrow
   */
  export type missionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter, which mission to fetch.
     */
    where?: missionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missions to fetch.
     */
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for missions.
     */
    cursor?: missionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * mission findMany
   */
  export type missionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where?: missionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missions to fetch.
     */
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing missions.
     */
    cursor?: missionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * mission create
   */
  export type missionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * The data needed to create a mission.
     */
    data: XOR<missionCreateInput, missionUncheckedCreateInput>
  }

  /**
   * mission createMany
   */
  export type missionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many missions.
     */
    data: missionCreateManyInput | missionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mission createManyAndReturn
   */
  export type missionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * The data used to create many missions.
     */
    data: missionCreateManyInput | missionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mission update
   */
  export type missionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * The data needed to update a mission.
     */
    data: XOR<missionUpdateInput, missionUncheckedUpdateInput>
    /**
     * Choose, which mission to update.
     */
    where: missionWhereUniqueInput
  }

  /**
   * mission updateMany
   */
  export type missionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update missions.
     */
    data: XOR<missionUpdateManyMutationInput, missionUncheckedUpdateManyInput>
    /**
     * Filter which missions to update
     */
    where?: missionWhereInput
    /**
     * Limit how many missions to update.
     */
    limit?: number
  }

  /**
   * mission updateManyAndReturn
   */
  export type missionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * The data used to update missions.
     */
    data: XOR<missionUpdateManyMutationInput, missionUncheckedUpdateManyInput>
    /**
     * Filter which missions to update
     */
    where?: missionWhereInput
    /**
     * Limit how many missions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mission upsert
   */
  export type missionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * The filter to search for the mission to update in case it exists.
     */
    where: missionWhereUniqueInput
    /**
     * In case the mission found by the `where` argument doesn't exist, create a new mission with this data.
     */
    create: XOR<missionCreateInput, missionUncheckedCreateInput>
    /**
     * In case the mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<missionUpdateInput, missionUncheckedUpdateInput>
  }

  /**
   * mission delete
   */
  export type missionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    /**
     * Filter which mission to delete.
     */
    where: missionWhereUniqueInput
  }

  /**
   * mission deleteMany
   */
  export type missionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which missions to delete
     */
    where?: missionWhereInput
    /**
     * Limit how many missions to delete.
     */
    limit?: number
  }

  /**
   * mission.usermissioncompletion
   */
  export type mission$usermissioncompletionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    where?: usermissioncompletionWhereInput
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    cursor?: usermissioncompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | UsermissioncompletionScalarFieldEnum
      | UsermissioncompletionScalarFieldEnum[]
  }

  /**
   * mission without action
   */
  export type missionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
  }

  /**
   * Model missioncategory
   */

  export type AggregateMissioncategory = {
    _count: MissioncategoryCountAggregateOutputType | null
    _min: MissioncategoryMinAggregateOutputType | null
    _max: MissioncategoryMaxAggregateOutputType | null
  }

  export type MissioncategoryMinAggregateOutputType = {
    category_id: string | null
    description: string | null
  }

  export type MissioncategoryMaxAggregateOutputType = {
    category_id: string | null
    description: string | null
  }

  export type MissioncategoryCountAggregateOutputType = {
    category_id: number
    description: number
    _all: number
  }

  export type MissioncategoryMinAggregateInputType = {
    category_id?: true
    description?: true
  }

  export type MissioncategoryMaxAggregateInputType = {
    category_id?: true
    description?: true
  }

  export type MissioncategoryCountAggregateInputType = {
    category_id?: true
    description?: true
    _all?: true
  }

  export type MissioncategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which missioncategory to aggregate.
     */
    where?: missioncategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missioncategories to fetch.
     */
    orderBy?:
      | missioncategoryOrderByWithRelationInput
      | missioncategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: missioncategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missioncategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missioncategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned missioncategories
     **/
    _count?: true | MissioncategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MissioncategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MissioncategoryMaxAggregateInputType
  }

  export type GetMissioncategoryAggregateType<
    T extends MissioncategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMissioncategory]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissioncategory[P]>
      : GetScalarType<T[P], AggregateMissioncategory[P]>
  }

  export type missioncategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: missioncategoryWhereInput
    orderBy?:
      | missioncategoryOrderByWithAggregationInput
      | missioncategoryOrderByWithAggregationInput[]
    by: MissioncategoryScalarFieldEnum[] | MissioncategoryScalarFieldEnum
    having?: missioncategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissioncategoryCountAggregateInputType | true
    _min?: MissioncategoryMinAggregateInputType
    _max?: MissioncategoryMaxAggregateInputType
  }

  export type MissioncategoryGroupByOutputType = {
    category_id: string
    description: string | null
    _count: MissioncategoryCountAggregateOutputType | null
    _min: MissioncategoryMinAggregateOutputType | null
    _max: MissioncategoryMaxAggregateOutputType | null
  }

  type GetMissioncategoryGroupByPayload<T extends missioncategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MissioncategoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof MissioncategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissioncategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MissioncategoryGroupByOutputType[P]>
        }
      >
    >

  export type missioncategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      category_id?: boolean
      description?: boolean
      mission?: boolean | missioncategory$missionArgs<ExtArgs>
      _count?: boolean | MissioncategoryCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['missioncategory']
  >

  export type missioncategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      category_id?: boolean
      description?: boolean
    },
    ExtArgs['result']['missioncategory']
  >

  export type missioncategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      category_id?: boolean
      description?: boolean
    },
    ExtArgs['result']['missioncategory']
  >

  export type missioncategorySelectScalar = {
    category_id?: boolean
    description?: boolean
  }

  export type missioncategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'category_id' | 'description',
    ExtArgs['result']['missioncategory']
  >
  export type missioncategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | missioncategory$missionArgs<ExtArgs>
    _count?: boolean | MissioncategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type missioncategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type missioncategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $missioncategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'missioncategory'
    objects: {
      mission: Prisma.$missionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        category_id: string
        description: string | null
      },
      ExtArgs['result']['missioncategory']
    >
    composites: {}
  }

  type missioncategoryGetPayload<
    S extends boolean | null | undefined | missioncategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$missioncategoryPayload, S>

  type missioncategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    missioncategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MissioncategoryCountAggregateInputType | true
  }

  export interface missioncategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['missioncategory']
      meta: { name: 'missioncategory' }
    }
    /**
     * Find zero or one Missioncategory that matches the filter.
     * @param {missioncategoryFindUniqueArgs} args - Arguments to find a Missioncategory
     * @example
     * // Get one Missioncategory
     * const missioncategory = await prisma.missioncategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends missioncategoryFindUniqueArgs>(
      args: SelectSubset<T, missioncategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Missioncategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {missioncategoryFindUniqueOrThrowArgs} args - Arguments to find a Missioncategory
     * @example
     * // Get one Missioncategory
     * const missioncategory = await prisma.missioncategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends missioncategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, missioncategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Missioncategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryFindFirstArgs} args - Arguments to find a Missioncategory
     * @example
     * // Get one Missioncategory
     * const missioncategory = await prisma.missioncategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends missioncategoryFindFirstArgs>(
      args?: SelectSubset<T, missioncategoryFindFirstArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Missioncategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryFindFirstOrThrowArgs} args - Arguments to find a Missioncategory
     * @example
     * // Get one Missioncategory
     * const missioncategory = await prisma.missioncategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends missioncategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, missioncategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Missioncategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missioncategories
     * const missioncategories = await prisma.missioncategory.findMany()
     *
     * // Get first 10 Missioncategories
     * const missioncategories = await prisma.missioncategory.findMany({ take: 10 })
     *
     * // Only select the `category_id`
     * const missioncategoryWithCategory_idOnly = await prisma.missioncategory.findMany({ select: { category_id: true } })
     *
     */
    findMany<T extends missioncategoryFindManyArgs>(
      args?: SelectSubset<T, missioncategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Missioncategory.
     * @param {missioncategoryCreateArgs} args - Arguments to create a Missioncategory.
     * @example
     * // Create one Missioncategory
     * const Missioncategory = await prisma.missioncategory.create({
     *   data: {
     *     // ... data to create a Missioncategory
     *   }
     * })
     *
     */
    create<T extends missioncategoryCreateArgs>(
      args: SelectSubset<T, missioncategoryCreateArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Missioncategories.
     * @param {missioncategoryCreateManyArgs} args - Arguments to create many Missioncategories.
     * @example
     * // Create many Missioncategories
     * const missioncategory = await prisma.missioncategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends missioncategoryCreateManyArgs>(
      args?: SelectSubset<T, missioncategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missioncategories and returns the data saved in the database.
     * @param {missioncategoryCreateManyAndReturnArgs} args - Arguments to create many Missioncategories.
     * @example
     * // Create many Missioncategories
     * const missioncategory = await prisma.missioncategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Missioncategories and only return the `category_id`
     * const missioncategoryWithCategory_idOnly = await prisma.missioncategory.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends missioncategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, missioncategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Missioncategory.
     * @param {missioncategoryDeleteArgs} args - Arguments to delete one Missioncategory.
     * @example
     * // Delete one Missioncategory
     * const Missioncategory = await prisma.missioncategory.delete({
     *   where: {
     *     // ... filter to delete one Missioncategory
     *   }
     * })
     *
     */
    delete<T extends missioncategoryDeleteArgs>(
      args: SelectSubset<T, missioncategoryDeleteArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Missioncategory.
     * @param {missioncategoryUpdateArgs} args - Arguments to update one Missioncategory.
     * @example
     * // Update one Missioncategory
     * const missioncategory = await prisma.missioncategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends missioncategoryUpdateArgs>(
      args: SelectSubset<T, missioncategoryUpdateArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Missioncategories.
     * @param {missioncategoryDeleteManyArgs} args - Arguments to filter Missioncategories to delete.
     * @example
     * // Delete a few Missioncategories
     * const { count } = await prisma.missioncategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends missioncategoryDeleteManyArgs>(
      args?: SelectSubset<T, missioncategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missioncategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missioncategories
     * const missioncategory = await prisma.missioncategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends missioncategoryUpdateManyArgs>(
      args: SelectSubset<T, missioncategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missioncategories and returns the data updated in the database.
     * @param {missioncategoryUpdateManyAndReturnArgs} args - Arguments to update many Missioncategories.
     * @example
     * // Update many Missioncategories
     * const missioncategory = await prisma.missioncategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Missioncategories and only return the `category_id`
     * const missioncategoryWithCategory_idOnly = await prisma.missioncategory.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends missioncategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, missioncategoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Missioncategory.
     * @param {missioncategoryUpsertArgs} args - Arguments to update or create a Missioncategory.
     * @example
     * // Update or create a Missioncategory
     * const missioncategory = await prisma.missioncategory.upsert({
     *   create: {
     *     // ... data to create a Missioncategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missioncategory we want to update
     *   }
     * })
     */
    upsert<T extends missioncategoryUpsertArgs>(
      args: SelectSubset<T, missioncategoryUpsertArgs<ExtArgs>>
    ): Prisma__missioncategoryClient<
      $Result.GetResult<
        Prisma.$missioncategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Missioncategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryCountArgs} args - Arguments to filter Missioncategories to count.
     * @example
     * // Count the number of Missioncategories
     * const count = await prisma.missioncategory.count({
     *   where: {
     *     // ... the filter for the Missioncategories we want to count
     *   }
     * })
     **/
    count<T extends missioncategoryCountArgs>(
      args?: Subset<T, missioncategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissioncategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missioncategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissioncategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MissioncategoryAggregateArgs>(
      args: Subset<T, MissioncategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetMissioncategoryAggregateType<T>>

    /**
     * Group by Missioncategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missioncategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends missioncategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: missioncategoryGroupByArgs['orderBy'] }
        : { orderBy?: missioncategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, missioncategoryGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetMissioncategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the missioncategory model
     */
    readonly fields: missioncategoryFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for missioncategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__missioncategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    mission<T extends missioncategory$missionArgs<ExtArgs> = {}>(
      args?: Subset<T, missioncategory$missionArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$missionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the missioncategory model
   */
  interface missioncategoryFieldRefs {
    readonly category_id: FieldRef<'missioncategory', 'String'>
    readonly description: FieldRef<'missioncategory', 'String'>
  }

  // Custom InputTypes
  /**
   * missioncategory findUnique
   */
  export type missioncategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter, which missioncategory to fetch.
     */
    where: missioncategoryWhereUniqueInput
  }

  /**
   * missioncategory findUniqueOrThrow
   */
  export type missioncategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter, which missioncategory to fetch.
     */
    where: missioncategoryWhereUniqueInput
  }

  /**
   * missioncategory findFirst
   */
  export type missioncategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter, which missioncategory to fetch.
     */
    where?: missioncategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missioncategories to fetch.
     */
    orderBy?:
      | missioncategoryOrderByWithRelationInput
      | missioncategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for missioncategories.
     */
    cursor?: missioncategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missioncategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missioncategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of missioncategories.
     */
    distinct?: MissioncategoryScalarFieldEnum | MissioncategoryScalarFieldEnum[]
  }

  /**
   * missioncategory findFirstOrThrow
   */
  export type missioncategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter, which missioncategory to fetch.
     */
    where?: missioncategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missioncategories to fetch.
     */
    orderBy?:
      | missioncategoryOrderByWithRelationInput
      | missioncategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for missioncategories.
     */
    cursor?: missioncategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missioncategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missioncategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of missioncategories.
     */
    distinct?: MissioncategoryScalarFieldEnum | MissioncategoryScalarFieldEnum[]
  }

  /**
   * missioncategory findMany
   */
  export type missioncategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter, which missioncategories to fetch.
     */
    where?: missioncategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of missioncategories to fetch.
     */
    orderBy?:
      | missioncategoryOrderByWithRelationInput
      | missioncategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing missioncategories.
     */
    cursor?: missioncategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` missioncategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` missioncategories.
     */
    skip?: number
    distinct?: MissioncategoryScalarFieldEnum | MissioncategoryScalarFieldEnum[]
  }

  /**
   * missioncategory create
   */
  export type missioncategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a missioncategory.
     */
    data: XOR<missioncategoryCreateInput, missioncategoryUncheckedCreateInput>
  }

  /**
   * missioncategory createMany
   */
  export type missioncategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many missioncategories.
     */
    data: missioncategoryCreateManyInput | missioncategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * missioncategory createManyAndReturn
   */
  export type missioncategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * The data used to create many missioncategories.
     */
    data: missioncategoryCreateManyInput | missioncategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * missioncategory update
   */
  export type missioncategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a missioncategory.
     */
    data: XOR<missioncategoryUpdateInput, missioncategoryUncheckedUpdateInput>
    /**
     * Choose, which missioncategory to update.
     */
    where: missioncategoryWhereUniqueInput
  }

  /**
   * missioncategory updateMany
   */
  export type missioncategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update missioncategories.
     */
    data: XOR<
      missioncategoryUpdateManyMutationInput,
      missioncategoryUncheckedUpdateManyInput
    >
    /**
     * Filter which missioncategories to update
     */
    where?: missioncategoryWhereInput
    /**
     * Limit how many missioncategories to update.
     */
    limit?: number
  }

  /**
   * missioncategory updateManyAndReturn
   */
  export type missioncategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * The data used to update missioncategories.
     */
    data: XOR<
      missioncategoryUpdateManyMutationInput,
      missioncategoryUncheckedUpdateManyInput
    >
    /**
     * Filter which missioncategories to update
     */
    where?: missioncategoryWhereInput
    /**
     * Limit how many missioncategories to update.
     */
    limit?: number
  }

  /**
   * missioncategory upsert
   */
  export type missioncategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the missioncategory to update in case it exists.
     */
    where: missioncategoryWhereUniqueInput
    /**
     * In case the missioncategory found by the `where` argument doesn't exist, create a new missioncategory with this data.
     */
    create: XOR<missioncategoryCreateInput, missioncategoryUncheckedCreateInput>
    /**
     * In case the missioncategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<missioncategoryUpdateInput, missioncategoryUncheckedUpdateInput>
  }

  /**
   * missioncategory delete
   */
  export type missioncategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
    /**
     * Filter which missioncategory to delete.
     */
    where: missioncategoryWhereUniqueInput
  }

  /**
   * missioncategory deleteMany
   */
  export type missioncategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which missioncategories to delete
     */
    where?: missioncategoryWhereInput
    /**
     * Limit how many missioncategories to delete.
     */
    limit?: number
  }

  /**
   * missioncategory.mission
   */
  export type missioncategory$missionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the mission
     */
    select?: missionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mission
     */
    omit?: missionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionInclude<ExtArgs> | null
    where?: missionWhereInput
    orderBy?:
      | missionOrderByWithRelationInput
      | missionOrderByWithRelationInput[]
    cursor?: missionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * missioncategory without action
   */
  export type missioncategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the missioncategory
     */
    select?: missioncategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the missioncategory
     */
    omit?: missioncategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missioncategoryInclude<ExtArgs> | null
  }

  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    session_id: number | null
    user_id: number | null
  }

  export type SessionsSumAggregateOutputType = {
    session_id: number | null
    user_id: number | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: number | null
    user_id: number | null
    access_token: string | null
    is_active: boolean | null
    login_at: Date | null
    logout_at: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: number | null
    user_id: number | null
    access_token: string | null
    is_active: boolean | null
    login_at: Date | null
    logout_at: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    user_id: number
    access_token: number
    is_active: number
    login_at: number
    logout_at: number
    _all: number
  }

  export type SessionsAvgAggregateInputType = {
    session_id?: true
    user_id?: true
  }

  export type SessionsSumAggregateInputType = {
    session_id?: true
    user_id?: true
  }

  export type SessionsMinAggregateInputType = {
    session_id?: true
    user_id?: true
    access_token?: true
    is_active?: true
    login_at?: true
    logout_at?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    user_id?: true
    access_token?: true
    is_active?: true
    login_at?: true
    logout_at?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    user_id?: true
    access_token?: true
    is_active?: true
    login_at?: true
    logout_at?: true
    _all?: true
  }

  export type SessionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sessions to fetch.
     */
    orderBy?:
      | sessionsOrderByWithRelationInput
      | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sessions
     **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
    [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }

  export type sessionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sessionsWhereInput
    orderBy?:
      | sessionsOrderByWithAggregationInput
      | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: number
    user_id: number
    access_token: string | null
    is_active: boolean | null
    login_at: Date | null
    logout_at: Date | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SessionsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SessionsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >

  export type sessionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      session_id?: boolean
      user_id?: boolean
      access_token?: boolean
      is_active?: boolean
      login_at?: boolean
      logout_at?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['sessions']
  >

  export type sessionsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      session_id?: boolean
      user_id?: boolean
      access_token?: boolean
      is_active?: boolean
      login_at?: boolean
      logout_at?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['sessions']
  >

  export type sessionsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      session_id?: boolean
      user_id?: boolean
      access_token?: boolean
      is_active?: boolean
      login_at?: boolean
      logout_at?: boolean
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['sessions']
  >

  export type sessionsSelectScalar = {
    session_id?: boolean
    user_id?: boolean
    access_token?: boolean
    is_active?: boolean
    login_at?: boolean
    logout_at?: boolean
  }

  export type sessionsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'session_id'
    | 'user_id'
    | 'access_token'
    | 'is_active'
    | 'login_at'
    | 'logout_at',
    ExtArgs['result']['sessions']
  >
  export type sessionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $sessionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'sessions'
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        session_id: number
        user_id: number
        access_token: string | null
        is_active: boolean | null
        login_at: Date | null
        logout_at: Date | null
      },
      ExtArgs['result']['sessions']
    >
    composites: {}
  }

  type sessionsGetPayload<
    S extends boolean | null | undefined | sessionsDefaultArgs,
  > = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionsCountAggregateInputType | true
  }

  export interface sessionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['sessions']
      meta: { name: 'sessions' }
    }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(
      args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(
      args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     *
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     *
     */
    findMany<T extends sessionsFindManyArgs>(
      args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     *
     */
    create<T extends sessionsCreateArgs>(
      args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends sessionsCreateManyArgs>(
      args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     *
     */
    delete<T extends sessionsDeleteArgs>(
      args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends sessionsUpdateArgs>(
      args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends sessionsDeleteManyArgs>(
      args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends sessionsUpdateManyArgs>(
      args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { session_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(
      args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>
    ): Prisma__sessionsClient<
      $Result.GetResult<
        Prisma.$sessionsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SessionsAggregateArgs>(
      args: Subset<T, SessionsAggregateArgs>
    ): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSessionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the sessions model
     */
    readonly fields: sessionsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    User<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly session_id: FieldRef<'sessions', 'Int'>
    readonly user_id: FieldRef<'sessions', 'Int'>
    readonly access_token: FieldRef<'sessions', 'String'>
    readonly is_active: FieldRef<'sessions', 'Boolean'>
    readonly login_at: FieldRef<'sessions', 'DateTime'>
    readonly logout_at: FieldRef<'sessions', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sessions to fetch.
     */
    orderBy?:
      | sessionsOrderByWithRelationInput
      | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sessions to fetch.
     */
    orderBy?:
      | sessionsOrderByWithRelationInput
      | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sessions to fetch.
     */
    orderBy?:
      | sessionsOrderByWithRelationInput
      | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }

  /**
   * Model usermissioncompletion
   */

  export type AggregateUsermissioncompletion = {
    _count: UsermissioncompletionCountAggregateOutputType | null
    _avg: UsermissioncompletionAvgAggregateOutputType | null
    _sum: UsermissioncompletionSumAggregateOutputType | null
    _min: UsermissioncompletionMinAggregateOutputType | null
    _max: UsermissioncompletionMaxAggregateOutputType | null
  }

  export type UsermissioncompletionAvgAggregateOutputType = {
    missioncompletion_id: number | null
    user_id: number | null
    mission_id: number | null
  }

  export type UsermissioncompletionSumAggregateOutputType = {
    missioncompletion_id: number | null
    user_id: number | null
    mission_id: number | null
  }

  export type UsermissioncompletionMinAggregateOutputType = {
    missioncompletion_id: number | null
    user_id: number | null
    mission_id: number | null
    completed: boolean | null
    started_at: Date | null
    ended_at: Date | null
  }

  export type UsermissioncompletionMaxAggregateOutputType = {
    missioncompletion_id: number | null
    user_id: number | null
    mission_id: number | null
    completed: boolean | null
    started_at: Date | null
    ended_at: Date | null
  }

  export type UsermissioncompletionCountAggregateOutputType = {
    missioncompletion_id: number
    user_id: number
    mission_id: number
    completed: number
    started_at: number
    ended_at: number
    _all: number
  }

  export type UsermissioncompletionAvgAggregateInputType = {
    missioncompletion_id?: true
    user_id?: true
    mission_id?: true
  }

  export type UsermissioncompletionSumAggregateInputType = {
    missioncompletion_id?: true
    user_id?: true
    mission_id?: true
  }

  export type UsermissioncompletionMinAggregateInputType = {
    missioncompletion_id?: true
    user_id?: true
    mission_id?: true
    completed?: true
    started_at?: true
    ended_at?: true
  }

  export type UsermissioncompletionMaxAggregateInputType = {
    missioncompletion_id?: true
    user_id?: true
    mission_id?: true
    completed?: true
    started_at?: true
    ended_at?: true
  }

  export type UsermissioncompletionCountAggregateInputType = {
    missioncompletion_id?: true
    user_id?: true
    mission_id?: true
    completed?: true
    started_at?: true
    ended_at?: true
    _all?: true
  }

  export type UsermissioncompletionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which usermissioncompletion to aggregate.
     */
    where?: usermissioncompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usermissioncompletions to fetch.
     */
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: usermissioncompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usermissioncompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usermissioncompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned usermissioncompletions
     **/
    _count?: true | UsermissioncompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsermissioncompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsermissioncompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsermissioncompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsermissioncompletionMaxAggregateInputType
  }

  export type GetUsermissioncompletionAggregateType<
    T extends UsermissioncompletionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUsermissioncompletion]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsermissioncompletion[P]>
      : GetScalarType<T[P], AggregateUsermissioncompletion[P]>
  }

  export type usermissioncompletionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: usermissioncompletionWhereInput
    orderBy?:
      | usermissioncompletionOrderByWithAggregationInput
      | usermissioncompletionOrderByWithAggregationInput[]
    by:
      | UsermissioncompletionScalarFieldEnum[]
      | UsermissioncompletionScalarFieldEnum
    having?: usermissioncompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsermissioncompletionCountAggregateInputType | true
    _avg?: UsermissioncompletionAvgAggregateInputType
    _sum?: UsermissioncompletionSumAggregateInputType
    _min?: UsermissioncompletionMinAggregateInputType
    _max?: UsermissioncompletionMaxAggregateInputType
  }

  export type UsermissioncompletionGroupByOutputType = {
    missioncompletion_id: number
    user_id: number
    mission_id: number
    completed: boolean | null
    started_at: Date | null
    ended_at: Date | null
    _count: UsermissioncompletionCountAggregateOutputType | null
    _avg: UsermissioncompletionAvgAggregateOutputType | null
    _sum: UsermissioncompletionSumAggregateOutputType | null
    _min: UsermissioncompletionMinAggregateOutputType | null
    _max: UsermissioncompletionMaxAggregateOutputType | null
  }

  type GetUsermissioncompletionGroupByPayload<
    T extends usermissioncompletionGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsermissioncompletionGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof UsermissioncompletionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UsermissioncompletionGroupByOutputType[P]>
          : GetScalarType<T[P], UsermissioncompletionGroupByOutputType[P]>
      }
    >
  >

  export type usermissioncompletionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      missioncompletion_id?: boolean
      user_id?: boolean
      mission_id?: boolean
      completed?: boolean
      started_at?: boolean
      ended_at?: boolean
      mission?: boolean | missionDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['usermissioncompletion']
  >

  export type usermissioncompletionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      missioncompletion_id?: boolean
      user_id?: boolean
      mission_id?: boolean
      completed?: boolean
      started_at?: boolean
      ended_at?: boolean
      mission?: boolean | missionDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['usermissioncompletion']
  >

  export type usermissioncompletionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      missioncompletion_id?: boolean
      user_id?: boolean
      mission_id?: boolean
      completed?: boolean
      started_at?: boolean
      ended_at?: boolean
      mission?: boolean | missionDefaultArgs<ExtArgs>
      User?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['usermissioncompletion']
  >

  export type usermissioncompletionSelectScalar = {
    missioncompletion_id?: boolean
    user_id?: boolean
    mission_id?: boolean
    completed?: boolean
    started_at?: boolean
    ended_at?: boolean
  }

  export type usermissioncompletionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'missioncompletion_id'
    | 'user_id'
    | 'mission_id'
    | 'completed'
    | 'started_at'
    | 'ended_at',
    ExtArgs['result']['usermissioncompletion']
  >
  export type usermissioncompletionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | missionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type usermissioncompletionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | missionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type usermissioncompletionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mission?: boolean | missionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $usermissioncompletionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'usermissioncompletion'
    objects: {
      mission: Prisma.$missionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        missioncompletion_id: number
        user_id: number
        mission_id: number
        completed: boolean | null
        started_at: Date | null
        ended_at: Date | null
      },
      ExtArgs['result']['usermissioncompletion']
    >
    composites: {}
  }

  type usermissioncompletionGetPayload<
    S extends boolean | null | undefined | usermissioncompletionDefaultArgs,
  > = $Result.GetResult<Prisma.$usermissioncompletionPayload, S>

  type usermissioncompletionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    usermissioncompletionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UsermissioncompletionCountAggregateInputType | true
  }

  export interface usermissioncompletionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['usermissioncompletion']
      meta: { name: 'usermissioncompletion' }
    }
    /**
     * Find zero or one Usermissioncompletion that matches the filter.
     * @param {usermissioncompletionFindUniqueArgs} args - Arguments to find a Usermissioncompletion
     * @example
     * // Get one Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usermissioncompletionFindUniqueArgs>(
      args: SelectSubset<T, usermissioncompletionFindUniqueArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Usermissioncompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usermissioncompletionFindUniqueOrThrowArgs} args - Arguments to find a Usermissioncompletion
     * @example
     * // Get one Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usermissioncompletionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, usermissioncompletionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Usermissioncompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionFindFirstArgs} args - Arguments to find a Usermissioncompletion
     * @example
     * // Get one Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usermissioncompletionFindFirstArgs>(
      args?: SelectSubset<T, usermissioncompletionFindFirstArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Usermissioncompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionFindFirstOrThrowArgs} args - Arguments to find a Usermissioncompletion
     * @example
     * // Get one Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usermissioncompletionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usermissioncompletionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Usermissioncompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usermissioncompletions
     * const usermissioncompletions = await prisma.usermissioncompletion.findMany()
     *
     * // Get first 10 Usermissioncompletions
     * const usermissioncompletions = await prisma.usermissioncompletion.findMany({ take: 10 })
     *
     * // Only select the `missioncompletion_id`
     * const usermissioncompletionWithMissioncompletion_idOnly = await prisma.usermissioncompletion.findMany({ select: { missioncompletion_id: true } })
     *
     */
    findMany<T extends usermissioncompletionFindManyArgs>(
      args?: SelectSubset<T, usermissioncompletionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Usermissioncompletion.
     * @param {usermissioncompletionCreateArgs} args - Arguments to create a Usermissioncompletion.
     * @example
     * // Create one Usermissioncompletion
     * const Usermissioncompletion = await prisma.usermissioncompletion.create({
     *   data: {
     *     // ... data to create a Usermissioncompletion
     *   }
     * })
     *
     */
    create<T extends usermissioncompletionCreateArgs>(
      args: SelectSubset<T, usermissioncompletionCreateArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Usermissioncompletions.
     * @param {usermissioncompletionCreateManyArgs} args - Arguments to create many Usermissioncompletions.
     * @example
     * // Create many Usermissioncompletions
     * const usermissioncompletion = await prisma.usermissioncompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usermissioncompletionCreateManyArgs>(
      args?: SelectSubset<T, usermissioncompletionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usermissioncompletions and returns the data saved in the database.
     * @param {usermissioncompletionCreateManyAndReturnArgs} args - Arguments to create many Usermissioncompletions.
     * @example
     * // Create many Usermissioncompletions
     * const usermissioncompletion = await prisma.usermissioncompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Usermissioncompletions and only return the `missioncompletion_id`
     * const usermissioncompletionWithMissioncompletion_idOnly = await prisma.usermissioncompletion.createManyAndReturn({
     *   select: { missioncompletion_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usermissioncompletionCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        usermissioncompletionCreateManyAndReturnArgs<ExtArgs>
      >
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Usermissioncompletion.
     * @param {usermissioncompletionDeleteArgs} args - Arguments to delete one Usermissioncompletion.
     * @example
     * // Delete one Usermissioncompletion
     * const Usermissioncompletion = await prisma.usermissioncompletion.delete({
     *   where: {
     *     // ... filter to delete one Usermissioncompletion
     *   }
     * })
     *
     */
    delete<T extends usermissioncompletionDeleteArgs>(
      args: SelectSubset<T, usermissioncompletionDeleteArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Usermissioncompletion.
     * @param {usermissioncompletionUpdateArgs} args - Arguments to update one Usermissioncompletion.
     * @example
     * // Update one Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usermissioncompletionUpdateArgs>(
      args: SelectSubset<T, usermissioncompletionUpdateArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Usermissioncompletions.
     * @param {usermissioncompletionDeleteManyArgs} args - Arguments to filter Usermissioncompletions to delete.
     * @example
     * // Delete a few Usermissioncompletions
     * const { count } = await prisma.usermissioncompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usermissioncompletionDeleteManyArgs>(
      args?: SelectSubset<T, usermissioncompletionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usermissioncompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usermissioncompletions
     * const usermissioncompletion = await prisma.usermissioncompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usermissioncompletionUpdateManyArgs>(
      args: SelectSubset<T, usermissioncompletionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usermissioncompletions and returns the data updated in the database.
     * @param {usermissioncompletionUpdateManyAndReturnArgs} args - Arguments to update many Usermissioncompletions.
     * @example
     * // Update many Usermissioncompletions
     * const usermissioncompletion = await prisma.usermissioncompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Usermissioncompletions and only return the `missioncompletion_id`
     * const usermissioncompletionWithMissioncompletion_idOnly = await prisma.usermissioncompletion.updateManyAndReturn({
     *   select: { missioncompletion_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usermissioncompletionUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        usermissioncompletionUpdateManyAndReturnArgs<ExtArgs>
      >
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Usermissioncompletion.
     * @param {usermissioncompletionUpsertArgs} args - Arguments to update or create a Usermissioncompletion.
     * @example
     * // Update or create a Usermissioncompletion
     * const usermissioncompletion = await prisma.usermissioncompletion.upsert({
     *   create: {
     *     // ... data to create a Usermissioncompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usermissioncompletion we want to update
     *   }
     * })
     */
    upsert<T extends usermissioncompletionUpsertArgs>(
      args: SelectSubset<T, usermissioncompletionUpsertArgs<ExtArgs>>
    ): Prisma__usermissioncompletionClient<
      $Result.GetResult<
        Prisma.$usermissioncompletionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Usermissioncompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionCountArgs} args - Arguments to filter Usermissioncompletions to count.
     * @example
     * // Count the number of Usermissioncompletions
     * const count = await prisma.usermissioncompletion.count({
     *   where: {
     *     // ... the filter for the Usermissioncompletions we want to count
     *   }
     * })
     **/
    count<T extends usermissioncompletionCountArgs>(
      args?: Subset<T, usermissioncompletionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              UsermissioncompletionCountAggregateOutputType
            >
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usermissioncompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsermissioncompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UsermissioncompletionAggregateArgs>(
      args: Subset<T, UsermissioncompletionAggregateArgs>
    ): Prisma.PrismaPromise<GetUsermissioncompletionAggregateType<T>>

    /**
     * Group by Usermissioncompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usermissioncompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends usermissioncompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usermissioncompletionGroupByArgs['orderBy'] }
        : { orderBy?: usermissioncompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<
        T,
        usermissioncompletionGroupByArgs,
        OrderByArg
      > &
        InputErrors
    ): {} extends InputErrors
      ? GetUsermissioncompletionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the usermissioncompletion model
     */
    readonly fields: usermissioncompletionFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for usermissioncompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usermissioncompletionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    mission<T extends missionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, missionDefaultArgs<ExtArgs>>
    ): Prisma__missionClient<
      | $Result.GetResult<
          Prisma.$missionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    User<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the usermissioncompletion model
   */
  interface usermissioncompletionFieldRefs {
    readonly missioncompletion_id: FieldRef<'usermissioncompletion', 'Int'>
    readonly user_id: FieldRef<'usermissioncompletion', 'Int'>
    readonly mission_id: FieldRef<'usermissioncompletion', 'Int'>
    readonly completed: FieldRef<'usermissioncompletion', 'Boolean'>
    readonly started_at: FieldRef<'usermissioncompletion', 'DateTime'>
    readonly ended_at: FieldRef<'usermissioncompletion', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * usermissioncompletion findUnique
   */
  export type usermissioncompletionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter, which usermissioncompletion to fetch.
     */
    where: usermissioncompletionWhereUniqueInput
  }

  /**
   * usermissioncompletion findUniqueOrThrow
   */
  export type usermissioncompletionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter, which usermissioncompletion to fetch.
     */
    where: usermissioncompletionWhereUniqueInput
  }

  /**
   * usermissioncompletion findFirst
   */
  export type usermissioncompletionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter, which usermissioncompletion to fetch.
     */
    where?: usermissioncompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usermissioncompletions to fetch.
     */
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usermissioncompletions.
     */
    cursor?: usermissioncompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usermissioncompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usermissioncompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usermissioncompletions.
     */
    distinct?:
      | UsermissioncompletionScalarFieldEnum
      | UsermissioncompletionScalarFieldEnum[]
  }

  /**
   * usermissioncompletion findFirstOrThrow
   */
  export type usermissioncompletionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter, which usermissioncompletion to fetch.
     */
    where?: usermissioncompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usermissioncompletions to fetch.
     */
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usermissioncompletions.
     */
    cursor?: usermissioncompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usermissioncompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usermissioncompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usermissioncompletions.
     */
    distinct?:
      | UsermissioncompletionScalarFieldEnum
      | UsermissioncompletionScalarFieldEnum[]
  }

  /**
   * usermissioncompletion findMany
   */
  export type usermissioncompletionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter, which usermissioncompletions to fetch.
     */
    where?: usermissioncompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usermissioncompletions to fetch.
     */
    orderBy?:
      | usermissioncompletionOrderByWithRelationInput
      | usermissioncompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing usermissioncompletions.
     */
    cursor?: usermissioncompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usermissioncompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usermissioncompletions.
     */
    skip?: number
    distinct?:
      | UsermissioncompletionScalarFieldEnum
      | UsermissioncompletionScalarFieldEnum[]
  }

  /**
   * usermissioncompletion create
   */
  export type usermissioncompletionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a usermissioncompletion.
     */
    data: XOR<
      usermissioncompletionCreateInput,
      usermissioncompletionUncheckedCreateInput
    >
  }

  /**
   * usermissioncompletion createMany
   */
  export type usermissioncompletionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many usermissioncompletions.
     */
    data:
      | usermissioncompletionCreateManyInput
      | usermissioncompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usermissioncompletion createManyAndReturn
   */
  export type usermissioncompletionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * The data used to create many usermissioncompletions.
     */
    data:
      | usermissioncompletionCreateManyInput
      | usermissioncompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usermissioncompletion update
   */
  export type usermissioncompletionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a usermissioncompletion.
     */
    data: XOR<
      usermissioncompletionUpdateInput,
      usermissioncompletionUncheckedUpdateInput
    >
    /**
     * Choose, which usermissioncompletion to update.
     */
    where: usermissioncompletionWhereUniqueInput
  }

  /**
   * usermissioncompletion updateMany
   */
  export type usermissioncompletionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update usermissioncompletions.
     */
    data: XOR<
      usermissioncompletionUpdateManyMutationInput,
      usermissioncompletionUncheckedUpdateManyInput
    >
    /**
     * Filter which usermissioncompletions to update
     */
    where?: usermissioncompletionWhereInput
    /**
     * Limit how many usermissioncompletions to update.
     */
    limit?: number
  }

  /**
   * usermissioncompletion updateManyAndReturn
   */
  export type usermissioncompletionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * The data used to update usermissioncompletions.
     */
    data: XOR<
      usermissioncompletionUpdateManyMutationInput,
      usermissioncompletionUncheckedUpdateManyInput
    >
    /**
     * Filter which usermissioncompletions to update
     */
    where?: usermissioncompletionWhereInput
    /**
     * Limit how many usermissioncompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usermissioncompletion upsert
   */
  export type usermissioncompletionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the usermissioncompletion to update in case it exists.
     */
    where: usermissioncompletionWhereUniqueInput
    /**
     * In case the usermissioncompletion found by the `where` argument doesn't exist, create a new usermissioncompletion with this data.
     */
    create: XOR<
      usermissioncompletionCreateInput,
      usermissioncompletionUncheckedCreateInput
    >
    /**
     * In case the usermissioncompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      usermissioncompletionUpdateInput,
      usermissioncompletionUncheckedUpdateInput
    >
  }

  /**
   * usermissioncompletion delete
   */
  export type usermissioncompletionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
    /**
     * Filter which usermissioncompletion to delete.
     */
    where: usermissioncompletionWhereUniqueInput
  }

  /**
   * usermissioncompletion deleteMany
   */
  export type usermissioncompletionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which usermissioncompletions to delete
     */
    where?: usermissioncompletionWhereInput
    /**
     * Limit how many usermissioncompletions to delete.
     */
    limit?: number
  }

  /**
   * usermissioncompletion without action
   */
  export type usermissioncompletionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the usermissioncompletion
     */
    select?: usermissioncompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usermissioncompletion
     */
    omit?: usermissioncompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usermissioncompletionInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserprofileScalarFieldEnum: {
    profile_id: 'profile_id'
    user_id: 'user_id'
    first_name: 'first_name'
    last_name: 'last_name'
    created_at: 'created_at'
    updated_at: 'updated_at'
    exercise_duration: 'exercise_duration'
    history: 'history'
  }

  export type UserprofileScalarFieldEnum =
    (typeof UserprofileScalarFieldEnum)[keyof typeof UserprofileScalarFieldEnum]

  export const UserScalarFieldEnum: {
    user_id: 'user_id'
    username: 'username'
    email: 'email'
    password: 'password'
    is_verified: 'is_verified'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const MissionScalarFieldEnum: {
    mission_id: 'mission_id'
    creator_id: 'creator_id'
    category_id: 'category_id'
    mission_text: 'mission_text'
    visibility: 'visibility'
    is_community: 'is_community'
    timespan: 'timespan'
    created_at: 'created_at'
  }

  export type MissionScalarFieldEnum =
    (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]

  export const MissioncategoryScalarFieldEnum: {
    category_id: 'category_id'
    description: 'description'
  }

  export type MissioncategoryScalarFieldEnum =
    (typeof MissioncategoryScalarFieldEnum)[keyof typeof MissioncategoryScalarFieldEnum]

  export const SessionsScalarFieldEnum: {
    session_id: 'session_id'
    user_id: 'user_id'
    access_token: 'access_token'
    is_active: 'is_active'
    login_at: 'login_at'
    logout_at: 'logout_at'
  }

  export type SessionsScalarFieldEnum =
    (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]

  export const UsermissioncompletionScalarFieldEnum: {
    missioncompletion_id: 'missioncompletion_id'
    user_id: 'user_id'
    mission_id: 'mission_id'
    completed: 'completed'
    started_at: 'started_at'
    ended_at: 'ended_at'
  }

  export type UsermissioncompletionScalarFieldEnum =
    (typeof UsermissioncompletionScalarFieldEnum)[keyof typeof UsermissioncompletionScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >

  /**
   * Reference to a field of type 'visibility'
   */
  export type EnumvisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'visibility'
  >

  /**
   * Reference to a field of type 'visibility[]'
   */
  export type ListEnumvisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'visibility[]'
  >

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >

  /**
   * Deep Input Types
   */

  export type userprofileWhereInput = {
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    profile_id?: IntFilter<'userprofile'> | number
    user_id?: IntFilter<'userprofile'> | number
    first_name?: StringFilter<'userprofile'> | string
    last_name?: StringFilter<'userprofile'> | string
    created_at?: DateTimeNullableFilter<'userprofile'> | Date | string | null
    updated_at?: DateTimeNullableFilter<'userprofile'> | Date | string | null
    exercise_duration?: StringFilter<'userprofile'> | string
    history?: StringNullableListFilter<'userprofile'>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type userprofileOrderByWithRelationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exercise_duration?: SortOrder
    history?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type userprofileWhereUniqueInput = Prisma.AtLeast<
    {
      profile_id?: number
      user_id?: number
      AND?: userprofileWhereInput | userprofileWhereInput[]
      OR?: userprofileWhereInput[]
      NOT?: userprofileWhereInput | userprofileWhereInput[]
      first_name?: StringFilter<'userprofile'> | string
      last_name?: StringFilter<'userprofile'> | string
      created_at?: DateTimeNullableFilter<'userprofile'> | Date | string | null
      updated_at?: DateTimeNullableFilter<'userprofile'> | Date | string | null
      exercise_duration?: StringFilter<'userprofile'> | string
      history?: StringNullableListFilter<'userprofile'>
      User?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'profile_id' | 'user_id'
  >

  export type userprofileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exercise_duration?: SortOrder
    history?: SortOrder
    _count?: userprofileCountOrderByAggregateInput
    _avg?: userprofileAvgOrderByAggregateInput
    _max?: userprofileMaxOrderByAggregateInput
    _min?: userprofileMinOrderByAggregateInput
    _sum?: userprofileSumOrderByAggregateInput
  }

  export type userprofileScalarWhereWithAggregatesInput = {
    AND?:
      | userprofileScalarWhereWithAggregatesInput
      | userprofileScalarWhereWithAggregatesInput[]
    OR?: userprofileScalarWhereWithAggregatesInput[]
    NOT?:
      | userprofileScalarWhereWithAggregatesInput
      | userprofileScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<'userprofile'> | number
    user_id?: IntWithAggregatesFilter<'userprofile'> | number
    first_name?: StringWithAggregatesFilter<'userprofile'> | string
    last_name?: StringWithAggregatesFilter<'userprofile'> | string
    created_at?:
      | DateTimeNullableWithAggregatesFilter<'userprofile'>
      | Date
      | string
      | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'userprofile'>
      | Date
      | string
      | null
    exercise_duration?: StringWithAggregatesFilter<'userprofile'> | string
    history?: StringNullableListFilter<'userprofile'>
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<'User'> | number
    username?: StringFilter<'User'> | string
    email?: StringFilter<'User'> | string
    password?: StringFilter<'User'> | string
    is_verified?: BoolNullableFilter<'User'> | boolean | null
    created_at?: DateTimeNullableFilter<'User'> | Date | string | null
    updated_at?: DateTimeNullableFilter<'User'> | Date | string | null
    mission?: MissionListRelationFilter
    sessions?: SessionsListRelationFilter
    usermissioncompletion?: UsermissioncompletionListRelationFilter
    userprofile?: XOR<
      UserprofileNullableScalarRelationFilter,
      userprofileWhereInput
    > | null
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    mission?: missionOrderByRelationAggregateInput
    sessions?: sessionsOrderByRelationAggregateInput
    usermissioncompletion?: usermissioncompletionOrderByRelationAggregateInput
    userprofile?: userprofileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      user_id?: number
      username?: string
      email?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      password?: StringFilter<'User'> | string
      is_verified?: BoolNullableFilter<'User'> | boolean | null
      created_at?: DateTimeNullableFilter<'User'> | Date | string | null
      updated_at?: DateTimeNullableFilter<'User'> | Date | string | null
      mission?: MissionListRelationFilter
      sessions?: SessionsListRelationFilter
      usermissioncompletion?: UsermissioncompletionListRelationFilter
      userprofile?: XOR<
        UserprofileNullableScalarRelationFilter,
        userprofileWhereInput
      > | null
    },
    'user_id' | 'username' | 'email'
  >

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<'User'> | number
    username?: StringWithAggregatesFilter<'User'> | string
    email?: StringWithAggregatesFilter<'User'> | string
    password?: StringWithAggregatesFilter<'User'> | string
    is_verified?: BoolNullableWithAggregatesFilter<'User'> | boolean | null
    created_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null
  }

  export type missionWhereInput = {
    AND?: missionWhereInput | missionWhereInput[]
    OR?: missionWhereInput[]
    NOT?: missionWhereInput | missionWhereInput[]
    mission_id?: IntFilter<'mission'> | number
    creator_id?: IntFilter<'mission'> | number
    category_id?: StringFilter<'mission'> | string
    mission_text?: StringFilter<'mission'> | string
    visibility?: EnumvisibilityFilter<'mission'> | $Enums.visibility
    is_community?: BoolNullableFilter<'mission'> | boolean | null
    timespan?: IntFilter<'mission'> | number
    created_at?: DateTimeNullableFilter<'mission'> | Date | string | null
    missioncategory?: XOR<
      MissioncategoryScalarRelationFilter,
      missioncategoryWhereInput
    >
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    usermissioncompletion?: UsermissioncompletionListRelationFilter
  }

  export type missionOrderByWithRelationInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    category_id?: SortOrder
    mission_text?: SortOrder
    visibility?: SortOrder
    is_community?: SortOrderInput | SortOrder
    timespan?: SortOrder
    created_at?: SortOrderInput | SortOrder
    missioncategory?: missioncategoryOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    usermissioncompletion?: usermissioncompletionOrderByRelationAggregateInput
  }

  export type missionWhereUniqueInput = Prisma.AtLeast<
    {
      mission_id?: number
      mission_text?: string
      AND?: missionWhereInput | missionWhereInput[]
      OR?: missionWhereInput[]
      NOT?: missionWhereInput | missionWhereInput[]
      creator_id?: IntFilter<'mission'> | number
      category_id?: StringFilter<'mission'> | string
      visibility?: EnumvisibilityFilter<'mission'> | $Enums.visibility
      is_community?: BoolNullableFilter<'mission'> | boolean | null
      timespan?: IntFilter<'mission'> | number
      created_at?: DateTimeNullableFilter<'mission'> | Date | string | null
      missioncategory?: XOR<
        MissioncategoryScalarRelationFilter,
        missioncategoryWhereInput
      >
      User?: XOR<UserScalarRelationFilter, UserWhereInput>
      usermissioncompletion?: UsermissioncompletionListRelationFilter
    },
    'mission_id' | 'mission_text'
  >

  export type missionOrderByWithAggregationInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    category_id?: SortOrder
    mission_text?: SortOrder
    visibility?: SortOrder
    is_community?: SortOrderInput | SortOrder
    timespan?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: missionCountOrderByAggregateInput
    _avg?: missionAvgOrderByAggregateInput
    _max?: missionMaxOrderByAggregateInput
    _min?: missionMinOrderByAggregateInput
    _sum?: missionSumOrderByAggregateInput
  }

  export type missionScalarWhereWithAggregatesInput = {
    AND?:
      | missionScalarWhereWithAggregatesInput
      | missionScalarWhereWithAggregatesInput[]
    OR?: missionScalarWhereWithAggregatesInput[]
    NOT?:
      | missionScalarWhereWithAggregatesInput
      | missionScalarWhereWithAggregatesInput[]
    mission_id?: IntWithAggregatesFilter<'mission'> | number
    creator_id?: IntWithAggregatesFilter<'mission'> | number
    category_id?: StringWithAggregatesFilter<'mission'> | string
    mission_text?: StringWithAggregatesFilter<'mission'> | string
    visibility?:
      | EnumvisibilityWithAggregatesFilter<'mission'>
      | $Enums.visibility
    is_community?: BoolNullableWithAggregatesFilter<'mission'> | boolean | null
    timespan?: IntWithAggregatesFilter<'mission'> | number
    created_at?:
      | DateTimeNullableWithAggregatesFilter<'mission'>
      | Date
      | string
      | null
  }

  export type missioncategoryWhereInput = {
    AND?: missioncategoryWhereInput | missioncategoryWhereInput[]
    OR?: missioncategoryWhereInput[]
    NOT?: missioncategoryWhereInput | missioncategoryWhereInput[]
    category_id?: StringFilter<'missioncategory'> | string
    description?: StringNullableFilter<'missioncategory'> | string | null
    mission?: MissionListRelationFilter
  }

  export type missioncategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    mission?: missionOrderByRelationAggregateInput
  }

  export type missioncategoryWhereUniqueInput = Prisma.AtLeast<
    {
      category_id?: string
      AND?: missioncategoryWhereInput | missioncategoryWhereInput[]
      OR?: missioncategoryWhereInput[]
      NOT?: missioncategoryWhereInput | missioncategoryWhereInput[]
      description?: StringNullableFilter<'missioncategory'> | string | null
      mission?: MissionListRelationFilter
    },
    'category_id'
  >

  export type missioncategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: missioncategoryCountOrderByAggregateInput
    _max?: missioncategoryMaxOrderByAggregateInput
    _min?: missioncategoryMinOrderByAggregateInput
  }

  export type missioncategoryScalarWhereWithAggregatesInput = {
    AND?:
      | missioncategoryScalarWhereWithAggregatesInput
      | missioncategoryScalarWhereWithAggregatesInput[]
    OR?: missioncategoryScalarWhereWithAggregatesInput[]
    NOT?:
      | missioncategoryScalarWhereWithAggregatesInput
      | missioncategoryScalarWhereWithAggregatesInput[]
    category_id?: StringWithAggregatesFilter<'missioncategory'> | string
    description?:
      | StringNullableWithAggregatesFilter<'missioncategory'>
      | string
      | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    session_id?: IntFilter<'sessions'> | number
    user_id?: IntFilter<'sessions'> | number
    access_token?: StringNullableFilter<'sessions'> | string | null
    is_active?: BoolNullableFilter<'sessions'> | boolean | null
    login_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
    logout_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    login_at?: SortOrderInput | SortOrder
    logout_at?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<
    {
      session_id?: number
      AND?: sessionsWhereInput | sessionsWhereInput[]
      OR?: sessionsWhereInput[]
      NOT?: sessionsWhereInput | sessionsWhereInput[]
      user_id?: IntFilter<'sessions'> | number
      access_token?: StringNullableFilter<'sessions'> | string | null
      is_active?: BoolNullableFilter<'sessions'> | boolean | null
      login_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
      logout_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
      User?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'session_id'
  >

  export type sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    login_at?: SortOrderInput | SortOrder
    logout_at?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?:
      | sessionsScalarWhereWithAggregatesInput
      | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?:
      | sessionsScalarWhereWithAggregatesInput
      | sessionsScalarWhereWithAggregatesInput[]
    session_id?: IntWithAggregatesFilter<'sessions'> | number
    user_id?: IntWithAggregatesFilter<'sessions'> | number
    access_token?:
      | StringNullableWithAggregatesFilter<'sessions'>
      | string
      | null
    is_active?: BoolNullableWithAggregatesFilter<'sessions'> | boolean | null
    login_at?:
      | DateTimeNullableWithAggregatesFilter<'sessions'>
      | Date
      | string
      | null
    logout_at?:
      | DateTimeNullableWithAggregatesFilter<'sessions'>
      | Date
      | string
      | null
  }

  export type usermissioncompletionWhereInput = {
    AND?: usermissioncompletionWhereInput | usermissioncompletionWhereInput[]
    OR?: usermissioncompletionWhereInput[]
    NOT?: usermissioncompletionWhereInput | usermissioncompletionWhereInput[]
    missioncompletion_id?: IntFilter<'usermissioncompletion'> | number
    user_id?: IntFilter<'usermissioncompletion'> | number
    mission_id?: IntFilter<'usermissioncompletion'> | number
    completed?: BoolNullableFilter<'usermissioncompletion'> | boolean | null
    started_at?:
      | DateTimeNullableFilter<'usermissioncompletion'>
      | Date
      | string
      | null
    ended_at?:
      | DateTimeNullableFilter<'usermissioncompletion'>
      | Date
      | string
      | null
    mission?: XOR<MissionScalarRelationFilter, missionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type usermissioncompletionOrderByWithRelationInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    mission?: missionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type usermissioncompletionWhereUniqueInput = Prisma.AtLeast<
    {
      missioncompletion_id?: number
      AND?: usermissioncompletionWhereInput | usermissioncompletionWhereInput[]
      OR?: usermissioncompletionWhereInput[]
      NOT?: usermissioncompletionWhereInput | usermissioncompletionWhereInput[]
      user_id?: IntFilter<'usermissioncompletion'> | number
      mission_id?: IntFilter<'usermissioncompletion'> | number
      completed?: BoolNullableFilter<'usermissioncompletion'> | boolean | null
      started_at?:
        | DateTimeNullableFilter<'usermissioncompletion'>
        | Date
        | string
        | null
      ended_at?:
        | DateTimeNullableFilter<'usermissioncompletion'>
        | Date
        | string
        | null
      mission?: XOR<MissionScalarRelationFilter, missionWhereInput>
      User?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'missioncompletion_id'
  >

  export type usermissioncompletionOrderByWithAggregationInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    _count?: usermissioncompletionCountOrderByAggregateInput
    _avg?: usermissioncompletionAvgOrderByAggregateInput
    _max?: usermissioncompletionMaxOrderByAggregateInput
    _min?: usermissioncompletionMinOrderByAggregateInput
    _sum?: usermissioncompletionSumOrderByAggregateInput
  }

  export type usermissioncompletionScalarWhereWithAggregatesInput = {
    AND?:
      | usermissioncompletionScalarWhereWithAggregatesInput
      | usermissioncompletionScalarWhereWithAggregatesInput[]
    OR?: usermissioncompletionScalarWhereWithAggregatesInput[]
    NOT?:
      | usermissioncompletionScalarWhereWithAggregatesInput
      | usermissioncompletionScalarWhereWithAggregatesInput[]
    missioncompletion_id?:
      | IntWithAggregatesFilter<'usermissioncompletion'>
      | number
    user_id?: IntWithAggregatesFilter<'usermissioncompletion'> | number
    mission_id?: IntWithAggregatesFilter<'usermissioncompletion'> | number
    completed?:
      | BoolNullableWithAggregatesFilter<'usermissioncompletion'>
      | boolean
      | null
    started_at?:
      | DateTimeNullableWithAggregatesFilter<'usermissioncompletion'>
      | Date
      | string
      | null
    ended_at?:
      | DateTimeNullableWithAggregatesFilter<'usermissioncompletion'>
      | Date
      | string
      | null
  }

  export type userprofileCreateInput = {
    first_name: string
    last_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercise_duration: string
    history?: userprofileCreatehistoryInput | string[]
    User: UserCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateInput = {
    profile_id?: number
    user_id: number
    first_name: string
    last_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercise_duration: string
    history?: userprofileCreatehistoryInput | string[]
  }

  export type userprofileUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
    User?: UserUpdateOneRequiredWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
  }

  export type userprofileCreateManyInput = {
    profile_id?: number
    user_id: number
    first_name: string
    last_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercise_duration: string
    history?: userprofileCreatehistoryInput | string[]
  }

  export type userprofileUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
  }

  export type userprofileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionCreateNestedManyWithoutUserInput
    sessions?: sessionsCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionUncheckedCreateNestedManyWithoutUserInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUpdateManyWithoutUserNestedInput
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type missionCreateInput = {
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    missioncategory: missioncategoryCreateNestedOneWithoutMissionInput
    User: UserCreateNestedOneWithoutMissionInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutMissionInput
  }

  export type missionUncheckedCreateInput = {
    mission_id?: number
    creator_id: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type missionUpdateInput = {
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    missioncategory?: missioncategoryUpdateOneRequiredWithoutMissionNestedInput
    User?: UserUpdateOneRequiredWithoutMissionNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type missionCreateManyInput = {
    mission_id?: number
    creator_id: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
  }

  export type missionUpdateManyMutationInput = {
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type missionUncheckedUpdateManyInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type missioncategoryCreateInput = {
    category_id: string
    description?: string | null
    mission?: missionCreateNestedManyWithoutMissioncategoryInput
  }

  export type missioncategoryUncheckedCreateInput = {
    category_id: string
    description?: string | null
    mission?: missionUncheckedCreateNestedManyWithoutMissioncategoryInput
  }

  export type missioncategoryUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: missionUpdateManyWithoutMissioncategoryNestedInput
  }

  export type missioncategoryUncheckedUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mission?: missionUncheckedUpdateManyWithoutMissioncategoryNestedInput
  }

  export type missioncategoryCreateManyInput = {
    category_id: string
    description?: string | null
  }

  export type missioncategoryUpdateManyMutationInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type missioncategoryUncheckedUpdateManyInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateInput = {
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    User: UserCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    session_id?: number
    user_id: number
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
  }

  export type sessionsUpdateInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    User?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type sessionsCreateManyInput = {
    session_id?: number
    user_id: number
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
  }

  export type sessionsUpdateManyMutationInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type usermissioncompletionCreateInput = {
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
    mission: missionCreateNestedOneWithoutUsermissioncompletionInput
    User: UserCreateNestedOneWithoutUsermissioncompletionInput
  }

  export type usermissioncompletionUncheckedCreateInput = {
    missioncompletion_id?: number
    user_id: number
    mission_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type usermissioncompletionUpdateInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mission?: missionUpdateOneRequiredWithoutUsermissioncompletionNestedInput
    User?: UserUpdateOneRequiredWithoutUsermissioncompletionNestedInput
  }

  export type usermissioncompletionUncheckedUpdateInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usermissioncompletionCreateManyInput = {
    missioncompletion_id?: number
    user_id: number
    mission_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type usermissioncompletionUpdateManyMutationInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usermissioncompletionUncheckedUpdateManyInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userprofileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    exercise_duration?: SortOrder
    history?: SortOrder
  }

  export type userprofileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type userprofileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    exercise_duration?: SortOrder
  }

  export type userprofileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    exercise_duration?: SortOrder
  }

  export type userprofileSumOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MissionListRelationFilter = {
    every?: missionWhereInput
    some?: missionWhereInput
    none?: missionWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type UsermissioncompletionListRelationFilter = {
    every?: usermissioncompletionWhereInput
    some?: usermissioncompletionWhereInput
    none?: usermissioncompletionWhereInput
  }

  export type UserprofileNullableScalarRelationFilter = {
    is?: userprofileWhereInput | null
    isNot?: userprofileWhereInput | null
  }

  export type missionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usermissioncompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumvisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.visibility | EnumvisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumvisibilityFilter<$PrismaModel> | $Enums.visibility
  }

  export type MissioncategoryScalarRelationFilter = {
    is?: missioncategoryWhereInput
    isNot?: missioncategoryWhereInput
  }

  export type missionCountOrderByAggregateInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    category_id?: SortOrder
    mission_text?: SortOrder
    visibility?: SortOrder
    is_community?: SortOrder
    timespan?: SortOrder
    created_at?: SortOrder
  }

  export type missionAvgOrderByAggregateInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    timespan?: SortOrder
  }

  export type missionMaxOrderByAggregateInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    category_id?: SortOrder
    mission_text?: SortOrder
    visibility?: SortOrder
    is_community?: SortOrder
    timespan?: SortOrder
    created_at?: SortOrder
  }

  export type missionMinOrderByAggregateInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    category_id?: SortOrder
    mission_text?: SortOrder
    visibility?: SortOrder
    is_community?: SortOrder
    timespan?: SortOrder
    created_at?: SortOrder
  }

  export type missionSumOrderByAggregateInput = {
    mission_id?: SortOrder
    creator_id?: SortOrder
    timespan?: SortOrder
  }

  export type EnumvisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.visibility | EnumvisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumvisibilityWithAggregatesFilter<$PrismaModel>
      | $Enums.visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvisibilityFilter<$PrismaModel>
    _max?: NestedEnumvisibilityFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type missioncategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    description?: SortOrder
  }

  export type missioncategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    description?: SortOrder
  }

  export type missioncategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    is_active?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    is_active?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    access_token?: SortOrder
    is_active?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
  }

  export type MissionScalarRelationFilter = {
    is?: missionWhereInput
    isNot?: missionWhereInput
  }

  export type usermissioncompletionCountOrderByAggregateInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
  }

  export type usermissioncompletionAvgOrderByAggregateInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
  }

  export type usermissioncompletionMaxOrderByAggregateInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
  }

  export type usermissioncompletionMinOrderByAggregateInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
  }

  export type usermissioncompletionSumOrderByAggregateInput = {
    missioncompletion_id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
  }

  export type userprofileCreatehistoryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUserprofileInput = {
    create?: XOR<
      UserCreateWithoutUserprofileInput,
      UserUncheckedCreateWithoutUserprofileInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutUserprofileInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userprofileUpdatehistoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutUserprofileNestedInput = {
    create?: XOR<
      UserCreateWithoutUserprofileInput,
      UserUncheckedCreateWithoutUserprofileInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutUserprofileInput
    upsert?: UserUpsertWithoutUserprofileInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutUserprofileInput,
        UserUpdateWithoutUserprofileInput
      >,
      UserUncheckedUpdateWithoutUserprofileInput
    >
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type missionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          missionCreateWithoutUserInput,
          missionUncheckedCreateWithoutUserInput
        >
      | missionCreateWithoutUserInput[]
      | missionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutUserInput
      | missionCreateOrConnectWithoutUserInput[]
    createMany?: missionCreateManyUserInputEnvelope
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          sessionsCreateWithoutUserInput,
          sessionsUncheckedCreateWithoutUserInput
        >
      | sessionsCreateWithoutUserInput[]
      | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | sessionsCreateOrConnectWithoutUserInput
      | sessionsCreateOrConnectWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type usermissioncompletionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutUserInput,
          usermissioncompletionUncheckedCreateWithoutUserInput
        >
      | usermissioncompletionCreateWithoutUserInput[]
      | usermissioncompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutUserInput
      | usermissioncompletionCreateOrConnectWithoutUserInput[]
    createMany?: usermissioncompletionCreateManyUserInputEnvelope
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
  }

  export type userprofileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    connect?: userprofileWhereUniqueInput
  }

  export type missionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          missionCreateWithoutUserInput,
          missionUncheckedCreateWithoutUserInput
        >
      | missionCreateWithoutUserInput[]
      | missionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutUserInput
      | missionCreateOrConnectWithoutUserInput[]
    createMany?: missionCreateManyUserInputEnvelope
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          sessionsCreateWithoutUserInput,
          sessionsUncheckedCreateWithoutUserInput
        >
      | sessionsCreateWithoutUserInput[]
      | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | sessionsCreateOrConnectWithoutUserInput
      | sessionsCreateOrConnectWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type usermissioncompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutUserInput,
          usermissioncompletionUncheckedCreateWithoutUserInput
        >
      | usermissioncompletionCreateWithoutUserInput[]
      | usermissioncompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutUserInput
      | usermissioncompletionCreateOrConnectWithoutUserInput[]
    createMany?: usermissioncompletionCreateManyUserInputEnvelope
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
  }

  export type userprofileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    connect?: userprofileWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type missionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          missionCreateWithoutUserInput,
          missionUncheckedCreateWithoutUserInput
        >
      | missionCreateWithoutUserInput[]
      | missionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutUserInput
      | missionCreateOrConnectWithoutUserInput[]
    upsert?:
      | missionUpsertWithWhereUniqueWithoutUserInput
      | missionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: missionCreateManyUserInputEnvelope
    set?: missionWhereUniqueInput | missionWhereUniqueInput[]
    disconnect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    delete?: missionWhereUniqueInput | missionWhereUniqueInput[]
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    update?:
      | missionUpdateWithWhereUniqueWithoutUserInput
      | missionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | missionUpdateManyWithWhereWithoutUserInput
      | missionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: missionScalarWhereInput | missionScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          sessionsCreateWithoutUserInput,
          sessionsUncheckedCreateWithoutUserInput
        >
      | sessionsCreateWithoutUserInput[]
      | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | sessionsCreateOrConnectWithoutUserInput
      | sessionsCreateOrConnectWithoutUserInput[]
    upsert?:
      | sessionsUpsertWithWhereUniqueWithoutUserInput
      | sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?:
      | sessionsUpdateWithWhereUniqueWithoutUserInput
      | sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | sessionsUpdateManyWithWhereWithoutUserInput
      | sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type usermissioncompletionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutUserInput,
          usermissioncompletionUncheckedCreateWithoutUserInput
        >
      | usermissioncompletionCreateWithoutUserInput[]
      | usermissioncompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutUserInput
      | usermissioncompletionCreateOrConnectWithoutUserInput[]
    upsert?:
      | usermissioncompletionUpsertWithWhereUniqueWithoutUserInput
      | usermissioncompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: usermissioncompletionCreateManyUserInputEnvelope
    set?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    disconnect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    delete?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    update?:
      | usermissioncompletionUpdateWithWhereUniqueWithoutUserInput
      | usermissioncompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | usermissioncompletionUpdateManyWithWhereWithoutUserInput
      | usermissioncompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?:
      | usermissioncompletionScalarWhereInput
      | usermissioncompletionScalarWhereInput[]
  }

  export type userprofileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    upsert?: userprofileUpsertWithoutUserInput
    disconnect?: userprofileWhereInput | boolean
    delete?: userprofileWhereInput | boolean
    connect?: userprofileWhereUniqueInput
    update?: XOR<
      XOR<
        userprofileUpdateToOneWithWhereWithoutUserInput,
        userprofileUpdateWithoutUserInput
      >,
      userprofileUncheckedUpdateWithoutUserInput
    >
  }

  export type missionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          missionCreateWithoutUserInput,
          missionUncheckedCreateWithoutUserInput
        >
      | missionCreateWithoutUserInput[]
      | missionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutUserInput
      | missionCreateOrConnectWithoutUserInput[]
    upsert?:
      | missionUpsertWithWhereUniqueWithoutUserInput
      | missionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: missionCreateManyUserInputEnvelope
    set?: missionWhereUniqueInput | missionWhereUniqueInput[]
    disconnect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    delete?: missionWhereUniqueInput | missionWhereUniqueInput[]
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    update?:
      | missionUpdateWithWhereUniqueWithoutUserInput
      | missionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | missionUpdateManyWithWhereWithoutUserInput
      | missionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: missionScalarWhereInput | missionScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          sessionsCreateWithoutUserInput,
          sessionsUncheckedCreateWithoutUserInput
        >
      | sessionsCreateWithoutUserInput[]
      | sessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | sessionsCreateOrConnectWithoutUserInput
      | sessionsCreateOrConnectWithoutUserInput[]
    upsert?:
      | sessionsUpsertWithWhereUniqueWithoutUserInput
      | sessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionsCreateManyUserInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?:
      | sessionsUpdateWithWhereUniqueWithoutUserInput
      | sessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | sessionsUpdateManyWithWhereWithoutUserInput
      | sessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type usermissioncompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutUserInput,
          usermissioncompletionUncheckedCreateWithoutUserInput
        >
      | usermissioncompletionCreateWithoutUserInput[]
      | usermissioncompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutUserInput
      | usermissioncompletionCreateOrConnectWithoutUserInput[]
    upsert?:
      | usermissioncompletionUpsertWithWhereUniqueWithoutUserInput
      | usermissioncompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: usermissioncompletionCreateManyUserInputEnvelope
    set?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    disconnect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    delete?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    update?:
      | usermissioncompletionUpdateWithWhereUniqueWithoutUserInput
      | usermissioncompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | usermissioncompletionUpdateManyWithWhereWithoutUserInput
      | usermissioncompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?:
      | usermissioncompletionScalarWhereInput
      | usermissioncompletionScalarWhereInput[]
  }

  export type userprofileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    upsert?: userprofileUpsertWithoutUserInput
    disconnect?: userprofileWhereInput | boolean
    delete?: userprofileWhereInput | boolean
    connect?: userprofileWhereUniqueInput
    update?: XOR<
      XOR<
        userprofileUpdateToOneWithWhereWithoutUserInput,
        userprofileUpdateWithoutUserInput
      >,
      userprofileUncheckedUpdateWithoutUserInput
    >
  }

  export type missioncategoryCreateNestedOneWithoutMissionInput = {
    create?: XOR<
      missioncategoryCreateWithoutMissionInput,
      missioncategoryUncheckedCreateWithoutMissionInput
    >
    connectOrCreate?: missioncategoryCreateOrConnectWithoutMissionInput
    connect?: missioncategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMissionInput = {
    create?: XOR<
      UserCreateWithoutMissionInput,
      UserUncheckedCreateWithoutMissionInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutMissionInput
    connect?: UserWhereUniqueInput
  }

  export type usermissioncompletionCreateNestedManyWithoutMissionInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutMissionInput,
          usermissioncompletionUncheckedCreateWithoutMissionInput
        >
      | usermissioncompletionCreateWithoutMissionInput[]
      | usermissioncompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutMissionInput
      | usermissioncompletionCreateOrConnectWithoutMissionInput[]
    createMany?: usermissioncompletionCreateManyMissionInputEnvelope
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
  }

  export type usermissioncompletionUncheckedCreateNestedManyWithoutMissionInput =
    {
      create?:
        | XOR<
            usermissioncompletionCreateWithoutMissionInput,
            usermissioncompletionUncheckedCreateWithoutMissionInput
          >
        | usermissioncompletionCreateWithoutMissionInput[]
        | usermissioncompletionUncheckedCreateWithoutMissionInput[]
      connectOrCreate?:
        | usermissioncompletionCreateOrConnectWithoutMissionInput
        | usermissioncompletionCreateOrConnectWithoutMissionInput[]
      createMany?: usermissioncompletionCreateManyMissionInputEnvelope
      connect?:
        | usermissioncompletionWhereUniqueInput
        | usermissioncompletionWhereUniqueInput[]
    }

  export type EnumvisibilityFieldUpdateOperationsInput = {
    set?: $Enums.visibility
  }

  export type missioncategoryUpdateOneRequiredWithoutMissionNestedInput = {
    create?: XOR<
      missioncategoryCreateWithoutMissionInput,
      missioncategoryUncheckedCreateWithoutMissionInput
    >
    connectOrCreate?: missioncategoryCreateOrConnectWithoutMissionInput
    upsert?: missioncategoryUpsertWithoutMissionInput
    connect?: missioncategoryWhereUniqueInput
    update?: XOR<
      XOR<
        missioncategoryUpdateToOneWithWhereWithoutMissionInput,
        missioncategoryUpdateWithoutMissionInput
      >,
      missioncategoryUncheckedUpdateWithoutMissionInput
    >
  }

  export type UserUpdateOneRequiredWithoutMissionNestedInput = {
    create?: XOR<
      UserCreateWithoutMissionInput,
      UserUncheckedCreateWithoutMissionInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutMissionInput
    upsert?: UserUpsertWithoutMissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMissionInput,
        UserUpdateWithoutMissionInput
      >,
      UserUncheckedUpdateWithoutMissionInput
    >
  }

  export type usermissioncompletionUpdateManyWithoutMissionNestedInput = {
    create?:
      | XOR<
          usermissioncompletionCreateWithoutMissionInput,
          usermissioncompletionUncheckedCreateWithoutMissionInput
        >
      | usermissioncompletionCreateWithoutMissionInput[]
      | usermissioncompletionUncheckedCreateWithoutMissionInput[]
    connectOrCreate?:
      | usermissioncompletionCreateOrConnectWithoutMissionInput
      | usermissioncompletionCreateOrConnectWithoutMissionInput[]
    upsert?:
      | usermissioncompletionUpsertWithWhereUniqueWithoutMissionInput
      | usermissioncompletionUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: usermissioncompletionCreateManyMissionInputEnvelope
    set?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    disconnect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    delete?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    connect?:
      | usermissioncompletionWhereUniqueInput
      | usermissioncompletionWhereUniqueInput[]
    update?:
      | usermissioncompletionUpdateWithWhereUniqueWithoutMissionInput
      | usermissioncompletionUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?:
      | usermissioncompletionUpdateManyWithWhereWithoutMissionInput
      | usermissioncompletionUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?:
      | usermissioncompletionScalarWhereInput
      | usermissioncompletionScalarWhereInput[]
  }

  export type usermissioncompletionUncheckedUpdateManyWithoutMissionNestedInput =
    {
      create?:
        | XOR<
            usermissioncompletionCreateWithoutMissionInput,
            usermissioncompletionUncheckedCreateWithoutMissionInput
          >
        | usermissioncompletionCreateWithoutMissionInput[]
        | usermissioncompletionUncheckedCreateWithoutMissionInput[]
      connectOrCreate?:
        | usermissioncompletionCreateOrConnectWithoutMissionInput
        | usermissioncompletionCreateOrConnectWithoutMissionInput[]
      upsert?:
        | usermissioncompletionUpsertWithWhereUniqueWithoutMissionInput
        | usermissioncompletionUpsertWithWhereUniqueWithoutMissionInput[]
      createMany?: usermissioncompletionCreateManyMissionInputEnvelope
      set?:
        | usermissioncompletionWhereUniqueInput
        | usermissioncompletionWhereUniqueInput[]
      disconnect?:
        | usermissioncompletionWhereUniqueInput
        | usermissioncompletionWhereUniqueInput[]
      delete?:
        | usermissioncompletionWhereUniqueInput
        | usermissioncompletionWhereUniqueInput[]
      connect?:
        | usermissioncompletionWhereUniqueInput
        | usermissioncompletionWhereUniqueInput[]
      update?:
        | usermissioncompletionUpdateWithWhereUniqueWithoutMissionInput
        | usermissioncompletionUpdateWithWhereUniqueWithoutMissionInput[]
      updateMany?:
        | usermissioncompletionUpdateManyWithWhereWithoutMissionInput
        | usermissioncompletionUpdateManyWithWhereWithoutMissionInput[]
      deleteMany?:
        | usermissioncompletionScalarWhereInput
        | usermissioncompletionScalarWhereInput[]
    }

  export type missionCreateNestedManyWithoutMissioncategoryInput = {
    create?:
      | XOR<
          missionCreateWithoutMissioncategoryInput,
          missionUncheckedCreateWithoutMissioncategoryInput
        >
      | missionCreateWithoutMissioncategoryInput[]
      | missionUncheckedCreateWithoutMissioncategoryInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutMissioncategoryInput
      | missionCreateOrConnectWithoutMissioncategoryInput[]
    createMany?: missionCreateManyMissioncategoryInputEnvelope
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
  }

  export type missionUncheckedCreateNestedManyWithoutMissioncategoryInput = {
    create?:
      | XOR<
          missionCreateWithoutMissioncategoryInput,
          missionUncheckedCreateWithoutMissioncategoryInput
        >
      | missionCreateWithoutMissioncategoryInput[]
      | missionUncheckedCreateWithoutMissioncategoryInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutMissioncategoryInput
      | missionCreateOrConnectWithoutMissioncategoryInput[]
    createMany?: missionCreateManyMissioncategoryInputEnvelope
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type missionUpdateManyWithoutMissioncategoryNestedInput = {
    create?:
      | XOR<
          missionCreateWithoutMissioncategoryInput,
          missionUncheckedCreateWithoutMissioncategoryInput
        >
      | missionCreateWithoutMissioncategoryInput[]
      | missionUncheckedCreateWithoutMissioncategoryInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutMissioncategoryInput
      | missionCreateOrConnectWithoutMissioncategoryInput[]
    upsert?:
      | missionUpsertWithWhereUniqueWithoutMissioncategoryInput
      | missionUpsertWithWhereUniqueWithoutMissioncategoryInput[]
    createMany?: missionCreateManyMissioncategoryInputEnvelope
    set?: missionWhereUniqueInput | missionWhereUniqueInput[]
    disconnect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    delete?: missionWhereUniqueInput | missionWhereUniqueInput[]
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    update?:
      | missionUpdateWithWhereUniqueWithoutMissioncategoryInput
      | missionUpdateWithWhereUniqueWithoutMissioncategoryInput[]
    updateMany?:
      | missionUpdateManyWithWhereWithoutMissioncategoryInput
      | missionUpdateManyWithWhereWithoutMissioncategoryInput[]
    deleteMany?: missionScalarWhereInput | missionScalarWhereInput[]
  }

  export type missionUncheckedUpdateManyWithoutMissioncategoryNestedInput = {
    create?:
      | XOR<
          missionCreateWithoutMissioncategoryInput,
          missionUncheckedCreateWithoutMissioncategoryInput
        >
      | missionCreateWithoutMissioncategoryInput[]
      | missionUncheckedCreateWithoutMissioncategoryInput[]
    connectOrCreate?:
      | missionCreateOrConnectWithoutMissioncategoryInput
      | missionCreateOrConnectWithoutMissioncategoryInput[]
    upsert?:
      | missionUpsertWithWhereUniqueWithoutMissioncategoryInput
      | missionUpsertWithWhereUniqueWithoutMissioncategoryInput[]
    createMany?: missionCreateManyMissioncategoryInputEnvelope
    set?: missionWhereUniqueInput | missionWhereUniqueInput[]
    disconnect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    delete?: missionWhereUniqueInput | missionWhereUniqueInput[]
    connect?: missionWhereUniqueInput | missionWhereUniqueInput[]
    update?:
      | missionUpdateWithWhereUniqueWithoutMissioncategoryInput
      | missionUpdateWithWhereUniqueWithoutMissioncategoryInput[]
    updateMany?:
      | missionUpdateManyWithWhereWithoutMissioncategoryInput
      | missionUpdateManyWithWhereWithoutMissioncategoryInput[]
    deleteMany?: missionScalarWhereInput | missionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSessionsInput,
        UserUpdateWithoutSessionsInput
      >,
      UserUncheckedUpdateWithoutSessionsInput
    >
  }

  export type missionCreateNestedOneWithoutUsermissioncompletionInput = {
    create?: XOR<
      missionCreateWithoutUsermissioncompletionInput,
      missionUncheckedCreateWithoutUsermissioncompletionInput
    >
    connectOrCreate?: missionCreateOrConnectWithoutUsermissioncompletionInput
    connect?: missionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsermissioncompletionInput = {
    create?: XOR<
      UserCreateWithoutUsermissioncompletionInput,
      UserUncheckedCreateWithoutUsermissioncompletionInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutUsermissioncompletionInput
    connect?: UserWhereUniqueInput
  }

  export type missionUpdateOneRequiredWithoutUsermissioncompletionNestedInput =
    {
      create?: XOR<
        missionCreateWithoutUsermissioncompletionInput,
        missionUncheckedCreateWithoutUsermissioncompletionInput
      >
      connectOrCreate?: missionCreateOrConnectWithoutUsermissioncompletionInput
      upsert?: missionUpsertWithoutUsermissioncompletionInput
      connect?: missionWhereUniqueInput
      update?: XOR<
        XOR<
          missionUpdateToOneWithWhereWithoutUsermissioncompletionInput,
          missionUpdateWithoutUsermissioncompletionInput
        >,
        missionUncheckedUpdateWithoutUsermissioncompletionInput
      >
    }

  export type UserUpdateOneRequiredWithoutUsermissioncompletionNestedInput = {
    create?: XOR<
      UserCreateWithoutUsermissioncompletionInput,
      UserUncheckedCreateWithoutUsermissioncompletionInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutUsermissioncompletionInput
    upsert?: UserUpsertWithoutUsermissioncompletionInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutUsermissioncompletionInput,
        UserUpdateWithoutUsermissioncompletionInput
      >,
      UserUncheckedUpdateWithoutUsermissioncompletionInput
    >
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null
      _count?: NestedIntNullableFilter<$PrismaModel>
      _min?: NestedDateTimeNullableFilter<$PrismaModel>
      _max?: NestedDateTimeNullableFilter<$PrismaModel>
    }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumvisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.visibility | EnumvisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumvisibilityFilter<$PrismaModel> | $Enums.visibility
  }

  export type NestedEnumvisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.visibility | EnumvisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.visibility[] | ListEnumvisibilityFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumvisibilityWithAggregatesFilter<$PrismaModel>
      | $Enums.visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvisibilityFilter<$PrismaModel>
    _max?: NestedEnumvisibilityFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutUserprofileInput = {
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionCreateNestedManyWithoutUserInput
    sessions?: sessionsCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserprofileInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionUncheckedCreateNestedManyWithoutUserInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserprofileInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutUserprofileInput,
      UserUncheckedCreateWithoutUserprofileInput
    >
  }

  export type UserUpsertWithoutUserprofileInput = {
    update: XOR<
      UserUpdateWithoutUserprofileInput,
      UserUncheckedUpdateWithoutUserprofileInput
    >
    create: XOR<
      UserCreateWithoutUserprofileInput,
      UserUncheckedCreateWithoutUserprofileInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserprofileInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutUserprofileInput,
      UserUncheckedUpdateWithoutUserprofileInput
    >
  }

  export type UserUpdateWithoutUserprofileInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUpdateManyWithoutUserNestedInput
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserprofileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type missionCreateWithoutUserInput = {
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    missioncategory: missioncategoryCreateNestedOneWithoutMissionInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutMissionInput
  }

  export type missionUncheckedCreateWithoutUserInput = {
    mission_id?: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type missionCreateOrConnectWithoutUserInput = {
    where: missionWhereUniqueInput
    create: XOR<
      missionCreateWithoutUserInput,
      missionUncheckedCreateWithoutUserInput
    >
  }

  export type missionCreateManyUserInputEnvelope = {
    data: missionCreateManyUserInput | missionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sessionsCreateWithoutUserInput = {
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
  }

  export type sessionsUncheckedCreateWithoutUserInput = {
    session_id?: number
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
  }

  export type sessionsCreateOrConnectWithoutUserInput = {
    where: sessionsWhereUniqueInput
    create: XOR<
      sessionsCreateWithoutUserInput,
      sessionsUncheckedCreateWithoutUserInput
    >
  }

  export type sessionsCreateManyUserInputEnvelope = {
    data: sessionsCreateManyUserInput | sessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type usermissioncompletionCreateWithoutUserInput = {
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
    mission: missionCreateNestedOneWithoutUsermissioncompletionInput
  }

  export type usermissioncompletionUncheckedCreateWithoutUserInput = {
    missioncompletion_id?: number
    mission_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type usermissioncompletionCreateOrConnectWithoutUserInput = {
    where: usermissioncompletionWhereUniqueInput
    create: XOR<
      usermissioncompletionCreateWithoutUserInput,
      usermissioncompletionUncheckedCreateWithoutUserInput
    >
  }

  export type usermissioncompletionCreateManyUserInputEnvelope = {
    data:
      | usermissioncompletionCreateManyUserInput
      | usermissioncompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userprofileCreateWithoutUserInput = {
    first_name: string
    last_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercise_duration: string
    history?: userprofileCreatehistoryInput | string[]
  }

  export type userprofileUncheckedCreateWithoutUserInput = {
    profile_id?: number
    first_name: string
    last_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercise_duration: string
    history?: userprofileCreatehistoryInput | string[]
  }

  export type userprofileCreateOrConnectWithoutUserInput = {
    where: userprofileWhereUniqueInput
    create: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
  }

  export type missionUpsertWithWhereUniqueWithoutUserInput = {
    where: missionWhereUniqueInput
    update: XOR<
      missionUpdateWithoutUserInput,
      missionUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      missionCreateWithoutUserInput,
      missionUncheckedCreateWithoutUserInput
    >
  }

  export type missionUpdateWithWhereUniqueWithoutUserInput = {
    where: missionWhereUniqueInput
    data: XOR<
      missionUpdateWithoutUserInput,
      missionUncheckedUpdateWithoutUserInput
    >
  }

  export type missionUpdateManyWithWhereWithoutUserInput = {
    where: missionScalarWhereInput
    data: XOR<
      missionUpdateManyMutationInput,
      missionUncheckedUpdateManyWithoutUserInput
    >
  }

  export type missionScalarWhereInput = {
    AND?: missionScalarWhereInput | missionScalarWhereInput[]
    OR?: missionScalarWhereInput[]
    NOT?: missionScalarWhereInput | missionScalarWhereInput[]
    mission_id?: IntFilter<'mission'> | number
    creator_id?: IntFilter<'mission'> | number
    category_id?: StringFilter<'mission'> | string
    mission_text?: StringFilter<'mission'> | string
    visibility?: EnumvisibilityFilter<'mission'> | $Enums.visibility
    is_community?: BoolNullableFilter<'mission'> | boolean | null
    timespan?: IntFilter<'mission'> | number
    created_at?: DateTimeNullableFilter<'mission'> | Date | string | null
  }

  export type sessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: sessionsWhereUniqueInput
    update: XOR<
      sessionsUpdateWithoutUserInput,
      sessionsUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      sessionsCreateWithoutUserInput,
      sessionsUncheckedCreateWithoutUserInput
    >
  }

  export type sessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: sessionsWhereUniqueInput
    data: XOR<
      sessionsUpdateWithoutUserInput,
      sessionsUncheckedUpdateWithoutUserInput
    >
  }

  export type sessionsUpdateManyWithWhereWithoutUserInput = {
    where: sessionsScalarWhereInput
    data: XOR<
      sessionsUpdateManyMutationInput,
      sessionsUncheckedUpdateManyWithoutUserInput
    >
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    session_id?: IntFilter<'sessions'> | number
    user_id?: IntFilter<'sessions'> | number
    access_token?: StringNullableFilter<'sessions'> | string | null
    is_active?: BoolNullableFilter<'sessions'> | boolean | null
    login_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
    logout_at?: DateTimeNullableFilter<'sessions'> | Date | string | null
  }

  export type usermissioncompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: usermissioncompletionWhereUniqueInput
    update: XOR<
      usermissioncompletionUpdateWithoutUserInput,
      usermissioncompletionUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      usermissioncompletionCreateWithoutUserInput,
      usermissioncompletionUncheckedCreateWithoutUserInput
    >
  }

  export type usermissioncompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: usermissioncompletionWhereUniqueInput
    data: XOR<
      usermissioncompletionUpdateWithoutUserInput,
      usermissioncompletionUncheckedUpdateWithoutUserInput
    >
  }

  export type usermissioncompletionUpdateManyWithWhereWithoutUserInput = {
    where: usermissioncompletionScalarWhereInput
    data: XOR<
      usermissioncompletionUpdateManyMutationInput,
      usermissioncompletionUncheckedUpdateManyWithoutUserInput
    >
  }

  export type usermissioncompletionScalarWhereInput = {
    AND?:
      | usermissioncompletionScalarWhereInput
      | usermissioncompletionScalarWhereInput[]
    OR?: usermissioncompletionScalarWhereInput[]
    NOT?:
      | usermissioncompletionScalarWhereInput
      | usermissioncompletionScalarWhereInput[]
    missioncompletion_id?: IntFilter<'usermissioncompletion'> | number
    user_id?: IntFilter<'usermissioncompletion'> | number
    mission_id?: IntFilter<'usermissioncompletion'> | number
    completed?: BoolNullableFilter<'usermissioncompletion'> | boolean | null
    started_at?:
      | DateTimeNullableFilter<'usermissioncompletion'>
      | Date
      | string
      | null
    ended_at?:
      | DateTimeNullableFilter<'usermissioncompletion'>
      | Date
      | string
      | null
  }

  export type userprofileUpsertWithoutUserInput = {
    update: XOR<
      userprofileUpdateWithoutUserInput,
      userprofileUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      userprofileCreateWithoutUserInput,
      userprofileUncheckedCreateWithoutUserInput
    >
    where?: userprofileWhereInput
  }

  export type userprofileUpdateToOneWithWhereWithoutUserInput = {
    where?: userprofileWhereInput
    data: XOR<
      userprofileUpdateWithoutUserInput,
      userprofileUncheckedUpdateWithoutUserInput
    >
  }

  export type userprofileUpdateWithoutUserInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
  }

  export type userprofileUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    exercise_duration?: StringFieldUpdateOperationsInput | string
    history?: userprofileUpdatehistoryInput | string[]
  }

  export type missioncategoryCreateWithoutMissionInput = {
    category_id: string
    description?: string | null
  }

  export type missioncategoryUncheckedCreateWithoutMissionInput = {
    category_id: string
    description?: string | null
  }

  export type missioncategoryCreateOrConnectWithoutMissionInput = {
    where: missioncategoryWhereUniqueInput
    create: XOR<
      missioncategoryCreateWithoutMissionInput,
      missioncategoryUncheckedCreateWithoutMissionInput
    >
  }

  export type UserCreateWithoutMissionInput = {
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sessions?: sessionsCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutMissionInput,
      UserUncheckedCreateWithoutMissionInput
    >
  }

  export type usermissioncompletionCreateWithoutMissionInput = {
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
    User: UserCreateNestedOneWithoutUsermissioncompletionInput
  }

  export type usermissioncompletionUncheckedCreateWithoutMissionInput = {
    missioncompletion_id?: number
    user_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type usermissioncompletionCreateOrConnectWithoutMissionInput = {
    where: usermissioncompletionWhereUniqueInput
    create: XOR<
      usermissioncompletionCreateWithoutMissionInput,
      usermissioncompletionUncheckedCreateWithoutMissionInput
    >
  }

  export type usermissioncompletionCreateManyMissionInputEnvelope = {
    data:
      | usermissioncompletionCreateManyMissionInput
      | usermissioncompletionCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type missioncategoryUpsertWithoutMissionInput = {
    update: XOR<
      missioncategoryUpdateWithoutMissionInput,
      missioncategoryUncheckedUpdateWithoutMissionInput
    >
    create: XOR<
      missioncategoryCreateWithoutMissionInput,
      missioncategoryUncheckedCreateWithoutMissionInput
    >
    where?: missioncategoryWhereInput
  }

  export type missioncategoryUpdateToOneWithWhereWithoutMissionInput = {
    where?: missioncategoryWhereInput
    data: XOR<
      missioncategoryUpdateWithoutMissionInput,
      missioncategoryUncheckedUpdateWithoutMissionInput
    >
  }

  export type missioncategoryUpdateWithoutMissionInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type missioncategoryUncheckedUpdateWithoutMissionInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutMissionInput = {
    update: XOR<
      UserUpdateWithoutMissionInput,
      UserUncheckedUpdateWithoutMissionInput
    >
    create: XOR<
      UserCreateWithoutMissionInput,
      UserUncheckedCreateWithoutMissionInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutMissionInput,
      UserUncheckedUpdateWithoutMissionInput
    >
  }

  export type UserUpdateWithoutMissionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type usermissioncompletionUpsertWithWhereUniqueWithoutMissionInput = {
    where: usermissioncompletionWhereUniqueInput
    update: XOR<
      usermissioncompletionUpdateWithoutMissionInput,
      usermissioncompletionUncheckedUpdateWithoutMissionInput
    >
    create: XOR<
      usermissioncompletionCreateWithoutMissionInput,
      usermissioncompletionUncheckedCreateWithoutMissionInput
    >
  }

  export type usermissioncompletionUpdateWithWhereUniqueWithoutMissionInput = {
    where: usermissioncompletionWhereUniqueInput
    data: XOR<
      usermissioncompletionUpdateWithoutMissionInput,
      usermissioncompletionUncheckedUpdateWithoutMissionInput
    >
  }

  export type usermissioncompletionUpdateManyWithWhereWithoutMissionInput = {
    where: usermissioncompletionScalarWhereInput
    data: XOR<
      usermissioncompletionUpdateManyMutationInput,
      usermissioncompletionUncheckedUpdateManyWithoutMissionInput
    >
  }

  export type missionCreateWithoutMissioncategoryInput = {
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    User: UserCreateNestedOneWithoutMissionInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutMissionInput
  }

  export type missionUncheckedCreateWithoutMissioncategoryInput = {
    mission_id?: number
    creator_id: number
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutMissionInput
  }

  export type missionCreateOrConnectWithoutMissioncategoryInput = {
    where: missionWhereUniqueInput
    create: XOR<
      missionCreateWithoutMissioncategoryInput,
      missionUncheckedCreateWithoutMissioncategoryInput
    >
  }

  export type missionCreateManyMissioncategoryInputEnvelope = {
    data:
      | missionCreateManyMissioncategoryInput
      | missionCreateManyMissioncategoryInput[]
    skipDuplicates?: boolean
  }

  export type missionUpsertWithWhereUniqueWithoutMissioncategoryInput = {
    where: missionWhereUniqueInput
    update: XOR<
      missionUpdateWithoutMissioncategoryInput,
      missionUncheckedUpdateWithoutMissioncategoryInput
    >
    create: XOR<
      missionCreateWithoutMissioncategoryInput,
      missionUncheckedCreateWithoutMissioncategoryInput
    >
  }

  export type missionUpdateWithWhereUniqueWithoutMissioncategoryInput = {
    where: missionWhereUniqueInput
    data: XOR<
      missionUpdateWithoutMissioncategoryInput,
      missionUncheckedUpdateWithoutMissioncategoryInput
    >
  }

  export type missionUpdateManyWithWhereWithoutMissioncategoryInput = {
    where: missionScalarWhereInput
    data: XOR<
      missionUpdateManyMutationInput,
      missionUncheckedUpdateManyWithoutMissioncategoryInput
    >
  }

  export type UserCreateWithoutSessionsInput = {
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionUncheckedCreateNestedManyWithoutUserInput
    usermissioncompletion?: usermissioncompletionUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUncheckedUpdateManyWithoutUserNestedInput
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type missionCreateWithoutUsermissioncompletionInput = {
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
    missioncategory: missioncategoryCreateNestedOneWithoutMissionInput
    User: UserCreateNestedOneWithoutMissionInput
  }

  export type missionUncheckedCreateWithoutUsermissioncompletionInput = {
    mission_id?: number
    creator_id: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
  }

  export type missionCreateOrConnectWithoutUsermissioncompletionInput = {
    where: missionWhereUniqueInput
    create: XOR<
      missionCreateWithoutUsermissioncompletionInput,
      missionUncheckedCreateWithoutUsermissioncompletionInput
    >
  }

  export type UserCreateWithoutUsermissioncompletionInput = {
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionCreateNestedManyWithoutUserInput
    sessions?: sessionsCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsermissioncompletionInput = {
    user_id?: number
    username: string
    email: string
    password: string
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mission?: missionUncheckedCreateNestedManyWithoutUserInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsermissioncompletionInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutUsermissioncompletionInput,
      UserUncheckedCreateWithoutUsermissioncompletionInput
    >
  }

  export type missionUpsertWithoutUsermissioncompletionInput = {
    update: XOR<
      missionUpdateWithoutUsermissioncompletionInput,
      missionUncheckedUpdateWithoutUsermissioncompletionInput
    >
    create: XOR<
      missionCreateWithoutUsermissioncompletionInput,
      missionUncheckedCreateWithoutUsermissioncompletionInput
    >
    where?: missionWhereInput
  }

  export type missionUpdateToOneWithWhereWithoutUsermissioncompletionInput = {
    where?: missionWhereInput
    data: XOR<
      missionUpdateWithoutUsermissioncompletionInput,
      missionUncheckedUpdateWithoutUsermissioncompletionInput
    >
  }

  export type missionUpdateWithoutUsermissioncompletionInput = {
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    missioncategory?: missioncategoryUpdateOneRequiredWithoutMissionNestedInput
    User?: UserUpdateOneRequiredWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateWithoutUsermissioncompletionInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type UserUpsertWithoutUsermissioncompletionInput = {
    update: XOR<
      UserUpdateWithoutUsermissioncompletionInput,
      UserUncheckedUpdateWithoutUsermissioncompletionInput
    >
    create: XOR<
      UserCreateWithoutUsermissioncompletionInput,
      UserUncheckedCreateWithoutUsermissioncompletionInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsermissioncompletionInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutUsermissioncompletionInput,
      UserUncheckedUpdateWithoutUsermissioncompletionInput
    >
  }

  export type UserUpdateWithoutUsermissioncompletionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUpdateManyWithoutUserNestedInput
    sessions?: sessionsUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsermissioncompletionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    mission?: missionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type missionCreateManyUserInput = {
    mission_id?: number
    category_id: string
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
  }

  export type sessionsCreateManyUserInput = {
    session_id?: number
    access_token?: string | null
    is_active?: boolean | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
  }

  export type usermissioncompletionCreateManyUserInput = {
    missioncompletion_id?: number
    mission_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type missionUpdateWithoutUserInput = {
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    missioncategory?: missioncategoryUpdateOneRequiredWithoutMissionNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateWithoutUserInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateManyWithoutUserInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    category_id?: StringFieldUpdateOperationsInput | string
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type sessionsUpdateWithoutUserInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type sessionsUncheckedUpdateWithoutUserInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type sessionsUncheckedUpdateManyWithoutUserInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type usermissioncompletionUpdateWithoutUserInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mission?: missionUpdateOneRequiredWithoutUsermissioncompletionNestedInput
  }

  export type usermissioncompletionUncheckedUpdateWithoutUserInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usermissioncompletionUncheckedUpdateManyWithoutUserInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usermissioncompletionCreateManyMissionInput = {
    missioncompletion_id?: number
    user_id: number
    completed?: boolean | null
    started_at?: Date | string | null
    ended_at?: Date | string | null
  }

  export type usermissioncompletionUpdateWithoutMissionInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUsermissioncompletionNestedInput
  }

  export type usermissioncompletionUncheckedUpdateWithoutMissionInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usermissioncompletionUncheckedUpdateManyWithoutMissionInput = {
    missioncompletion_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    started_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missionCreateManyMissioncategoryInput = {
    mission_id?: number
    creator_id: number
    mission_text: string
    visibility: $Enums.visibility
    is_community?: boolean | null
    timespan: number
    created_at?: Date | string | null
  }

  export type missionUpdateWithoutMissioncategoryInput = {
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    User?: UserUpdateOneRequiredWithoutMissionNestedInput
    usermissioncompletion?: usermissioncompletionUpdateManyWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateWithoutMissioncategoryInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    usermissioncompletion?: usermissioncompletionUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type missionUncheckedUpdateManyWithoutMissioncategoryInput = {
    mission_id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    mission_text?: StringFieldUpdateOperationsInput | string
    visibility?: EnumvisibilityFieldUpdateOperationsInput | $Enums.visibility
    is_community?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timespan?: IntFieldUpdateOperationsInput | number
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
