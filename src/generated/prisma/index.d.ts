
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Metier
 * 
 */
export type Metier = $Result.DefaultSelection<Prisma.$MetierPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserMetier
 * 
 */
export type UserMetier = $Result.DefaultSelection<Prisma.$UserMetierPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  FREELANCE: 'FREELANCE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ATTENTE: 'ATTENTE',
  VALIDATE: 'VALIDATE',
  BANNI: 'BANNI'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Metiers
 * const metiers = await prisma.metier.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Metiers
   * const metiers = await prisma.metier.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.metier`: Exposes CRUD operations for the **Metier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metiers
    * const metiers = await prisma.metier.findMany()
    * ```
    */
  get metier(): Prisma.MetierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMetier`: Exposes CRUD operations for the **UserMetier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMetiers
    * const userMetiers = await prisma.userMetier.findMany()
    * ```
    */
  get userMetier(): Prisma.UserMetierDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
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
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
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

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
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
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
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
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Metier: 'Metier',
    User: 'User',
    UserMetier: 'UserMetier'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "metier" | "user" | "userMetier"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Metier: {
        payload: Prisma.$MetierPayload<ExtArgs>
        fields: Prisma.MetierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          findFirst: {
            args: Prisma.MetierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          findMany: {
            args: Prisma.MetierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>[]
          }
          create: {
            args: Prisma.MetierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          createMany: {
            args: Prisma.MetierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>[]
          }
          delete: {
            args: Prisma.MetierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          update: {
            args: Prisma.MetierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          deleteMany: {
            args: Prisma.MetierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>[]
          }
          upsert: {
            args: Prisma.MetierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetierPayload>
          }
          aggregate: {
            args: Prisma.MetierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetier>
          }
          groupBy: {
            args: Prisma.MetierGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetierGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetierCountArgs<ExtArgs>
            result: $Utils.Optional<MetierCountAggregateOutputType> | number
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
      UserMetier: {
        payload: Prisma.$UserMetierPayload<ExtArgs>
        fields: Prisma.UserMetierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMetierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMetierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          findFirst: {
            args: Prisma.UserMetierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMetierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          findMany: {
            args: Prisma.UserMetierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>[]
          }
          create: {
            args: Prisma.UserMetierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          createMany: {
            args: Prisma.UserMetierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMetierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>[]
          }
          delete: {
            args: Prisma.UserMetierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          update: {
            args: Prisma.UserMetierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          deleteMany: {
            args: Prisma.UserMetierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMetierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMetierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>[]
          }
          upsert: {
            args: Prisma.UserMetierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetierPayload>
          }
          aggregate: {
            args: Prisma.UserMetierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMetier>
          }
          groupBy: {
            args: Prisma.UserMetierGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMetierGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMetierCountArgs<ExtArgs>
            result: $Utils.Optional<UserMetierCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    metier?: MetierOmit
    user?: UserOmit
    userMetier?: UserMetierOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MetierCountOutputType
   */

  export type MetierCountOutputType = {
    userMetiers: number
  }

  export type MetierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMetiers?: boolean | MetierCountOutputTypeCountUserMetiersArgs
  }

  // Custom InputTypes
  /**
   * MetierCountOutputType without action
   */
  export type MetierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetierCountOutputType
     */
    select?: MetierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetierCountOutputType without action
   */
  export type MetierCountOutputTypeCountUserMetiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMetierWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userMetiers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMetiers?: boolean | UserCountOutputTypeCountUserMetiersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMetiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMetierWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Metier
   */

  export type AggregateMetier = {
    _count: MetierCountAggregateOutputType | null
    _avg: MetierAvgAggregateOutputType | null
    _sum: MetierSumAggregateOutputType | null
    _min: MetierMinAggregateOutputType | null
    _max: MetierMaxAggregateOutputType | null
  }

  export type MetierAvgAggregateOutputType = {
    id: number | null
  }

  export type MetierSumAggregateOutputType = {
    id: number | null
  }

  export type MetierMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    createdAt: Date | null
  }

  export type MetierMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    createdAt: Date | null
  }

  export type MetierCountAggregateOutputType = {
    id: number
    libelle: number
    createdAt: number
    _all: number
  }


  export type MetierAvgAggregateInputType = {
    id?: true
  }

  export type MetierSumAggregateInputType = {
    id?: true
  }

  export type MetierMinAggregateInputType = {
    id?: true
    libelle?: true
    createdAt?: true
  }

  export type MetierMaxAggregateInputType = {
    id?: true
    libelle?: true
    createdAt?: true
  }

  export type MetierCountAggregateInputType = {
    id?: true
    libelle?: true
    createdAt?: true
    _all?: true
  }

  export type MetierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metier to aggregate.
     */
    where?: MetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metiers to fetch.
     */
    orderBy?: MetierOrderByWithRelationInput | MetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metiers
    **/
    _count?: true | MetierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetierMaxAggregateInputType
  }

  export type GetMetierAggregateType<T extends MetierAggregateArgs> = {
        [P in keyof T & keyof AggregateMetier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetier[P]>
      : GetScalarType<T[P], AggregateMetier[P]>
  }




  export type MetierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetierWhereInput
    orderBy?: MetierOrderByWithAggregationInput | MetierOrderByWithAggregationInput[]
    by: MetierScalarFieldEnum[] | MetierScalarFieldEnum
    having?: MetierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetierCountAggregateInputType | true
    _avg?: MetierAvgAggregateInputType
    _sum?: MetierSumAggregateInputType
    _min?: MetierMinAggregateInputType
    _max?: MetierMaxAggregateInputType
  }

  export type MetierGroupByOutputType = {
    id: number
    libelle: string
    createdAt: Date
    _count: MetierCountAggregateOutputType | null
    _avg: MetierAvgAggregateOutputType | null
    _sum: MetierSumAggregateOutputType | null
    _min: MetierMinAggregateOutputType | null
    _max: MetierMaxAggregateOutputType | null
  }

  type GetMetierGroupByPayload<T extends MetierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetierGroupByOutputType[P]>
            : GetScalarType<T[P], MetierGroupByOutputType[P]>
        }
      >
    >


  export type MetierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    createdAt?: boolean
    userMetiers?: boolean | Metier$userMetiersArgs<ExtArgs>
    _count?: boolean | MetierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metier"]>

  export type MetierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["metier"]>

  export type MetierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["metier"]>

  export type MetierSelectScalar = {
    id?: boolean
    libelle?: boolean
    createdAt?: boolean
  }

  export type MetierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "createdAt", ExtArgs["result"]["metier"]>
  export type MetierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMetiers?: boolean | Metier$userMetiersArgs<ExtArgs>
    _count?: boolean | MetierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MetierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MetierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metier"
    objects: {
      userMetiers: Prisma.$UserMetierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      createdAt: Date
    }, ExtArgs["result"]["metier"]>
    composites: {}
  }

  type MetierGetPayload<S extends boolean | null | undefined | MetierDefaultArgs> = $Result.GetResult<Prisma.$MetierPayload, S>

  type MetierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetierCountAggregateInputType | true
    }

  export interface MetierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metier'], meta: { name: 'Metier' } }
    /**
     * Find zero or one Metier that matches the filter.
     * @param {MetierFindUniqueArgs} args - Arguments to find a Metier
     * @example
     * // Get one Metier
     * const metier = await prisma.metier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetierFindUniqueArgs>(args: SelectSubset<T, MetierFindUniqueArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetierFindUniqueOrThrowArgs} args - Arguments to find a Metier
     * @example
     * // Get one Metier
     * const metier = await prisma.metier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetierFindUniqueOrThrowArgs>(args: SelectSubset<T, MetierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierFindFirstArgs} args - Arguments to find a Metier
     * @example
     * // Get one Metier
     * const metier = await prisma.metier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetierFindFirstArgs>(args?: SelectSubset<T, MetierFindFirstArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierFindFirstOrThrowArgs} args - Arguments to find a Metier
     * @example
     * // Get one Metier
     * const metier = await prisma.metier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetierFindFirstOrThrowArgs>(args?: SelectSubset<T, MetierFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metiers
     * const metiers = await prisma.metier.findMany()
     * 
     * // Get first 10 Metiers
     * const metiers = await prisma.metier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metierWithIdOnly = await prisma.metier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetierFindManyArgs>(args?: SelectSubset<T, MetierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metier.
     * @param {MetierCreateArgs} args - Arguments to create a Metier.
     * @example
     * // Create one Metier
     * const Metier = await prisma.metier.create({
     *   data: {
     *     // ... data to create a Metier
     *   }
     * })
     * 
     */
    create<T extends MetierCreateArgs>(args: SelectSubset<T, MetierCreateArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metiers.
     * @param {MetierCreateManyArgs} args - Arguments to create many Metiers.
     * @example
     * // Create many Metiers
     * const metier = await prisma.metier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetierCreateManyArgs>(args?: SelectSubset<T, MetierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metiers and returns the data saved in the database.
     * @param {MetierCreateManyAndReturnArgs} args - Arguments to create many Metiers.
     * @example
     * // Create many Metiers
     * const metier = await prisma.metier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metiers and only return the `id`
     * const metierWithIdOnly = await prisma.metier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetierCreateManyAndReturnArgs>(args?: SelectSubset<T, MetierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metier.
     * @param {MetierDeleteArgs} args - Arguments to delete one Metier.
     * @example
     * // Delete one Metier
     * const Metier = await prisma.metier.delete({
     *   where: {
     *     // ... filter to delete one Metier
     *   }
     * })
     * 
     */
    delete<T extends MetierDeleteArgs>(args: SelectSubset<T, MetierDeleteArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metier.
     * @param {MetierUpdateArgs} args - Arguments to update one Metier.
     * @example
     * // Update one Metier
     * const metier = await prisma.metier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetierUpdateArgs>(args: SelectSubset<T, MetierUpdateArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metiers.
     * @param {MetierDeleteManyArgs} args - Arguments to filter Metiers to delete.
     * @example
     * // Delete a few Metiers
     * const { count } = await prisma.metier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetierDeleteManyArgs>(args?: SelectSubset<T, MetierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metiers
     * const metier = await prisma.metier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetierUpdateManyArgs>(args: SelectSubset<T, MetierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metiers and returns the data updated in the database.
     * @param {MetierUpdateManyAndReturnArgs} args - Arguments to update many Metiers.
     * @example
     * // Update many Metiers
     * const metier = await prisma.metier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metiers and only return the `id`
     * const metierWithIdOnly = await prisma.metier.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MetierUpdateManyAndReturnArgs>(args: SelectSubset<T, MetierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metier.
     * @param {MetierUpsertArgs} args - Arguments to update or create a Metier.
     * @example
     * // Update or create a Metier
     * const metier = await prisma.metier.upsert({
     *   create: {
     *     // ... data to create a Metier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metier we want to update
     *   }
     * })
     */
    upsert<T extends MetierUpsertArgs>(args: SelectSubset<T, MetierUpsertArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierCountArgs} args - Arguments to filter Metiers to count.
     * @example
     * // Count the number of Metiers
     * const count = await prisma.metier.count({
     *   where: {
     *     // ... the filter for the Metiers we want to count
     *   }
     * })
    **/
    count<T extends MetierCountArgs>(
      args?: Subset<T, MetierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetierAggregateArgs>(args: Subset<T, MetierAggregateArgs>): Prisma.PrismaPromise<GetMetierAggregateType<T>>

    /**
     * Group by Metier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetierGroupByArgs} args - Group by arguments.
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
      T extends MetierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetierGroupByArgs['orderBy'] }
        : { orderBy?: MetierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
        }[OrderFields]
    >(args: SubsetIntersection<T, MetierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metier model
   */
  readonly fields: MetierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMetiers<T extends Metier$userMetiersArgs<ExtArgs> = {}>(args?: Subset<T, Metier$userMetiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metier model
   */
  interface MetierFieldRefs {
    readonly id: FieldRef<"Metier", 'Int'>
    readonly libelle: FieldRef<"Metier", 'String'>
    readonly createdAt: FieldRef<"Metier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metier findUnique
   */
  export type MetierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter, which Metier to fetch.
     */
    where: MetierWhereUniqueInput
  }

  /**
   * Metier findUniqueOrThrow
   */
  export type MetierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter, which Metier to fetch.
     */
    where: MetierWhereUniqueInput
  }

  /**
   * Metier findFirst
   */
  export type MetierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter, which Metier to fetch.
     */
    where?: MetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metiers to fetch.
     */
    orderBy?: MetierOrderByWithRelationInput | MetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metiers.
     */
    cursor?: MetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metiers.
     */
    distinct?: MetierScalarFieldEnum | MetierScalarFieldEnum[]
  }

  /**
   * Metier findFirstOrThrow
   */
  export type MetierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter, which Metier to fetch.
     */
    where?: MetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metiers to fetch.
     */
    orderBy?: MetierOrderByWithRelationInput | MetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metiers.
     */
    cursor?: MetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metiers.
     */
    distinct?: MetierScalarFieldEnum | MetierScalarFieldEnum[]
  }

  /**
   * Metier findMany
   */
  export type MetierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter, which Metiers to fetch.
     */
    where?: MetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metiers to fetch.
     */
    orderBy?: MetierOrderByWithRelationInput | MetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metiers.
     */
    cursor?: MetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metiers.
     */
    distinct?: MetierScalarFieldEnum | MetierScalarFieldEnum[]
  }

  /**
   * Metier create
   */
  export type MetierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * The data needed to create a Metier.
     */
    data: XOR<MetierCreateInput, MetierUncheckedCreateInput>
  }

  /**
   * Metier createMany
   */
  export type MetierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metiers.
     */
    data: MetierCreateManyInput | MetierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metier createManyAndReturn
   */
  export type MetierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * The data used to create many Metiers.
     */
    data: MetierCreateManyInput | MetierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metier update
   */
  export type MetierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * The data needed to update a Metier.
     */
    data: XOR<MetierUpdateInput, MetierUncheckedUpdateInput>
    /**
     * Choose, which Metier to update.
     */
    where: MetierWhereUniqueInput
  }

  /**
   * Metier updateMany
   */
  export type MetierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metiers.
     */
    data: XOR<MetierUpdateManyMutationInput, MetierUncheckedUpdateManyInput>
    /**
     * Filter which Metiers to update
     */
    where?: MetierWhereInput
    /**
     * Limit how many Metiers to update.
     */
    limit?: number
  }

  /**
   * Metier updateManyAndReturn
   */
  export type MetierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * The data used to update Metiers.
     */
    data: XOR<MetierUpdateManyMutationInput, MetierUncheckedUpdateManyInput>
    /**
     * Filter which Metiers to update
     */
    where?: MetierWhereInput
    /**
     * Limit how many Metiers to update.
     */
    limit?: number
  }

  /**
   * Metier upsert
   */
  export type MetierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * The filter to search for the Metier to update in case it exists.
     */
    where: MetierWhereUniqueInput
    /**
     * In case the Metier found by the `where` argument doesn't exist, create a new Metier with this data.
     */
    create: XOR<MetierCreateInput, MetierUncheckedCreateInput>
    /**
     * In case the Metier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetierUpdateInput, MetierUncheckedUpdateInput>
  }

  /**
   * Metier delete
   */
  export type MetierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
    /**
     * Filter which Metier to delete.
     */
    where: MetierWhereUniqueInput
  }

  /**
   * Metier deleteMany
   */
  export type MetierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metiers to delete
     */
    where?: MetierWhereInput
    /**
     * Limit how many Metiers to delete.
     */
    limit?: number
  }

  /**
   * Metier.userMetiers
   */
  export type Metier$userMetiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    where?: UserMetierWhereInput
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    cursor?: UserMetierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMetierScalarFieldEnum | UserMetierScalarFieldEnum[]
  }

  /**
   * Metier without action
   */
  export type MetierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metier
     */
    select?: MetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metier
     */
    omit?: MetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetierInclude<ExtArgs> | null
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
    id: number | null
    profileViews: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    profileViews: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    whatsapp: string | null
    ville: string | null
    quartier: string | null
    cvDescription: string | null
    profileViews: number | null
    validated: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    whatsapp: string | null
    ville: string | null
    quartier: string | null
    cvDescription: string | null
    profileViews: number | null
    validated: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    nom: number
    prenom: number
    telephone: number
    whatsapp: number
    ville: number
    quartier: number
    cvDescription: number
    profileViews: number
    validated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    profileViews?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    profileViews?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    nom?: true
    prenom?: true
    telephone?: true
    whatsapp?: true
    ville?: true
    quartier?: true
    cvDescription?: true
    profileViews?: true
    validated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    nom?: true
    prenom?: true
    telephone?: true
    whatsapp?: true
    ville?: true
    quartier?: true
    cvDescription?: true
    profileViews?: true
    validated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    nom?: true
    prenom?: true
    telephone?: true
    whatsapp?: true
    ville?: true
    quartier?: true
    cvDescription?: true
    profileViews?: true
    validated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
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
    id: number
    email: string
    password: string
    role: $Enums.Role
    nom: string | null
    prenom: string | null
    telephone: string | null
    whatsapp: string | null
    ville: string | null
    quartier: string | null
    cvDescription: string | null
    profileViews: number
    validated: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    whatsapp?: boolean
    ville?: boolean
    quartier?: boolean
    cvDescription?: boolean
    profileViews?: boolean
    validated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMetiers?: boolean | User$userMetiersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    whatsapp?: boolean
    ville?: boolean
    quartier?: boolean
    cvDescription?: boolean
    profileViews?: boolean
    validated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    whatsapp?: boolean
    ville?: boolean
    quartier?: boolean
    cvDescription?: boolean
    profileViews?: boolean
    validated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    whatsapp?: boolean
    ville?: boolean
    quartier?: boolean
    cvDescription?: boolean
    profileViews?: boolean
    validated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "nom" | "prenom" | "telephone" | "whatsapp" | "ville" | "quartier" | "cvDescription" | "profileViews" | "validated" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMetiers?: boolean | User$userMetiersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userMetiers: Prisma.$UserMetierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      nom: string | null
      prenom: string | null
      telephone: string | null
      whatsapp: string | null
      ville: string | null
      quartier: string | null
      cvDescription: string | null
      profileViews: number
      validated: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMetiers<T extends User$userMetiersArgs<ExtArgs> = {}>(args?: Subset<T, User$userMetiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly whatsapp: FieldRef<"User", 'String'>
    readonly ville: FieldRef<"User", 'String'>
    readonly quartier: FieldRef<"User", 'String'>
    readonly cvDescription: FieldRef<"User", 'String'>
    readonly profileViews: FieldRef<"User", 'Int'>
    readonly validated: FieldRef<"User", 'Status'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.userMetiers
   */
  export type User$userMetiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    where?: UserMetierWhereInput
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    cursor?: UserMetierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMetierScalarFieldEnum | UserMetierScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model UserMetier
   */

  export type AggregateUserMetier = {
    _count: UserMetierCountAggregateOutputType | null
    _avg: UserMetierAvgAggregateOutputType | null
    _sum: UserMetierSumAggregateOutputType | null
    _min: UserMetierMinAggregateOutputType | null
    _max: UserMetierMaxAggregateOutputType | null
  }

  export type UserMetierAvgAggregateOutputType = {
    userId: number | null
    metierId: number | null
  }

  export type UserMetierSumAggregateOutputType = {
    userId: number | null
    metierId: number | null
  }

  export type UserMetierMinAggregateOutputType = {
    userId: number | null
    metierId: number | null
  }

  export type UserMetierMaxAggregateOutputType = {
    userId: number | null
    metierId: number | null
  }

  export type UserMetierCountAggregateOutputType = {
    userId: number
    metierId: number
    _all: number
  }


  export type UserMetierAvgAggregateInputType = {
    userId?: true
    metierId?: true
  }

  export type UserMetierSumAggregateInputType = {
    userId?: true
    metierId?: true
  }

  export type UserMetierMinAggregateInputType = {
    userId?: true
    metierId?: true
  }

  export type UserMetierMaxAggregateInputType = {
    userId?: true
    metierId?: true
  }

  export type UserMetierCountAggregateInputType = {
    userId?: true
    metierId?: true
    _all?: true
  }

  export type UserMetierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMetier to aggregate.
     */
    where?: UserMetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetiers to fetch.
     */
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMetiers
    **/
    _count?: true | UserMetierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMetierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMetierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMetierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMetierMaxAggregateInputType
  }

  export type GetUserMetierAggregateType<T extends UserMetierAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMetier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMetier[P]>
      : GetScalarType<T[P], AggregateUserMetier[P]>
  }




  export type UserMetierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMetierWhereInput
    orderBy?: UserMetierOrderByWithAggregationInput | UserMetierOrderByWithAggregationInput[]
    by: UserMetierScalarFieldEnum[] | UserMetierScalarFieldEnum
    having?: UserMetierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMetierCountAggregateInputType | true
    _avg?: UserMetierAvgAggregateInputType
    _sum?: UserMetierSumAggregateInputType
    _min?: UserMetierMinAggregateInputType
    _max?: UserMetierMaxAggregateInputType
  }

  export type UserMetierGroupByOutputType = {
    userId: number
    metierId: number
    _count: UserMetierCountAggregateOutputType | null
    _avg: UserMetierAvgAggregateOutputType | null
    _sum: UserMetierSumAggregateOutputType | null
    _min: UserMetierMinAggregateOutputType | null
    _max: UserMetierMaxAggregateOutputType | null
  }

  type GetUserMetierGroupByPayload<T extends UserMetierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMetierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMetierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMetierGroupByOutputType[P]>
            : GetScalarType<T[P], UserMetierGroupByOutputType[P]>
        }
      >
    >


  export type UserMetierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    metierId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetier"]>

  export type UserMetierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    metierId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetier"]>

  export type UserMetierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    metierId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetier"]>

  export type UserMetierSelectScalar = {
    userId?: boolean
    metierId?: boolean
  }

  export type UserMetierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "metierId", ExtArgs["result"]["userMetier"]>
  export type UserMetierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }
  export type UserMetierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }
  export type UserMetierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metier?: boolean | MetierDefaultArgs<ExtArgs>
  }

  export type $UserMetierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMetier"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      metier: Prisma.$MetierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      metierId: number
    }, ExtArgs["result"]["userMetier"]>
    composites: {}
  }

  type UserMetierGetPayload<S extends boolean | null | undefined | UserMetierDefaultArgs> = $Result.GetResult<Prisma.$UserMetierPayload, S>

  type UserMetierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMetierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMetierCountAggregateInputType | true
    }

  export interface UserMetierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMetier'], meta: { name: 'UserMetier' } }
    /**
     * Find zero or one UserMetier that matches the filter.
     * @param {UserMetierFindUniqueArgs} args - Arguments to find a UserMetier
     * @example
     * // Get one UserMetier
     * const userMetier = await prisma.userMetier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMetierFindUniqueArgs>(args: SelectSubset<T, UserMetierFindUniqueArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMetier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMetierFindUniqueOrThrowArgs} args - Arguments to find a UserMetier
     * @example
     * // Get one UserMetier
     * const userMetier = await prisma.userMetier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMetierFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMetierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMetier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierFindFirstArgs} args - Arguments to find a UserMetier
     * @example
     * // Get one UserMetier
     * const userMetier = await prisma.userMetier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMetierFindFirstArgs>(args?: SelectSubset<T, UserMetierFindFirstArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMetier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierFindFirstOrThrowArgs} args - Arguments to find a UserMetier
     * @example
     * // Get one UserMetier
     * const userMetier = await prisma.userMetier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMetierFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMetierFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMetiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMetiers
     * const userMetiers = await prisma.userMetier.findMany()
     * 
     * // Get first 10 UserMetiers
     * const userMetiers = await prisma.userMetier.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userMetierWithUserIdOnly = await prisma.userMetier.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserMetierFindManyArgs>(args?: SelectSubset<T, UserMetierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMetier.
     * @param {UserMetierCreateArgs} args - Arguments to create a UserMetier.
     * @example
     * // Create one UserMetier
     * const UserMetier = await prisma.userMetier.create({
     *   data: {
     *     // ... data to create a UserMetier
     *   }
     * })
     * 
     */
    create<T extends UserMetierCreateArgs>(args: SelectSubset<T, UserMetierCreateArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMetiers.
     * @param {UserMetierCreateManyArgs} args - Arguments to create many UserMetiers.
     * @example
     * // Create many UserMetiers
     * const userMetier = await prisma.userMetier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMetierCreateManyArgs>(args?: SelectSubset<T, UserMetierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMetiers and returns the data saved in the database.
     * @param {UserMetierCreateManyAndReturnArgs} args - Arguments to create many UserMetiers.
     * @example
     * // Create many UserMetiers
     * const userMetier = await prisma.userMetier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMetiers and only return the `userId`
     * const userMetierWithUserIdOnly = await prisma.userMetier.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMetierCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMetierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMetier.
     * @param {UserMetierDeleteArgs} args - Arguments to delete one UserMetier.
     * @example
     * // Delete one UserMetier
     * const UserMetier = await prisma.userMetier.delete({
     *   where: {
     *     // ... filter to delete one UserMetier
     *   }
     * })
     * 
     */
    delete<T extends UserMetierDeleteArgs>(args: SelectSubset<T, UserMetierDeleteArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMetier.
     * @param {UserMetierUpdateArgs} args - Arguments to update one UserMetier.
     * @example
     * // Update one UserMetier
     * const userMetier = await prisma.userMetier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMetierUpdateArgs>(args: SelectSubset<T, UserMetierUpdateArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMetiers.
     * @param {UserMetierDeleteManyArgs} args - Arguments to filter UserMetiers to delete.
     * @example
     * // Delete a few UserMetiers
     * const { count } = await prisma.userMetier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMetierDeleteManyArgs>(args?: SelectSubset<T, UserMetierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMetiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMetiers
     * const userMetier = await prisma.userMetier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMetierUpdateManyArgs>(args: SelectSubset<T, UserMetierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMetiers and returns the data updated in the database.
     * @param {UserMetierUpdateManyAndReturnArgs} args - Arguments to update many UserMetiers.
     * @example
     * // Update many UserMetiers
     * const userMetier = await prisma.userMetier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMetiers and only return the `userId`
     * const userMetierWithUserIdOnly = await prisma.userMetier.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserMetierUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMetierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMetier.
     * @param {UserMetierUpsertArgs} args - Arguments to update or create a UserMetier.
     * @example
     * // Update or create a UserMetier
     * const userMetier = await prisma.userMetier.upsert({
     *   create: {
     *     // ... data to create a UserMetier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMetier we want to update
     *   }
     * })
     */
    upsert<T extends UserMetierUpsertArgs>(args: SelectSubset<T, UserMetierUpsertArgs<ExtArgs>>): Prisma__UserMetierClient<$Result.GetResult<Prisma.$UserMetierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMetiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierCountArgs} args - Arguments to filter UserMetiers to count.
     * @example
     * // Count the number of UserMetiers
     * const count = await prisma.userMetier.count({
     *   where: {
     *     // ... the filter for the UserMetiers we want to count
     *   }
     * })
    **/
    count<T extends UserMetierCountArgs>(
      args?: Subset<T, UserMetierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMetierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMetier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMetierAggregateArgs>(args: Subset<T, UserMetierAggregateArgs>): Prisma.PrismaPromise<GetUserMetierAggregateType<T>>

    /**
     * Group by UserMetier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetierGroupByArgs} args - Group by arguments.
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
      T extends UserMetierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMetierGroupByArgs['orderBy'] }
        : { orderBy?: UserMetierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMetierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMetierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMetier model
   */
  readonly fields: UserMetierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMetier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMetierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metier<T extends MetierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetierDefaultArgs<ExtArgs>>): Prisma__MetierClient<$Result.GetResult<Prisma.$MetierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMetier model
   */
  interface UserMetierFieldRefs {
    readonly userId: FieldRef<"UserMetier", 'Int'>
    readonly metierId: FieldRef<"UserMetier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserMetier findUnique
   */
  export type UserMetierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter, which UserMetier to fetch.
     */
    where: UserMetierWhereUniqueInput
  }

  /**
   * UserMetier findUniqueOrThrow
   */
  export type UserMetierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter, which UserMetier to fetch.
     */
    where: UserMetierWhereUniqueInput
  }

  /**
   * UserMetier findFirst
   */
  export type UserMetierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter, which UserMetier to fetch.
     */
    where?: UserMetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetiers to fetch.
     */
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMetiers.
     */
    cursor?: UserMetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMetiers.
     */
    distinct?: UserMetierScalarFieldEnum | UserMetierScalarFieldEnum[]
  }

  /**
   * UserMetier findFirstOrThrow
   */
  export type UserMetierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter, which UserMetier to fetch.
     */
    where?: UserMetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetiers to fetch.
     */
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMetiers.
     */
    cursor?: UserMetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMetiers.
     */
    distinct?: UserMetierScalarFieldEnum | UserMetierScalarFieldEnum[]
  }

  /**
   * UserMetier findMany
   */
  export type UserMetierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter, which UserMetiers to fetch.
     */
    where?: UserMetierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetiers to fetch.
     */
    orderBy?: UserMetierOrderByWithRelationInput | UserMetierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMetiers.
     */
    cursor?: UserMetierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMetiers.
     */
    distinct?: UserMetierScalarFieldEnum | UserMetierScalarFieldEnum[]
  }

  /**
   * UserMetier create
   */
  export type UserMetierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMetier.
     */
    data: XOR<UserMetierCreateInput, UserMetierUncheckedCreateInput>
  }

  /**
   * UserMetier createMany
   */
  export type UserMetierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMetiers.
     */
    data: UserMetierCreateManyInput | UserMetierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMetier createManyAndReturn
   */
  export type UserMetierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * The data used to create many UserMetiers.
     */
    data: UserMetierCreateManyInput | UserMetierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMetier update
   */
  export type UserMetierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMetier.
     */
    data: XOR<UserMetierUpdateInput, UserMetierUncheckedUpdateInput>
    /**
     * Choose, which UserMetier to update.
     */
    where: UserMetierWhereUniqueInput
  }

  /**
   * UserMetier updateMany
   */
  export type UserMetierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMetiers.
     */
    data: XOR<UserMetierUpdateManyMutationInput, UserMetierUncheckedUpdateManyInput>
    /**
     * Filter which UserMetiers to update
     */
    where?: UserMetierWhereInput
    /**
     * Limit how many UserMetiers to update.
     */
    limit?: number
  }

  /**
   * UserMetier updateManyAndReturn
   */
  export type UserMetierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * The data used to update UserMetiers.
     */
    data: XOR<UserMetierUpdateManyMutationInput, UserMetierUncheckedUpdateManyInput>
    /**
     * Filter which UserMetiers to update
     */
    where?: UserMetierWhereInput
    /**
     * Limit how many UserMetiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMetier upsert
   */
  export type UserMetierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMetier to update in case it exists.
     */
    where: UserMetierWhereUniqueInput
    /**
     * In case the UserMetier found by the `where` argument doesn't exist, create a new UserMetier with this data.
     */
    create: XOR<UserMetierCreateInput, UserMetierUncheckedCreateInput>
    /**
     * In case the UserMetier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMetierUpdateInput, UserMetierUncheckedUpdateInput>
  }

  /**
   * UserMetier delete
   */
  export type UserMetierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
    /**
     * Filter which UserMetier to delete.
     */
    where: UserMetierWhereUniqueInput
  }

  /**
   * UserMetier deleteMany
   */
  export type UserMetierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMetiers to delete
     */
    where?: UserMetierWhereInput
    /**
     * Limit how many UserMetiers to delete.
     */
    limit?: number
  }

  /**
   * UserMetier without action
   */
  export type UserMetierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetier
     */
    select?: UserMetierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetier
     */
    omit?: UserMetierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetierInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MetierScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    createdAt: 'createdAt'
  };

  export type MetierScalarFieldEnum = (typeof MetierScalarFieldEnum)[keyof typeof MetierScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    whatsapp: 'whatsapp',
    ville: 'ville',
    quartier: 'quartier',
    cvDescription: 'cvDescription',
    profileViews: 'profileViews',
    validated: 'validated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserMetierScalarFieldEnum: {
    userId: 'userId',
    metierId: 'metierId'
  };

  export type UserMetierScalarFieldEnum = (typeof UserMetierScalarFieldEnum)[keyof typeof UserMetierScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MetierWhereInput = {
    AND?: MetierWhereInput | MetierWhereInput[]
    OR?: MetierWhereInput[]
    NOT?: MetierWhereInput | MetierWhereInput[]
    id?: IntFilter<"Metier"> | number
    libelle?: StringFilter<"Metier"> | string
    createdAt?: DateTimeFilter<"Metier"> | Date | string
    userMetiers?: UserMetierListRelationFilter
  }

  export type MetierOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    createdAt?: SortOrder
    userMetiers?: UserMetierOrderByRelationAggregateInput
  }

  export type MetierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    libelle?: string
    AND?: MetierWhereInput | MetierWhereInput[]
    OR?: MetierWhereInput[]
    NOT?: MetierWhereInput | MetierWhereInput[]
    createdAt?: DateTimeFilter<"Metier"> | Date | string
    userMetiers?: UserMetierListRelationFilter
  }, "id" | "libelle">

  export type MetierOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    createdAt?: SortOrder
    _count?: MetierCountOrderByAggregateInput
    _avg?: MetierAvgOrderByAggregateInput
    _max?: MetierMaxOrderByAggregateInput
    _min?: MetierMinOrderByAggregateInput
    _sum?: MetierSumOrderByAggregateInput
  }

  export type MetierScalarWhereWithAggregatesInput = {
    AND?: MetierScalarWhereWithAggregatesInput | MetierScalarWhereWithAggregatesInput[]
    OR?: MetierScalarWhereWithAggregatesInput[]
    NOT?: MetierScalarWhereWithAggregatesInput | MetierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metier"> | number
    libelle?: StringWithAggregatesFilter<"Metier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Metier"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    ville?: StringNullableFilter<"User"> | string | null
    quartier?: StringNullableFilter<"User"> | string | null
    cvDescription?: StringNullableFilter<"User"> | string | null
    profileViews?: IntFilter<"User"> | number
    validated?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetiers?: UserMetierListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    quartier?: SortOrderInput | SortOrder
    cvDescription?: SortOrderInput | SortOrder
    profileViews?: SortOrder
    validated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userMetiers?: UserMetierOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    ville?: StringNullableFilter<"User"> | string | null
    quartier?: StringNullableFilter<"User"> | string | null
    cvDescription?: StringNullableFilter<"User"> | string | null
    profileViews?: IntFilter<"User"> | number
    validated?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetiers?: UserMetierListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    quartier?: SortOrderInput | SortOrder
    cvDescription?: SortOrderInput | SortOrder
    profileViews?: SortOrder
    validated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    nom?: StringNullableWithAggregatesFilter<"User"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"User"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"User"> | string | null
    ville?: StringNullableWithAggregatesFilter<"User"> | string | null
    quartier?: StringNullableWithAggregatesFilter<"User"> | string | null
    cvDescription?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileViews?: IntWithAggregatesFilter<"User"> | number
    validated?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserMetierWhereInput = {
    AND?: UserMetierWhereInput | UserMetierWhereInput[]
    OR?: UserMetierWhereInput[]
    NOT?: UserMetierWhereInput | UserMetierWhereInput[]
    userId?: IntFilter<"UserMetier"> | number
    metierId?: IntFilter<"UserMetier"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metier?: XOR<MetierScalarRelationFilter, MetierWhereInput>
  }

  export type UserMetierOrderByWithRelationInput = {
    userId?: SortOrder
    metierId?: SortOrder
    user?: UserOrderByWithRelationInput
    metier?: MetierOrderByWithRelationInput
  }

  export type UserMetierWhereUniqueInput = Prisma.AtLeast<{
    userId_metierId?: UserMetierUserIdMetierIdCompoundUniqueInput
    AND?: UserMetierWhereInput | UserMetierWhereInput[]
    OR?: UserMetierWhereInput[]
    NOT?: UserMetierWhereInput | UserMetierWhereInput[]
    userId?: IntFilter<"UserMetier"> | number
    metierId?: IntFilter<"UserMetier"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metier?: XOR<MetierScalarRelationFilter, MetierWhereInput>
  }, "userId_metierId">

  export type UserMetierOrderByWithAggregationInput = {
    userId?: SortOrder
    metierId?: SortOrder
    _count?: UserMetierCountOrderByAggregateInput
    _avg?: UserMetierAvgOrderByAggregateInput
    _max?: UserMetierMaxOrderByAggregateInput
    _min?: UserMetierMinOrderByAggregateInput
    _sum?: UserMetierSumOrderByAggregateInput
  }

  export type UserMetierScalarWhereWithAggregatesInput = {
    AND?: UserMetierScalarWhereWithAggregatesInput | UserMetierScalarWhereWithAggregatesInput[]
    OR?: UserMetierScalarWhereWithAggregatesInput[]
    NOT?: UserMetierScalarWhereWithAggregatesInput | UserMetierScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserMetier"> | number
    metierId?: IntWithAggregatesFilter<"UserMetier"> | number
  }

  export type MetierCreateInput = {
    libelle: string
    createdAt?: Date | string
    userMetiers?: UserMetierCreateNestedManyWithoutMetierInput
  }

  export type MetierUncheckedCreateInput = {
    id?: number
    libelle: string
    createdAt?: Date | string
    userMetiers?: UserMetierUncheckedCreateNestedManyWithoutMetierInput
  }

  export type MetierUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetiers?: UserMetierUpdateManyWithoutMetierNestedInput
  }

  export type MetierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetiers?: UserMetierUncheckedUpdateManyWithoutMetierNestedInput
  }

  export type MetierCreateManyInput = {
    id?: number
    libelle: string
    createdAt?: Date | string
  }

  export type MetierUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    whatsapp?: string | null
    ville?: string | null
    quartier?: string | null
    cvDescription?: string | null
    profileViews?: number
    validated?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetiers?: UserMetierCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    whatsapp?: string | null
    ville?: string | null
    quartier?: string | null
    cvDescription?: string | null
    profileViews?: number
    validated?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetiers?: UserMetierUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetiers?: UserMetierUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetiers?: UserMetierUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    whatsapp?: string | null
    ville?: string | null
    quartier?: string | null
    cvDescription?: string | null
    profileViews?: number
    validated?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMetierCreateInput = {
    user: UserCreateNestedOneWithoutUserMetiersInput
    metier: MetierCreateNestedOneWithoutUserMetiersInput
  }

  export type UserMetierUncheckedCreateInput = {
    userId: number
    metierId: number
  }

  export type UserMetierUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserMetiersNestedInput
    metier?: MetierUpdateOneRequiredWithoutUserMetiersNestedInput
  }

  export type UserMetierUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    metierId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMetierCreateManyInput = {
    userId: number
    metierId: number
  }

  export type UserMetierUpdateManyMutationInput = {

  }

  export type UserMetierUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    metierId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserMetierListRelationFilter = {
    every?: UserMetierWhereInput
    some?: UserMetierWhereInput
    none?: UserMetierWhereInput
  }

  export type UserMetierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetierCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    createdAt?: SortOrder
  }

  export type MetierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetierMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    createdAt?: SortOrder
  }

  export type MetierMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    createdAt?: SortOrder
  }

  export type MetierSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    whatsapp?: SortOrder
    ville?: SortOrder
    quartier?: SortOrder
    cvDescription?: SortOrder
    profileViews?: SortOrder
    validated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    profileViews?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    whatsapp?: SortOrder
    ville?: SortOrder
    quartier?: SortOrder
    cvDescription?: SortOrder
    profileViews?: SortOrder
    validated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    whatsapp?: SortOrder
    ville?: SortOrder
    quartier?: SortOrder
    cvDescription?: SortOrder
    profileViews?: SortOrder
    validated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    profileViews?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MetierScalarRelationFilter = {
    is?: MetierWhereInput
    isNot?: MetierWhereInput
  }

  export type UserMetierUserIdMetierIdCompoundUniqueInput = {
    userId: number
    metierId: number
  }

  export type UserMetierCountOrderByAggregateInput = {
    userId?: SortOrder
    metierId?: SortOrder
  }

  export type UserMetierAvgOrderByAggregateInput = {
    userId?: SortOrder
    metierId?: SortOrder
  }

  export type UserMetierMaxOrderByAggregateInput = {
    userId?: SortOrder
    metierId?: SortOrder
  }

  export type UserMetierMinOrderByAggregateInput = {
    userId?: SortOrder
    metierId?: SortOrder
  }

  export type UserMetierSumOrderByAggregateInput = {
    userId?: SortOrder
    metierId?: SortOrder
  }

  export type UserMetierCreateNestedManyWithoutMetierInput = {
    create?: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput> | UserMetierCreateWithoutMetierInput[] | UserMetierUncheckedCreateWithoutMetierInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutMetierInput | UserMetierCreateOrConnectWithoutMetierInput[]
    createMany?: UserMetierCreateManyMetierInputEnvelope
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
  }

  export type UserMetierUncheckedCreateNestedManyWithoutMetierInput = {
    create?: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput> | UserMetierCreateWithoutMetierInput[] | UserMetierUncheckedCreateWithoutMetierInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutMetierInput | UserMetierCreateOrConnectWithoutMetierInput[]
    createMany?: UserMetierCreateManyMetierInputEnvelope
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserMetierUpdateManyWithoutMetierNestedInput = {
    create?: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput> | UserMetierCreateWithoutMetierInput[] | UserMetierUncheckedCreateWithoutMetierInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutMetierInput | UserMetierCreateOrConnectWithoutMetierInput[]
    upsert?: UserMetierUpsertWithWhereUniqueWithoutMetierInput | UserMetierUpsertWithWhereUniqueWithoutMetierInput[]
    createMany?: UserMetierCreateManyMetierInputEnvelope
    set?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    disconnect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    delete?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    update?: UserMetierUpdateWithWhereUniqueWithoutMetierInput | UserMetierUpdateWithWhereUniqueWithoutMetierInput[]
    updateMany?: UserMetierUpdateManyWithWhereWithoutMetierInput | UserMetierUpdateManyWithWhereWithoutMetierInput[]
    deleteMany?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserMetierUncheckedUpdateManyWithoutMetierNestedInput = {
    create?: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput> | UserMetierCreateWithoutMetierInput[] | UserMetierUncheckedCreateWithoutMetierInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutMetierInput | UserMetierCreateOrConnectWithoutMetierInput[]
    upsert?: UserMetierUpsertWithWhereUniqueWithoutMetierInput | UserMetierUpsertWithWhereUniqueWithoutMetierInput[]
    createMany?: UserMetierCreateManyMetierInputEnvelope
    set?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    disconnect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    delete?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    update?: UserMetierUpdateWithWhereUniqueWithoutMetierInput | UserMetierUpdateWithWhereUniqueWithoutMetierInput[]
    updateMany?: UserMetierUpdateManyWithWhereWithoutMetierInput | UserMetierUpdateManyWithWhereWithoutMetierInput[]
    deleteMany?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
  }

  export type UserMetierCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput> | UserMetierCreateWithoutUserInput[] | UserMetierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutUserInput | UserMetierCreateOrConnectWithoutUserInput[]
    createMany?: UserMetierCreateManyUserInputEnvelope
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
  }

  export type UserMetierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput> | UserMetierCreateWithoutUserInput[] | UserMetierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutUserInput | UserMetierCreateOrConnectWithoutUserInput[]
    createMany?: UserMetierCreateManyUserInputEnvelope
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserMetierUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput> | UserMetierCreateWithoutUserInput[] | UserMetierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutUserInput | UserMetierCreateOrConnectWithoutUserInput[]
    upsert?: UserMetierUpsertWithWhereUniqueWithoutUserInput | UserMetierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMetierCreateManyUserInputEnvelope
    set?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    disconnect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    delete?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    update?: UserMetierUpdateWithWhereUniqueWithoutUserInput | UserMetierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMetierUpdateManyWithWhereWithoutUserInput | UserMetierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
  }

  export type UserMetierUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput> | UserMetierCreateWithoutUserInput[] | UserMetierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMetierCreateOrConnectWithoutUserInput | UserMetierCreateOrConnectWithoutUserInput[]
    upsert?: UserMetierUpsertWithWhereUniqueWithoutUserInput | UserMetierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMetierCreateManyUserInputEnvelope
    set?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    disconnect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    delete?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    connect?: UserMetierWhereUniqueInput | UserMetierWhereUniqueInput[]
    update?: UserMetierUpdateWithWhereUniqueWithoutUserInput | UserMetierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMetierUpdateManyWithWhereWithoutUserInput | UserMetierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMetiersInput = {
    create?: XOR<UserCreateWithoutUserMetiersInput, UserUncheckedCreateWithoutUserMetiersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMetiersInput
    connect?: UserWhereUniqueInput
  }

  export type MetierCreateNestedOneWithoutUserMetiersInput = {
    create?: XOR<MetierCreateWithoutUserMetiersInput, MetierUncheckedCreateWithoutUserMetiersInput>
    connectOrCreate?: MetierCreateOrConnectWithoutUserMetiersInput
    connect?: MetierWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserMetiersNestedInput = {
    create?: XOR<UserCreateWithoutUserMetiersInput, UserUncheckedCreateWithoutUserMetiersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMetiersInput
    upsert?: UserUpsertWithoutUserMetiersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMetiersInput, UserUpdateWithoutUserMetiersInput>, UserUncheckedUpdateWithoutUserMetiersInput>
  }

  export type MetierUpdateOneRequiredWithoutUserMetiersNestedInput = {
    create?: XOR<MetierCreateWithoutUserMetiersInput, MetierUncheckedCreateWithoutUserMetiersInput>
    connectOrCreate?: MetierCreateOrConnectWithoutUserMetiersInput
    upsert?: MetierUpsertWithoutUserMetiersInput
    connect?: MetierWhereUniqueInput
    update?: XOR<XOR<MetierUpdateToOneWithWhereWithoutUserMetiersInput, MetierUpdateWithoutUserMetiersInput>, MetierUncheckedUpdateWithoutUserMetiersInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UserMetierCreateWithoutMetierInput = {
    user: UserCreateNestedOneWithoutUserMetiersInput
  }

  export type UserMetierUncheckedCreateWithoutMetierInput = {
    userId: number
  }

  export type UserMetierCreateOrConnectWithoutMetierInput = {
    where: UserMetierWhereUniqueInput
    create: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput>
  }

  export type UserMetierCreateManyMetierInputEnvelope = {
    data: UserMetierCreateManyMetierInput | UserMetierCreateManyMetierInput[]
    skipDuplicates?: boolean
  }

  export type UserMetierUpsertWithWhereUniqueWithoutMetierInput = {
    where: UserMetierWhereUniqueInput
    update: XOR<UserMetierUpdateWithoutMetierInput, UserMetierUncheckedUpdateWithoutMetierInput>
    create: XOR<UserMetierCreateWithoutMetierInput, UserMetierUncheckedCreateWithoutMetierInput>
  }

  export type UserMetierUpdateWithWhereUniqueWithoutMetierInput = {
    where: UserMetierWhereUniqueInput
    data: XOR<UserMetierUpdateWithoutMetierInput, UserMetierUncheckedUpdateWithoutMetierInput>
  }

  export type UserMetierUpdateManyWithWhereWithoutMetierInput = {
    where: UserMetierScalarWhereInput
    data: XOR<UserMetierUpdateManyMutationInput, UserMetierUncheckedUpdateManyWithoutMetierInput>
  }

  export type UserMetierScalarWhereInput = {
    AND?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
    OR?: UserMetierScalarWhereInput[]
    NOT?: UserMetierScalarWhereInput | UserMetierScalarWhereInput[]
    userId?: IntFilter<"UserMetier"> | number
    metierId?: IntFilter<"UserMetier"> | number
  }

  export type UserMetierCreateWithoutUserInput = {
    metier: MetierCreateNestedOneWithoutUserMetiersInput
  }

  export type UserMetierUncheckedCreateWithoutUserInput = {
    metierId: number
  }

  export type UserMetierCreateOrConnectWithoutUserInput = {
    where: UserMetierWhereUniqueInput
    create: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput>
  }

  export type UserMetierCreateManyUserInputEnvelope = {
    data: UserMetierCreateManyUserInput | UserMetierCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMetierUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMetierWhereUniqueInput
    update: XOR<UserMetierUpdateWithoutUserInput, UserMetierUncheckedUpdateWithoutUserInput>
    create: XOR<UserMetierCreateWithoutUserInput, UserMetierUncheckedCreateWithoutUserInput>
  }

  export type UserMetierUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMetierWhereUniqueInput
    data: XOR<UserMetierUpdateWithoutUserInput, UserMetierUncheckedUpdateWithoutUserInput>
  }

  export type UserMetierUpdateManyWithWhereWithoutUserInput = {
    where: UserMetierScalarWhereInput
    data: XOR<UserMetierUpdateManyMutationInput, UserMetierUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutUserMetiersInput = {
    email: string
    password: string
    role: $Enums.Role
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    whatsapp?: string | null
    ville?: string | null
    quartier?: string | null
    cvDescription?: string | null
    profileViews?: number
    validated?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserMetiersInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    nom?: string | null
    prenom?: string | null
    telephone?: string | null
    whatsapp?: string | null
    ville?: string | null
    quartier?: string | null
    cvDescription?: string | null
    profileViews?: number
    validated?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserMetiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMetiersInput, UserUncheckedCreateWithoutUserMetiersInput>
  }

  export type MetierCreateWithoutUserMetiersInput = {
    libelle: string
    createdAt?: Date | string
  }

  export type MetierUncheckedCreateWithoutUserMetiersInput = {
    id?: number
    libelle: string
    createdAt?: Date | string
  }

  export type MetierCreateOrConnectWithoutUserMetiersInput = {
    where: MetierWhereUniqueInput
    create: XOR<MetierCreateWithoutUserMetiersInput, MetierUncheckedCreateWithoutUserMetiersInput>
  }

  export type UserUpsertWithoutUserMetiersInput = {
    update: XOR<UserUpdateWithoutUserMetiersInput, UserUncheckedUpdateWithoutUserMetiersInput>
    create: XOR<UserCreateWithoutUserMetiersInput, UserUncheckedCreateWithoutUserMetiersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMetiersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMetiersInput, UserUncheckedUpdateWithoutUserMetiersInput>
  }

  export type UserUpdateWithoutUserMetiersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserMetiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    quartier?: NullableStringFieldUpdateOperationsInput | string | null
    cvDescription?: NullableStringFieldUpdateOperationsInput | string | null
    profileViews?: IntFieldUpdateOperationsInput | number
    validated?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetierUpsertWithoutUserMetiersInput = {
    update: XOR<MetierUpdateWithoutUserMetiersInput, MetierUncheckedUpdateWithoutUserMetiersInput>
    create: XOR<MetierCreateWithoutUserMetiersInput, MetierUncheckedCreateWithoutUserMetiersInput>
    where?: MetierWhereInput
  }

  export type MetierUpdateToOneWithWhereWithoutUserMetiersInput = {
    where?: MetierWhereInput
    data: XOR<MetierUpdateWithoutUserMetiersInput, MetierUncheckedUpdateWithoutUserMetiersInput>
  }

  export type MetierUpdateWithoutUserMetiersInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetierUncheckedUpdateWithoutUserMetiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMetierCreateManyMetierInput = {
    userId: number
  }

  export type UserMetierUpdateWithoutMetierInput = {
    user?: UserUpdateOneRequiredWithoutUserMetiersNestedInput
  }

  export type UserMetierUncheckedUpdateWithoutMetierInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMetierUncheckedUpdateManyWithoutMetierInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMetierCreateManyUserInput = {
    metierId: number
  }

  export type UserMetierUpdateWithoutUserInput = {
    metier?: MetierUpdateOneRequiredWithoutUserMetiersNestedInput
  }

  export type UserMetierUncheckedUpdateWithoutUserInput = {
    metierId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMetierUncheckedUpdateManyWithoutUserInput = {
    metierId?: IntFieldUpdateOperationsInput | number
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